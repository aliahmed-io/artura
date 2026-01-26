"use client";

import { motion } from "framer-motion";

export default function OurStory() {
    return (
        <section className="relative py-32 px-6 md:px-24 bg-[#F5F1E6] text-neutral-900 overflow-hidden">
            {/* Paper Texture Overlay */}
            <div
                className="absolute inset-0 pointer-events-none opacity-30 mix-blend-multiply"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opactiy='0.5'/%3E%3C/svg%3E")`,
                }}
            />

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-6xl font-serif mb-8 text-[#2C2C2C]">Our Story</h2>
                    <p className="text-lg leading-relaxed font-serif text-[#4A4A4A] mb-6">
                        Born from a passion for the masters, Artura bridges the gap between the Louvre and your living room. We believe that art is not just to be viewed, but to be felt, lived with, and cherished.
                    </p>
                    <p className="text-lg leading-relaxed font-serif text-[#4A4A4A] mb-8">
                        Our curators travel the globe to secure exclusive rights to high-resolution scans of the world's most treasured canvases. Using archival-grade pigments and museum-standard canvas, we reproduce every brushstroke with breathtaking fidelity.
                    </p>
                    <div className="h-px w-32 bg-neutral-900/20" />
                </motion.div>

                {/* Illustration Placeholder */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative aspect-4/3 bg-[#E6E2D6] p-4 shadow-xl rotate-2"
                >
                    <div className="absolute inset-0 border border-black/5 m-4" />
                    <div className="h-full w-full flex items-center justify-center border border-black/10 bg-[#EZE8DE]">
                        <span className="font-serif italic text-neutral-400">Van Gogh Sketch Placeholder</span>
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-900/10 rounded-full blur-2xl" />
                </motion.div>
            </div>
        </section>
    );
}
