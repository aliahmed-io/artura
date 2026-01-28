"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutUs() {
    return (
        <section className="py-32 px-6 md:px-12 bg-[#f8f6f0] text-neutral-900">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative aspect-square"
                >
                    <Image
                        src="/images/vangogh-portrait.png"
                        alt="Van Gogh Self Portrait - The Spirit of Artura"
                        fill
                        className="object-contain"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-8"
                >
                    <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-4">About Artura</p>
                        <h2 className="text-4xl md:text-5xl font-serif leading-tight">
                            Where passion meets<br />
                            <span className="italic">masterpiece</span>
                        </h2>
                    </div>

                    <div className="space-y-6 text-neutral-600 leading-relaxed">
                        <p>
                            Artura was born from a simple belief: that the world's greatest art
                            shouldn't be confined to museum walls. We bring masterpieces into your
                            home, hand-painted by skilled artisans who understand every brushstroke
                            of the original.
                        </p>
                        <p>
                            Our revolutionary AI Try-On technology lets you envision any artwork
                            in your space before you buy. Upload your photo, choose your masterpiece,
                            and watch as we transform digital dreams into physical, textured oil paintings.
                        </p>
                        <p>
                            Every piece we create is a labor of love—museum-quality reproductions
                            crafted with archival-grade materials, designed to last generations.
                        </p>
                    </div>

                    <div className="flex gap-12 pt-4">
                        <div>
                            <p className="text-4xl font-serif">500+</p>
                            <p className="text-xs uppercase tracking-widest text-neutral-500 mt-1">Masterpieces</p>
                        </div>
                        <div>
                            <p className="text-4xl font-serif">50k+</p>
                            <p className="text-xs uppercase tracking-widest text-neutral-500 mt-1">Happy Collectors</p>
                        </div>
                        <div>
                            <p className="text-4xl font-serif">98%</p>
                            <p className="text-xs uppercase tracking-widest text-neutral-500 mt-1">Satisfaction</p>
                        </div>
                    </div>

                    <button className="mt-8 text-xs uppercase tracking-widest border border-neutral-900 px-8 py-4 hover:bg-neutral-900 hover:text-white transition-colors cursor-hover">
                        Learn Our Story
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
