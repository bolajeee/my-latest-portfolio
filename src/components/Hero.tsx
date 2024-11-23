"use client";
import Image from "next/image";
import cursor from "../assets/icon1.png";
import lightning from "../assets/icon2.png";
import { motion } from "framer-motion";
import profilepic from "../assets/profilepic.png";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

const Hero = () => {
  const typedElement = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const options = {
      strings: ["Ibrahim"],
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
    <div className="py-20 relative overflow-clip bg-[linear-gradient(to_bottom,#000,#201942_35%,#8f5c55_60%,#DBAF6E_80%)]">
      <div className="absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-[50%] -translate-x-1/2 bg-[radial-gradient(closest-side,#000_80%,#2B1942)]"></div>

      <div className="relative">
        <div className="text-6xl font-bold text-center">
          <h1 className="text-[#98B4CE]">Hi, I am</h1>
          <h1 className="text-orange-700">
            <span ref={typedElement}></span>
          </h1>
        </div>

        {/* Smaller icons positioned at the edge in mobile */}
        <motion.div
          className="absolute left-0 top-[170px] lg:left-[280px] lg:top-[170px]"
          drag
        >
          <Image
            src={cursor}
            height="60"
            width="80"
            alt="cursor"
            className=""
            draggable="false"
          />
        </motion.div>

        <motion.div
          className="absolute right-0 top-[70px] lg:right-[260px] lg:top-[70px]"
          drag
        >
          <Image
            src={lightning}
            height="80"
            width="80"
            alt="lightning"
            className=""
            draggable="false"
          />
        </motion.div>

        <p className="text-center text-xl max-w-md mx-auto mt-8 text-white/80">
          An aspiring bioprocess engineer with skills in leadership, front-end
          web development, graphic design, and virtual assistance.
        </p>

        <Image
          src={profilepic}
          alt="profile picture"
          className="h-[400px] w-auto mx-auto mt-4"
        />
      </div>
    </div>
  );
};

export default Hero;
