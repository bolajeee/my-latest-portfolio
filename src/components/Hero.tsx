"use client";
import Image from "next/image";
import Link from "next/link";
import profilepic from "../assets/profilepic.jpg";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "./Button";

const Hero = () => {
  const typedElement = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const options = {
      strings: ["Ibrahim O. IBRAHIM"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: false,
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-orange-50/20 dark:to-orange-950/20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 pt-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Text Content - Left Side */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="lg:w-1/2 text-center lg:text-left space-y-6"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-orange-100 dark:bg-orange-900/30 rounded-full text-orange-600 dark:text-orange-400 text-sm font-medium"
            >
              👋 Welcome to my portfolio
            </motion.div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-foreground">Hi, I am</span>
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                <span ref={typedElement}></span>
              </span>
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-foreground/80 font-medium"
            >
              Fullstack Engineer & Food Process Innovator
            </motion.p>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-4 text-foreground/70 leading-relaxed"
            >
              <p className="text-lg">
                5+ years of experience building scalable web and mobile applications with React.js, React Native, and modern JavaScript frameworks.
              </p>
              <p className="text-lg">
                Bridging software engineering with food process innovation to create impactful, sustainable solutions.
              </p>
            </motion.div>

            {/* Call to Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-6"
            >
              <Link href="#projects">
                <Button size="lg" className="w-full sm:w-auto">
                  See My Work
                </Button>
              </Link>
              <a href="https://drive.google.com/file/d/1oVrM1SqjUSLeoEXaxzX-wVJs1jXSRv1D/view?usp=drive_link" download>
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Download CV
                </Button>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="flex justify-center lg:justify-start gap-4 pt-4"
            >
              <div className="text-sm text-foreground/60">
                Connect with me:
              </div>
            </motion.div>
          </motion.div>

          {/* Image - Right Side */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            className="lg:w-1/2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <div className="absolute -inset-8 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full blur-3xl opacity-10 animate-pulse delay-1000"></div>

              {/* Profile Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative z-10"
              >
                <Image
                  src={profilepic}
                  alt="Ibrahim O. Ibrahim - Fullstack Engineer"
                  className="h-[300px] w-[300px] md:h-[400px] md:w-[400px] lg:h-[450px] lg:w-[450px] rounded-full border-4 border-white dark:border-gray-800 object-cover shadow-2xl"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;