"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

const TOTAL_FRAMES = 240;
const getFramePath = (frame: number) =>
    `/scroll sequence/ezgif-frame-${String(frame).padStart(3, '0')}.jpg`;

export default function ImageSequence() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imagesRef = useRef<HTMLImageElement[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [loadProgress, setLoadProgress] = useState(0);
    const currentFrameRef = useRef(1);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Preload all images
    useEffect(() => {
        let loadedCount = 0;
        const images: HTMLImageElement[] = [];

        for (let i = 1; i <= TOTAL_FRAMES; i++) {
            const img = new Image();
            img.src = getFramePath(i);
            img.onload = () => {
                loadedCount++;
                setLoadProgress(Math.floor((loadedCount / TOTAL_FRAMES) * 100));
                if (loadedCount === TOTAL_FRAMES) {
                    setIsLoading(false);
                    // Draw first frame
                    drawFrame(1);
                }
            };
            images[i] = img;
        }
        imagesRef.current = images;
    }, []);

    const drawFrame = useCallback((frameIndex: number) => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
        const img = imagesRef.current[frameIndex];

        if (!canvas || !ctx || !img) return;

        // Set canvas size to match image (only once)
        if (canvas.width !== img.width || canvas.height !== img.height) {
            canvas.width = img.width;
            canvas.height = img.height;
        }

        ctx.drawImage(img, 0, 0);
        currentFrameRef.current = frameIndex;
    }, []);

    // Update frame on scroll
    useMotionValueEvent(scrollYProgress, "change", (value) => {
        if (isLoading) return;

        // Map scroll progress (0-1) to frame number (1-240)
        const frameIndex = Math.min(
            Math.max(1, Math.floor(value * TOTAL_FRAMES) + 1),
            TOTAL_FRAMES
        );

        if (frameIndex !== currentFrameRef.current) {
            drawFrame(frameIndex);
        }
    });

    return (
        <div ref={containerRef} className="h-[250vh] relative bg-[#2C2826]">
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
                {isLoading ? (
                    <div className="text-center">
                        <div className="w-48 h-1 bg-white/20 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-[#B8860B] transition-all duration-200"
                                style={{ width: `${loadProgress}%` }}
                            />
                        </div>
                        <p className="text-xs text-white/50 mt-4 font-mono">
                            Loading sequence: {loadProgress}%
                        </p>
                    </div>
                ) : (
                    <canvas
                        ref={canvasRef}
                        className="w-full h-full object-contain"
                    />
                )}
            </div>
        </div>
    );
}
