"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaEnvelope, FaPhone, FaWhatsapp, FaTimes, FaComments, FaLinkedin } from "react-icons/fa";

const FloatingContact = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show floating contact after scrolling 300px
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const contactOptions = [
        {
            icon: FaEnvelope,
            label: "Email Me",
            href: "mailto:ibrahimomobolaji1999@gmail.com",
            color: "from-blue-500 to-blue-600",
            hoverColor: "hover:from-blue-600 hover:to-blue-700",
            description: "Send an email"
        },
        {
            icon: FaPhone,
            label: "Call Me",
            href: "tel:+2349047337104",
            color: "from-green-500 to-green-600",
            hoverColor: "hover:from-green-600 hover:to-green-700",
            description: "Make a call"
        },
        {
            icon: FaWhatsapp,
            label: "WhatsApp",
            href: "https://wa.me/2349047337104",
            color: "from-green-600 to-green-700",
            hoverColor: "hover:from-green-700 hover:to-green-800",
            description: "Chat on WhatsApp"
        },
        {
            icon: FaLinkedin,
            label: "LinkedIn",
            href: "https://linkedin.com/in/bolajeee",
            color: "from-blue-600 to-blue-700",
            hoverColor: "hover:from-blue-700 hover:to-blue-800",
            description: "Connect on LinkedIn"
        },
    ];

    if (!isVisible) return null;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-6 right-6 z-50"
        >
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Contact Options */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.8, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="absolute bottom-20 right-0 space-y-3 min-w-[200px]"
                        >
                            {contactOptions.map((option, index) => (
                                <motion.a
                                    key={option.label}
                                    href={option.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, x: 50, scale: 0.8 }}
                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                    exit={{ opacity: 0, x: 50, scale: 0.8 }}
                                    transition={{
                                        delay: index * 0.1,
                                        type: "spring",
                                        damping: 20,
                                        stiffness: 300
                                    }}
                                    whileHover={{
                                        scale: 1.05,
                                        x: -5,
                                        transition: { duration: 0.2 }
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`group flex items-center gap-4 px-5 py-4 bg-gradient-to-r ${option.color} ${option.hoverColor} text-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 backdrop-blur-sm border border-white/20`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    <div className="p-2 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors duration-300">
                                        <option.icon size={20} />
                                    </div>
                                    <div className="flex-1">
                                        <span className="block text-sm font-semibold">
                                            {option.label}
                                        </span>
                                        <span className="block text-xs text-white/80">
                                            {option.description}
                                        </span>
                                    </div>
                                </motion.a>
                            ))}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Main Toggle Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`relative w-16 h-16 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center text-white overflow-hidden group ${isOpen
                        ? "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"
                        : "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                    }`}
            >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                {/* Icon */}
                <motion.div
                    animate={{
                        rotate: isOpen ? 135 : 0,
                        scale: isOpen ? 0.9 : 1
                    }}
                    transition={{ duration: 0.3, type: "spring", damping: 15 }}
                    className="relative z-10"
                >
                    {isOpen ? <FaTimes size={22} /> : <FaComments size={22} />}
                </motion.div>

                {/* Pulse Animation */}
                {!isOpen && (
                    <motion.div
                        className="absolute inset-0 rounded-full bg-orange-500"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.7, 0, 0.7],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                )}
            </motion.button>

            {/* Tooltip */}
            {!isOpen && (
                <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg pointer-events-none"
                >
                    Let's Connect!
                    <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45" />
                </motion.div>
            )}
        </motion.div>
    );
};

export default FloatingContact;