"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

interface ParallaxLayerConfig {
    src: string;
    alt: string;
    depth: number; // 0 = no movement, 1 = maximum movement
    zIndex: number;
    scale?: number;
    position?: {
        top?: string;
        left?: string;
        right?: string;
        bottom?: string;
    };
    size?: {
        width?: string;
        height?: string;
    };
    isBase?: boolean;
}

const PARALLAX_LAYERS: ParallaxLayerConfig[] = [
    // Background - Base Starry Night (full artwork visible)
    {
        src: "/hero section/The-Starry-Night-1200x630-1.webp",
        alt: "The Starry Night by Vincent van Gogh",
        depth: 0.15,
        zIndex: 1,
        scale: 1.00,
        isBase: true,
    },
    // Foreground - Stars and swirls overlay
    {
        src: "/hero section/image 2.png",
        alt: "Starry Night swirls and stars",
        depth: 0.5,
        zIndex: 2,
        scale: 1.05,
        isBase: true, // Use same rendering as base for full coverage
    },
];

const MAX_OFFSET = 30; // pixels
const LERP_FACTOR = 0.08;
const IDLE_TIMEOUT = 3000; // ms before breathing animation starts

export default function ParallaxHero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const rafRef = useRef<number | null>(null);
    const mouseRef = useRef({ x: 0, y: 0 });
    const currentRef = useRef({ x: 0, y: 0 });
    const lastMoveTimeRef = useRef(0);

    useEffect(() => {
        lastMoveTimeRef.current = Date.now();
    }, []);

    const [isLoaded, setIsLoaded] = useState(false);
    const [isIdle, setIsIdle] = useState(false);
    const [layerOffsets, setLayerOffsets] = useState<{ x: number; y: number }[]>(
        PARALLAX_LAYERS.map(() => ({ x: 0, y: 0 }))
    );

    // Lerp helper for smooth interpolation
    const lerp = useCallback((start: number, end: number, factor: number) => {
        return start + (end - start) * factor;
    }, []);

    // Normalize mouse position to -1 to 1 range (center = 0)
    const normalizeMousePosition = useCallback(
        (clientX: number, clientY: number) => {
            if (!containerRef.current) return { x: 0, y: 0 };

            const rect = containerRef.current.getBoundingClientRect();
            const x = ((clientX - rect.left) / rect.width - 0.5) * 2;
            const y = ((clientY - rect.top) / rect.height - 0.5) * 2;

            return {
                x: Math.max(-1, Math.min(1, x)),
                y: Math.max(-1, Math.min(1, y)),
            };
        },
        []
    );

    // Animation loop
    useEffect(() => {
        let isActive = true;

        const animate = () => {
            if (!isActive) return;

            // Smooth lerping to target position
            currentRef.current.x = lerp(
                currentRef.current.x,
                mouseRef.current.x,
                LERP_FACTOR
            );
            currentRef.current.y = lerp(
                currentRef.current.y,
                mouseRef.current.y,
                LERP_FACTOR
            );

            // Calculate offsets for each layer based on depth
            const newOffsets = PARALLAX_LAYERS.map((layer) => ({
                x: currentRef.current.x * layer.depth * MAX_OFFSET,
                y: currentRef.current.y * layer.depth * MAX_OFFSET,
            }));

            setLayerOffsets(newOffsets);
            rafRef.current = requestAnimationFrame(animate);
        };

        rafRef.current = requestAnimationFrame(animate);

        return () => {
            isActive = false;
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
        };
    }, [lerp]);

    // Mouse move handler
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const normalized = normalizeMousePosition(e.clientX, e.clientY);
            mouseRef.current = normalized;
            lastMoveTimeRef.current = Date.now();
            setIsIdle(false);
        };

        window.addEventListener("mousemove", handleMouseMove, { passive: true });

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [normalizeMousePosition]);

    // Idle detection
    useEffect(() => {
        const checkIdle = setInterval(() => {
            if (Date.now() - lastMoveTimeRef.current > IDLE_TIMEOUT) {
                setIsIdle(true);
            }
        }, 1000);

        return () => clearInterval(checkIdle);
    }, []);
    return (
        <section ref={containerRef} className="parallax-hero">
            <div className="parallax-container">
                {PARALLAX_LAYERS.map((layer, index) => (
                    <div
                        key={index}
                        className={`parallax-layer ${layer.isBase ? "parallax-layer--base" : ""} ${isIdle ? "parallax-layer--breathing" : ""}`}
                        style={{
                            zIndex: layer.zIndex,
                            transform: layer.isBase
                                ? `translate(calc(-50% + ${layerOffsets[index]?.x ?? 0}px), calc(-50% + ${layerOffsets[index]?.y ?? 0}px)) scale(${layer.scale || 1})`
                                : `translate(${layerOffsets[index]?.x ?? 0}px, ${layerOffsets[index]?.y ?? 0}px)`,
                            ...(!layer.isBase && layer.position
                                ? {
                                    top: layer.position.top,
                                    left: layer.position.left,
                                    right: layer.position.right,
                                    bottom: layer.position.bottom,
                                }
                                : {}),
                            ...(!layer.isBase && layer.size
                                ? {
                                    width: layer.size.width,
                                    height: layer.size.height,
                                }
                                : {}),
                            // CSS variables for breathing animation
                            "--breathe-x": `${layer.depth * 1.5}px`,
                            "--breathe-y": `${layer.depth * 1}px`,
                            "--offset-x": `${layerOffsets[index]?.x ?? 0}px`,
                            "--offset-y": `${layerOffsets[index]?.y ?? 0}px`,
                        } as React.CSSProperties}
                    >
                        {layer.isBase ? (
                            <Image
                                src={layer.src}
                                alt={layer.alt}
                                fill
                                priority
                                quality={100}
                                sizes="100vw"
                                style={{ objectFit: "contain" }}
                            />
                        ) : (
                            <Image
                                src={layer.src}
                                alt={layer.alt}
                                width={800}
                                height={600}
                                quality={95}
                                style={{
                                    width: "100%",
                                    height: "auto",
                                }}
                            />
                        )}
                    </div>
                ))}
            </div>

            {/* Typography Overlay */}
            <div className="hero-overlay">
                <div className="hero-content">
                    <h1 className="hero-logo">Artura</h1>
                    <p className="hero-tagline">Where art comes alive.</p>
                </div>
            </div>
        </section>
    );
}
