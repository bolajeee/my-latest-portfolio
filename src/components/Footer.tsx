"use client";
import React from 'react'
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub, FaArrowUp, FaHeart } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialLinks = [
    { href: "https://www.linkedin.com/in/bolajeee/", icon: FaLinkedin, label: "LinkedIn" },
    { href: "https://x.com/_bolajeee", icon: FaTwitter, label: "Twitter" },
    { href: "https://www.instagram.com/_bolajeee/", icon: FaInstagram, label: "Instagram" },
    { href: "https://www.github.com/bolajeee", icon: FaGithub, label: "GitHub" },
  ];

  return (
    <footer className="relative bg-gradient-to-r from-gray-50 to-orange-50/30 dark:from-gray-900 dark:to-orange-950/30 border-t border-orange-500/20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <p className="text-sm text-foreground/70 flex items-center justify-center md:justify-start gap-1">
              &copy; {new Date().getFullYear()} Made with <FaHeart className="text-red-500 text-xs" /> by Ibrahim O. Ibrahim
            </p>
            <p className="text-xs text-foreground/50 mt-1">All rights reserved.</p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-all duration-300 border border-gray-200 dark:border-gray-700"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>

          {/* Back to Top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm font-medium"
            >
              <FaArrowUp size={14} />
              Back to Top
            </motion.button>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="mt-8 pt-6 border-t border-orange-500/20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center"
          >
            <p className="text-xs text-foreground/50">
              Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

export default Footer