"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

// Import your design images here
const designs = [
  {
    title: "Design 1",
    description: "Description of design 1",
    image: "/assets/designs/design1.jpg", // Replace with your actual image paths
  },
  {
    title: "Design 2",
    description: "Description of design 2",
    image: "/assets/designs/design2.png",
  },
  {
    title: "Design 3",
    description: "Description of design 3",
    image: "/assets/designs/design3.png",
  },
  {
    title: "Design 4",
    description: "Description of design 4",
    image: "/assets/designs/design4.png",
  },
  {
    title: "Design 5",
    description: "Description of design 5",
    image: "/assets/designs/design5.png",
  },
  {
    title: "Design 6",
    description: "Description of design 6",
    image: "/assets/designs/design6.png",
  },
  {
    title: "Design 7",
    description: "Description of design 7",
    image: "/assets/designs/design7.png",
  },
  // Add more designs as needed
];

export default function DesignPortfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === designs.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? designs.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-black">
      <div className="max-w-6xl mx-auto p-8">
        <Link
          href="/"
          className="text-orange-400 hover:text-orange-300 mb-8 inline-block"
        >
          ← Back to Home
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-12 text-center text-gray-200"
        >
          Graphic Design
          <span className="text-orange-400 px-2">Portfolio</span>
        </motion.h1>

        {/* Carousel Section */}
        <div className="relative aspect-video mb-12">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden"
          >
            <Image
              src={designs[currentIndex].image}
              alt={designs[currentIndex].title}
              fill
              className="object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 text-white p-4">
              <h3 className="text-xl font-semibold">
                {designs[currentIndex].title}
              </h3>
              <p className="text-sm text-gray-300">
                {designs[currentIndex].description}
              </p>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
          >
            →
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {designs.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-orange-400 w-4" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Canva Portfolio Button */}
        {/* <div className="text-center">
          <a
            href="https://www.canva.com/your-portfolio-url" // Replace with your actual Canva portfolio URL
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-orange-400 to-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:from-orange-500 hover:to-orange-700 transition-all transform hover:scale-105 shadow-lg"
          >
            View Full Portfolio on Canva →
          </a>
        </div> */}
      </div>
    </div>
  );
}
