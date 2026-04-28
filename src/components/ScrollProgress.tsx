"use client";
import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 z-50 h-1 transform-gpu bg-gradient-to-r from-slate-900 via-blue-900 to-blue-700 dark:from-slate-100 dark:via-blue-200 dark:to-blue-400"
            style={{ scaleX, transformOrigin: "0%" }}
        />
    );
};

export default ScrollProgress;
