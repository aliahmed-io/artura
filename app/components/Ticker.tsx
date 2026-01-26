"use client";

import { motion } from "framer-motion";

const ITEMS = [
    "Museum Quality Prints",
    "Authenticated Masterpieces",
    "Global Priority Shipping",
    "Expert Curation",
    "Archival Grade Materials",
    "Limited Edition Releases",
];

export default function Ticker() {
    return (
        <div className="bg-amber-400 py-4 overflow-hidden border-y border-black">
            <motion.div
                className="flex whitespace-nowrap"
                animate={{ x: "-50%" }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 20,
                }}
            >
                {[...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS].map((item, i) => (
                    <div key={i} className="flex items-center gap-8 mx-8">
                        <span className="text-black font-mono text-sm uppercase tracking-widest font-bold">
                            {item}
                        </span>
                        <span className="w-2 h-2 bg-black rounded-full" />
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
