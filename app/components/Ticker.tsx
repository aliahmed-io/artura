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
        <div className="bg-[#B8860B] py-4 overflow-hidden border-y border-[#2C2826]/20">
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
                        <span className="text-[#2C2826] font-mono text-sm uppercase tracking-widest font-bold">
                            {item}
                        </span>
                        <span className="w-2 h-2 bg-[#2C2826] rounded-full" />
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
