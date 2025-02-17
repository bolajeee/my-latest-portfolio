"use client";
import Image from "next/image";
import cursor from "../assets/icon1.png";
import code from "../assets/icon2.png";
import dev from "../assets/icon3.png"
import { motion } from "framer-motion";
import profilepic from "../assets/profilepic.jpg";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

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

  return (
    <div className="px-6 md:px-0 pt-28 relative overflow-clip bg-gradient-to-b from-black to-gray-800 h-screen">
      <div className="absolute rounded-full w-[2000px] h-[800px] top-[550px] left-[50%] -translate-x-1/2 bg-[radial-gradient(closest-side,#gray-800_80%,#1a1a1a)]"></div>

      <div className="relative flex flex-col justify-center items-center h-full">
        <div className="text-4xl md:text-5xl font-bold text-center">
          <h1 className="text-gray-300">Hi, I am</h1>
          <h1 className="text-orange-400">
            <span ref={typedElement}></span>
          </h1>
        </div>
        {/* Smaller icons positioned at the edge in mobile */}
        <motion.div
          className="absolute left-0 top-[200px] lg:left-[200px] lg:top-[120px] z-1000"
          drag
        >
          <Image
            src={cursor}
            height="40"
            alt="cursor"
            className="w-[20px] md:w-[60px] grayscale hover:grayscale-0 transition duration-300"
            draggable="false"
          />
        </motion.div>{" "}
        <motion.div
          className="absolute left-20 top-[400px] lg:left-[420px] lg:top-[320px] z-1000"
          drag
        >
          <Image
            src={dev}
            height="40"
            alt="dev"
            className="w-[20px] md:w-[60px] grayscale hover:grayscale-0 transition duration-300"
            draggable="false"
          />
        </motion.div>
        <motion.div
          className="absolute right-0 top-[80px] lg:right-[200px] lg:top-[100px] z-1000"
          drag
        >
          <Image
            src={code}
            height="60"
            width="60"
            alt="code"
            className="w-[20px] md:w-[60px] grayscale hover:grayscale-0 transition duration-300"
            draggable="false"
          />
        </motion.div>
        <p className="text-center text-lg max-w-md mx-auto mt-4 text-gray-200">
          An aspiring bioprocess engineer with skills in leadership, fullstack
          Developer, graphic design, and virtual assistance.
        </p>
        <Image
          src={profilepic}
          alt="profile picture"
          className="h-[300px] w-auto mx-auto mt-4 rounded-full border-4 border-gray-600"
        />
      </div>
    </div>
  );
};

export default Hero;
