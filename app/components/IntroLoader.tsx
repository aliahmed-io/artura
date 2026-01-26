"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IntroLoader() {
    const [complete, setComplete] = useState(false);
    const [count, setCount] = useState(0);

    useEffect(() => {
        // Simulate loading counter
        const interval = setInterval(() => {
            setCount((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setComplete(true), 500);
                    return 100;
                }
                return prev + Math.floor(Math.random() * 10) + 1;
            });
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence>
            {!complete && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white"
                    exit={{ y: "-100%" }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                >
                    <div className="flex flex-col items-center">
                        <h1 className="text-9xl font-serif tracking-tighter mb-4">
                            ARTURA
                        </h1>
                        <div className="text-xs uppercase tracking-widest font-mono text-white/50">
                            Loading Collection — {Math.min(count, 100)}%
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
