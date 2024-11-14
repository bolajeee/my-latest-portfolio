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
      <div>
        <div className="text-6xl font-bold text-center">
          <h1 className="text-[#98B4CE]">Hi, I am</h1>
          <h1 className="text-orange-700">
            <span ref={typedElement}></span>
          </h1>
        </div>

        <motion.div className="absolute left-[280px] top-[170px]" drag>
          <Image
            src={cursor}
            height="100"
            width="100"
            alt="cursor"
            className=""
            draggable="false"
          />
        </motion.div>

        <motion.div className="absolute right-[220px] top-[20px]" drag>
          <Image
            src={lightning}
            height="100"
            width="100"
            alt="lightning"
            className=""
            draggable="false"
          />
        </motion.div>
      </div>

      <p className="text-center text-xl max-w-md mx-auto mt-8 text-white/80">
        An aspiring bioprocess engineer with skills in leadership, front-end web development, graphic design, and virtual assistance. 
      </p>

      <Image
        src={profilepic}
        alt="profile picture"
        className="h-auto w-auto mx-auto"
      />
    </div>
  );
};

export default Hero;
