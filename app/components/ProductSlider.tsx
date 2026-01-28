"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const PRODUCTS = [
    {
        category: "Masterpiece",
        title: "THE STARRY NIGHT",
        artist: "Vincent van Gogh, 1889",
        price: "$1,200",
        image: "/hero section/The-Starry-Night-1200x630-1.webp"
    },
    {
        category: "Renaissance",
        title: "THE KISS",
        artist: "Gustav Klimt, 1908",
        price: "$1,500",
        image: "/images/art/the-kiss.jpg"
    },
    {
        category: "Dutch Golden Age",
        title: "GIRL WITH A PEARL EARRING",
        artist: "Johannes Vermeer, 1665",
        price: "$980",
        image: "/images/art/pearl-earring.jpg"
    },
    {
        category: "Japanese Art",
        title: "THE GREAT WAVE",
        artist: "Katsushika Hokusai, 1831",
        price: "$1,800",
        image: "/images/art/great-wave.jpg"
    },
    {
        category: "Romanticism",
        title: "WANDERER ABOVE THE SEA OF FOG",
        artist: "Caspar David Friedrich, 1818",
        price: "$2,100",
        image: "/images/art/wanderer.jpg"
    },
];

export default function ProductSlider() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

    return (
        <section ref={targetRef} className="relative z-10 h-[300vh] bg-[#FAF7F2]">
            {/* Paper Texture Overlay */}
            <div
                className="absolute inset-0 pointer-events-none opacity-30 mix-blend-multiply z-0"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E")`,
                }}
            />

            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-8 px-6 md:px-24">
                    {/* Intro Title */}
                    <div className="flex-shrink-0 w-[80vw] md:w-[35vw] flex flex-col justify-center z-10 pr-8">
                        <h2 className="text-6xl md:text-8xl font-serif text-[#2C2826]/10 tracking-tight leading-none mb-6">
                            CURATED
                        </h2>
                        <p className="text-xl md:text-2xl text-[#2C2826] font-serif italic max-w-md leading-relaxed">
                            Museum-quality reproductions, hand-selected for the discerning collector.
                        </p>
                        <div className="mt-8 flex items-center gap-3 text-[#6B635A]">
                            <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
                            <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </div>
                    </div>

                    {/* Product Cards */}
                    {PRODUCTS.map((product) => (
                        <div
                            key={product.title}
                            className="flex-shrink-0 w-[80vw] md:w-[50vw] h-[70vh] md:h-[75vh] relative group overflow-hidden bg-[#E8E4DD] shadow-2xl cursor-hover"
                            data-cursor="View"
                        >
                            {/* Background Image */}
                            <Image
                                src={product.image}
                                alt={product.title}
                                fill
                                className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000 ease-out"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#2C2826] via-[#2C2826]/30 to-transparent" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full z-20">
                                <span className="block text-xs uppercase tracking-[0.3em] text-[#B8860B] mb-3">{product.category}</span>
                                <h3 className="text-2xl md:text-4xl font-serif text-white mb-2 leading-tight">{product.title}</h3>
                                <p className="text-white/60 text-sm mb-6">{product.artist}</p>

                                <div className="flex items-center justify-between border-t border-white/20 pt-6">
                                    <span className="text-2xl font-serif text-white">{product.price}</span>
                                    <button className="text-xs uppercase tracking-widest border border-white/30 px-6 py-3 text-white hover:bg-white hover:text-[#2C2826] transition-colors">
                                        Add to Collection
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* End Spacer */}
                    <div className="w-[10vw] flex-shrink-0"></div>
                </motion.div>
            </div>
        </section>
    );
}
