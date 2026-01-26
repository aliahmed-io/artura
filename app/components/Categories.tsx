"use client";

import { motion } from "framer-motion";

const CATEGORIES = [
    { id: 1, name: "Impressionism", count: "42 Works", image: "bg-blue-800" },
    { id: 2, name: "Renaissance", count: "18 Works", image: "bg-red-900" },
    { id: 3, name: "Abstract", count: "56 Works", image: "bg-amber-700" },
    { id: 4, name: "Photography", count: "85 Works", image: "bg-neutral-800" },
];

export default function Categories() {
    return (
        <section className="py-24 px-6 md:px-12 bg-[var(--color-night-deep)] text-white">
            <div className="max-w-7xl mx-auto mb-16 flex justify-between items-end">
                <h2 className="text-4xl md:text-5xl font-serif">Curated Departments</h2>
                <button className="text-xs uppercase tracking-widest border border-white/20 px-6 py-3 hover:bg-white hover:text-black transition-colors cursor-hover">
                    View All
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[120vh] md:h-[80vh]">
                {CATEGORIES.map((cat, i) => (
                    <motion.div
                        key={cat.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className={`group relative overflow-hidden bg-[var(--color-night-blue)]/10 ${i === 0 || i === 3 ? "md:row-span-2" : ""
                            } cursor-hover`}
                        data-cursor="Explore"
                    >
                        <div className={`absolute inset-0 ${cat.image} opacity-60 transition-transform duration-700 group-hover:scale-105`} />

                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <p className="text-xs uppercase tracking-widest text-white/60 mb-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                                    {cat.count}
                                </p>
                                <h3 className="text-3xl md:text-4xl font-serif">{cat.name}</h3>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
