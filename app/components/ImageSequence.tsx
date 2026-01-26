"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ImageSequence() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Placeholder Frame Generation
    // In a real app, you would preload images here
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Set canvas size (pseudo-high-res)
        canvas.width = 1920;
        canvas.height = 1080;

        const render = (progress: number) => {
            // Clear
            ctx.fillStyle = "#000";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw Placeholder Visuals based on scroll
            const frameIndex = Math.floor(progress * 100);

            // 1. Dynamic Background gradient
            const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            gradient.addColorStop(0, `hsl(${220 + progress * 40}, 50%, 10%)`);
            gradient.addColorStop(1, `hsl(${260 + progress * 40}, 50%, 5%)`);
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // 2. Animated Circle (The "Scanning" effect)
            ctx.beginPath();
            ctx.arc(
                canvas.width / 2,
                canvas.height / 2,
                200 + Math.sin(progress * 10) * 50,
                0,
                Math.PI * 2
            );
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 + progress * 0.5})`;
            ctx.lineWidth = 2;
            ctx.stroke();

            // 3. Text Info
            ctx.font = "100px serif";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(`Process Phase ${frameIndex}`, canvas.width / 2, canvas.height / 2);
        };

        // Render loop synced to scroll value (using generic event since motion value pushes updates)
        // Actually, we need to subscribe to scrollYProgress
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            render(latest);
        });

        // Initial render
        render(0);

        return () => unsubscribe();
    }, [scrollYProgress]);

    return (
        <div ref={containerRef} className="h-[300vh] relative bg-[var(--color-night-deep)]">
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="w-full h-full object-cover"
                />

                <div className="absolute bottom-12 left-12 z-10 p-4 bg-black/50 backdrop-blur-md rounded border border-white/10">
                    <h3 className="text-xs uppercase tracking-widest text-white/60 mb-1">Restoration Log</h3>
                    <p className="text-sm font-mono text-white">Sequence Active</p>
                </div>
            </div>
        </div>
    );
}
