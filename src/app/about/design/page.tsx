"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

// Import your design images here
const designs = [
  {
    title: "TP Fashion Brand",
    description: "Description of design 1",
    image: "/assets/designs/design1.jpg",
    width: 320,
    height: 240,
  },
  {
    title: "Whole Sale store",
    description: "Description of design 2",
    image: "/assets/designs/design2.png",
    width: 320,
    height: 240,
  },
  {
    title: "Coffee Shop",
    description: "Description of design 3",
    image: "/assets/designs/design3.png",
    width: 320,
    height: 240,
  },
  {
    title: "Coffee Shop logo",
    description: "Description of design 4",
    image: "/assets/designs/design4.png",
    width: 320,
    height: 240,
  },
  {
    title: "New year design",
    description: "Description of design 5",
    image: "/assets/designs/design5.png",
    width: 320,
    height: 240,
  },
  {
    title: "Makeup Artist",
    description: "Description of design 6",
    image: "/assets/designs/design6.png",
    width: 320,
    height: 240,
  },
  {
    title: "Valentine Logo",
    description: "Description of design 7",
    image: "/assets/designs/design7.png",
    width: 320,
    height: 240,
  },
];

export default function DesignPortfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

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

  const openModal = (image: string) => {
    setSelectedImage(image as any);
  };

  const closeModal = () => {
    setSelectedImage(null);
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
            className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={designs[currentIndex].image}
                alt={designs[currentIndex].title}
                width={designs[currentIndex].width}
                height={designs[currentIndex].height}
                className="object-contain cursor-pointer max-h-full max-w-full"
                onClick={() => openModal(designs[currentIndex].image)}
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
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

        {/* Modal for Image Expansion */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={closeModal}
          >
            <div className="relative p-4 max-w-4xl w-full">
              <button
                onClick={closeModal}
                className="absolute top-2 right-4 text-white text-2xl font-bold"
              >
                &times;
              </button>
              <div className="flex items-center justify-center">
                <Image
                  src={selectedImage}
                  alt="Expanded"
                  width={800}
                  height={600}
                  className="mx-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
