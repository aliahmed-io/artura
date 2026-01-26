"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const navLinks = [
    { name: "The Collection", href: "/collection" },
    { name: "Masters", href: "/masters" },
    { name: "Journal", href: "/journal" },
    { name: "AI Try-On", href: "/ai-try-on", isNew: true },
];

export default function Navbar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
        setScrolled(latest > 50);
    });

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-colors duration-500 ${scrolled ? "bg-black/50 backdrop-blur-md" : "bg-transparent"
                }`}
        >
            <Link href="/" className="text-xl font-serif tracking-widest uppercase z-50 mix-blend-difference cursor-hover">
                ARTURA
            </Link>

            <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="group relative text-xs uppercase tracking-[0.2em] text-white/80 hover:text-white transition-colors cursor-hover"
                        data-cursor="View"
                    >
                        {link.name}
                        {link.isNew && (
                            <span className="absolute -top-3 -right-3 flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                            </span>
                        )}
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
                    </Link>
                ))}
            </div>

            <button className="text-xs uppercase tracking-widest border border-white/20 rounded-full px-6 py-2 hover:bg-white hover:text-black transition-all cursor-hover" data-cursor="Open">
                Menu
            </button>
        </motion.nav>
    );
}
