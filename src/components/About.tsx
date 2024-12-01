"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Add Framer Motion
import book from "../assets/book.png";
import pc from "../assets/pc.png";
import card from "../assets/card.png";
import finance from "../assets/finance.png";

const About = () => {
  const cards = [
    {
      title: "Educational Background",
      desc: "xxxxxx",
      src: book,
      span: "md:col-span-5",
    },
    {
      title: "Virtual Assistance",
      desc: "xxxxxx",
      src: pc,
      span: "md:col-span-3",
    },
    {
      title: "Web Development",
      desc: "xxxxxx",
      src: card,
      span: "md:col-span-3",
    },
    {
      title: "Graphics Design",
      desc: "xxxxxx",
      src: finance,
      span: "md:col-span-5",
    },
  ];

  return (
    <div
      className="mx-auto px-4 py-20 bg-gradient-to-b from-gray-800 to-black"
      id="about"
    >
      <h1 className="text-gray-200 text-6xl max-w-[360px] mx-auto font-semibold p-4 mb-8 text-center">
        About
        <span className="text-orange-400 px-4">Me</span>
      </h1>

      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-8 gap-6 place-items-center">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.4)",
            }}
            transition={{ duration: 0.3 }}
            className={`w-full ${card.span} relative bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 backdrop-blur-lg border border-gray-600 rounded-xl overflow-hidden`}
          >
            <div className="absolute inset-0 bg-gray-900 opacity-40"></div>

            <div className="flex flex-col md:flex-row p-6 items-center">
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={card.src}
                  alt={card.title}
                  className="w-auto h-[100px] md:h-[130px] grayscale hover:grayscale-0 transition duration-300"
                />
              </motion.div>

              <div className="flex flex-col mt-4 md:mt-0 md:ml-4">
                <h2 className="text-xl md:text-2xl font-bold text-gray-200">
                  {card.title}
                </h2>
                <p className="text-md md:text-lg text-gray-300">{card.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
