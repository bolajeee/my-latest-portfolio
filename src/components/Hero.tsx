"use client";
import Image from "next/image";
import Link from "next/link"; // Added Link import
import profilepic from "../assets/profilepic.jpg";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion"; // Ensure motion is imported

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
      typed.destroy(); // Clean up the Typed instance on unmount
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
    <div className="px-6 md:px-0 pt-28 relative bg-background text-foreground min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 py-16">
        {/* Text Content - Left Side */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="md:w-1/2 text-center md:text-left space-y-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="text-foreground">Hi, I am</span>{" "}
            <span className="text-primary">
              <span ref={typedElement}></span>
            </span>
          </h1>
          <p className="text-lg text-secondary leading-relaxed">
            I’m a Fullstack Engineer and Food Process Innovator with 5+ years of experience building and scaling responsive web and mobile applications. I specialize in React.js, React Native, and modern JavaScript frameworks, crafting clean, API-driven interfaces powered by Node.js, Express, FastAPI, and Django backends. Skilled in PostgreSQL, MySQL, and MongoDB, I focus on delivering reliable, high-performance systems with strong monitoring and CI/CD practices.
          </p>
          <p className="text-lg text-secondary leading-relaxed">
            Blending my background in food engineering and bioprocess design, I bring a unique perspective to tech-driven product innovation, GMP/HACCP implementation, and data-informed process optimization. Passionate about bridging software, sustainability, and manufacturing, I aim to build solutions that drive both digital transformation and real-world impact.
          </p>
          {/* Call to Action Buttons */}
          <div className="flex justify-center md:justify-start gap-4 mt-6">
            <Link href="#projects" className="px-6 py-3 bg-primary text-background rounded-md font-semibold hover:bg-primary/80 transition-colors duration-300">
              See My Work
            </Link>
            {/* Add a Download CV button if desired */}
            <a href="https://drive.google.com/file/d/1Kietx7Q18Xsa_bZg1yiAXLmE5Bhl0KvG/view?usp=sharing" download className="px-6 py-3 border border-primary text-primary rounded-md font-semibold hover:bg-primary/10 transition-colors duration-300">
              Download CV
            </a>
          </div>
        </motion.div>

        {/* Image - Right Side */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          className="md:w-1/2 flex justify-center md:justify-end"
        >
          <Image
            src={profilepic}
            alt="profile picture"
            className="h-[300px] w-[300px] md:h-[400px] md:w-[400px] rounded-full border-4 border-primary object-cover shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
