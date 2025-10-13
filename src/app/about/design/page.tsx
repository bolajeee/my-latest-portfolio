"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// Define the Design interface
interface Design {
  title: string;
  description: string;
  image: string;
  width: number;
  height: number;
}

const designs: Design[] = [
  {
    title: "TP Fashion Brand",
    description: "A modern and elegant branding concept for a fashion line.",
    image: "/assets/designs/design1.jpg",
    width: 800,
    height: 600,
  },
  {
    title: "Whole Sale Store UI",
    description: "User interface design for an e-commerce wholesale platform.",
    image: "/assets/designs/design2.png",
    width: 800,
    height: 600,
  },
  {
    title: "Coffee Shop Branding",
    description: "Complete branding package for a local coffee shop, including logo and menu design.",
    image: "/assets/designs/design3.png",
    width: 800,
    height: 600,
  },
  {
    title: "Coffee Shop Logo",
    description: "Minimalistic logo design for a contemporary coffee establishment.",
    image: "/assets/designs/design4.png",
    width: 800,
    height: 600,
  },
  {
    title: "New Year Design",
    description: "Festive graphic design for a New Year's promotional campaign.",
    image: "/assets/designs/design5.png",
    width: 800,
    height: 600,
  },
  {
    title: "Makeup Artist Portfolio",
    description: "Visual identity and promotional materials for a professional makeup artist.",
    image: "/assets/designs/design6.png",
    width: 800,
    height: 600,
  },
  {
    title: "Valentine Logo",
    description: "Romantic and elegant logo design for a Valentine's Day special event.",
    image: "/assets/designs/design7.png",
    width: 800,
    height: 600,
  },
];

export default function DesignPortfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8"> {/* Use theme variables */}
      <div className="max-w-6xl mx-auto">
        <Link
          href="/"
          className="text-primary hover:text-primary/80 mb-8 inline-block" // Use theme variables
        >
          ← Back to Home
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center text-foreground" // Use theme variables
        >
          Graphic Design
          <span className="text-primary px-2">Portfolio</span> {/* Use theme variables */}
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designs.map((design, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }} // Staggered animation
              className="bg-white/5 dark:bg-black/5 rounded-lg shadow-lg overflow-hidden border border-secondary/50" // Theme-aware styling
            >
              <Image
                src={design.image}
                alt={design.title}
                width={design.width}
                height={design.height}
                className="w-full h-auto object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-foreground mb-2">{design.title}</h2> {/* Theme-aware text */}
                <p className="text-secondary text-sm">{design.description}</p> {/* Theme-aware text */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
