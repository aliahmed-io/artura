"use client";

import { motion } from "framer-motion";

const CATEGORIES = [
    { id: 1, name: "Impressionism", count: "42 Works", image: "/images/art/monet.jpg" },
    { id: 2, name: "Renaissance", count: "18 Works", image: "/images/art/mona-lisa.jpg" },
    { id: 3, name: "Abstract", count: "56 Works", image: "/images/art/kandinsky.jpg" },
    { id: 4, name: "Photography", count: "85 Works", image: "/images/art/man-ray.jpg" },
];

export default function Categories() {
    return (
        <section className="relative py-24 px-6 md:px-12 bg-[#E8E4DD] text-[#2C2826] overflow-hidden">
            {/* Paper Texture Overlay */}
            <div
                className="absolute inset-0 pointer-events-none opacity-30 mix-blend-multiply"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E")`,
                }}
            />
            <div className="max-w-7xl mx-auto mb-16 flex justify-between items-end relative z-10">
                <h2 className="text-4xl md:text-5xl font-serif">Curated Departments</h2>
                <button className="text-xs uppercase tracking-widest border border-[#2C2826]/30 px-6 py-3 hover:bg-[#2C2826] hover:text-white transition-colors cursor-hover">
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
                        className={`group relative overflow-hidden bg-[#2C2826] ${i === 0 || i === 3 ? "md:row-span-2" : ""
                            } cursor-hover`}
                        data-cursor="Explore"
                    >
                        <img src={cat.image} alt={cat.name} className="absolute inset-0 w-full h-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-105" />

                        <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent">
                            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <p className="text-xs uppercase tracking-widest text-white/70 mb-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                                    {cat.count}
                                </p>
                                <h3 className="text-3xl md:text-4xl font-serif text-white">{cat.name}</h3>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
