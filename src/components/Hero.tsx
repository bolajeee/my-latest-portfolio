"use client";
import Image from "next/image";
import Link from "next/link";
import profilepic from "../assets/profilepic.jpg";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { motion, type Variants } from "framer-motion";
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
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  } satisfies Variants;

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  } satisfies Variants;

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-slate-50/40 to-slate-200/35 dark:via-slate-950 dark:to-blue-950/40">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-900/10 blur-3xl animate-pulse dark:bg-blue-300/10" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-slate-900/10 blur-3xl animate-pulse delay-1000 dark:bg-slate-200/10" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 pt-28 lg:py-20 lg:pt-32">
        <div className="flex flex-col items-center justify-between gap-12 lg:flex-row lg:gap-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="space-y-6 text-center lg:w-1/2 lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-blue-900 dark:bg-slate-900/40 dark:text-blue-200"
            >
              Welcome to my portfolio
            </motion.div>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
              <span className="text-foreground">Hi, I am</span>
              <br />
              <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-blue-700 bg-clip-text text-transparent dark:from-slate-100 dark:via-blue-200 dark:to-blue-400">
                <span ref={typedElement} />
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl font-medium text-foreground/80 md:text-2xl"
            >
              Fullstack Engineer & Food Process Innovator
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-4 leading-relaxed text-foreground/70"
            >
              <p className="text-lg">
                5+ years of experience building scalable web and mobile
                applications with React.js, React Native, and modern JavaScript
                frameworks.
              </p>
              <p className="text-lg">
                Bridging software engineering with food process innovation to
                create impactful, sustainable solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col justify-center gap-4 pt-6 sm:flex-row lg:justify-start"
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="flex justify-center gap-4 pt-4 lg:justify-start"
            >
              <div className="text-sm text-foreground/60">Connect with me:</div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            className="flex justify-center lg:w-1/2 lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-slate-900 to-blue-800 blur-2xl opacity-20 animate-pulse dark:from-slate-200 dark:to-blue-300" />
              <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-blue-900 to-slate-700 blur-3xl opacity-10 animate-pulse delay-1000 dark:from-blue-400 dark:to-slate-300" />

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative z-10"
              >
                <Image
                  src={profilepic}
                  alt="Ibrahim O. Ibrahim - Fullstack Engineer"
                  className="h-[300px] w-[300px] rounded-full border-4 border-white object-cover shadow-2xl dark:border-gray-800 md:h-[400px] md:w-[400px] lg:h-[450px] lg:w-[450px]"
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
