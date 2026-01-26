"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const PRODUCTS = [
    { id: 1, title: "The Starry Night", artist: "Vincent van Gogh", price: "$1,200", image: "bg-blue-900" },
    { id: 2, title: "The Kiss", artist: "Gustav Klimt", price: "$1,500", image: "bg-yellow-700" },
    { id: 3, title: "Girl with a Pearl Earring", artist: "Johannes Vermeer", price: "$980", image: "bg-slate-700" },
    { id: 4, title: "The Great Wave", artist: "Hokusai", price: "$1,800", image: "bg-cyan-900" },
    { id: 5, title: "Wanderer above the Sea of Fog", artist: "Caspar David Friedrich", price: "$2,100", image: "bg-gray-800" },
];

export default function ProductSlider() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-[var(--color-night-deep)]">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <div className="absolute top-12 left-6 z-10 md:left-24 md:top-24">
                    <h2 className="text-4xl md:text-6xl font-serif text-white mb-4">Curated Collection</h2>
                    <p className="text-white/50 max-w-sm">
                        Drag to explore our exclusive selection of museum-grade prints.
                    </p>
                </div>

                <motion.div style={{ x }} className="flex gap-12 px-24">
                    {PRODUCTS.map((product) => (
                        <div
                            key={product.id}
                            className="group relative h-[60vh] w-[40vh] shrink-0 overflow-hidden bg-neutral-800 cursor-hover"
                            data-cursor="View"
                        >
                            <div className={`absolute inset-0 ${product.image} opacity-80 transition-opacity group-hover:opacity-100`} />

                            {/* Product Info Overlay */}
                            <div className="absolute bottom-0 left-0 w-full p-8 bg-linear-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                <h3 className="text-2xl font-serif text-white">{product.title}</h3>
                                <p className="text-white/60 text-sm mb-2">{product.artist}</p>
                                <div className="flex justify-between items-center border-t border-white/20 pt-4 mt-4">
                                    <span className="text-lg font-medium">{product.price}</span>
                                    <button className="text-xs uppercase tracking-widest border border-white/30 px-4 py-2 hover:bg-white hover:text-black transition-colors">
                                        Add to Bag
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
