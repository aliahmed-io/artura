"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
    const [cursorText, setCursorText] = useState("");
    const [isHovered, setIsHovered] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            mouseX.set(e.clientX - 16);
            mouseY.set(e.clientY - 16);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest("a, button, .cursor-hover")) {
                setIsHovered(true);
                const text = target.closest("[data-cursor]")?.getAttribute("data-cursor");
                setCursorText(text || "");
            } else {
                setIsHovered(false);
                setCursorText("");
            }
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [mouseX, mouseY]);

    return (
        <motion.div
            className="fixed top-0 left-0 z-50 pointer-events-none flex items-center justify-center rounded-full mix-blend-difference bg-white"
            style={{
                x: cursorX,
                y: cursorY,
                width: 32,
                height: 32,
            }}
            animate={{
                width: isHovered ? 80 : 32,
                height: isHovered ? 80 : 32,
                opacity: 1,
            }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
        >
            <span className="text-black text-[10px] uppercase font-medium tracking-widest">
                {cursorText}
            </span>
        </motion.div>
    );
}
