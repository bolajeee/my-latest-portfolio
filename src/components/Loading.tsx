"use client";
import { motion } from "framer-motion";

const Loading = () => {
    return (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
            <div className="text-center">
                <motion.div
                    className="w-16 h-16 border-4 border-orange-500/30 border-t-orange-500 rounded-full mx-auto mb-4"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-foreground/70 text-sm"
                >
                    Loading...
                </motion.p>
            </div>
        </div>
    );
};

export default Loading;