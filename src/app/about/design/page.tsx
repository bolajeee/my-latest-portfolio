"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Define the Design interface
interface Design {
  title: string;
  description: string;
  image: string;
  width: number;
  height: number;
  category: string;
  tools: string[];
}

const designs: Design[] = [
  {
    title: "TP Fashion Brand",
    description: "A modern and elegant branding concept for a fashion line featuring contemporary typography and sophisticated color palette.",
    image: "/assets/designs/design1.jpg",
    width: 800,
    height: 600,
    category: "Branding",
    tools: ["Photoshop", "Illustrator"],
  },
  {
    title: "Whole Sale Store UI",
    description: "User interface design for an e-commerce wholesale platform with focus on user experience and conversion optimization.",
    image: "/assets/designs/design2.png",
    width: 800,
    height: 600,
    category: "UI/UX",
    tools: ["Figma", "Canva"],
  },
  {
    title: "Coffee Shop Branding",
    description: "Complete branding package for a local coffee shop, including logo, menu design, and promotional materials.",
    image: "/assets/designs/design3.png",
    width: 800,
    height: 600,
    category: "Branding",
    tools: ["Illustrator", "Photoshop"],
  },
  {
    title: "Coffee Shop Logo",
    description: "Minimalistic logo design for a contemporary coffee establishment with clean lines and modern aesthetics.",
    image: "/assets/designs/design4.png",
    width: 800,
    height: 600,
    category: "Logo Design",
    tools: ["Illustrator", "Canva"],
  },
  {
    title: "New Year Design",
    description: "Festive graphic design for a New Year's promotional campaign featuring vibrant colors and celebratory elements.",
    image: "/assets/designs/design5.png",
    width: 800,
    height: 600,
    category: "Marketing",
    tools: ["Photoshop", "Canva"],
  },
  {
    title: "Makeup Artist Portfolio",
    description: "Visual identity and promotional materials for a professional makeup artist showcasing elegance and creativity.",
    image: "/assets/designs/design6.png",
    width: 800,
    height: 600,
    category: "Portfolio",
    tools: ["Photoshop", "Canva"],
  },
  {
    title: "Valentine Logo",
    description: "Romantic and elegant logo design for a Valentine's Day special event with heart motifs and warm color scheme.",
    image: "/assets/designs/design7.png",
    width: 800,
    height: 600,
    category: "Logo Design",
    tools: ["Illustrator", "Photoshop"],
  },
];

const categories = ["All", "Branding", "UI/UX", "Logo Design", "Marketing", "Portfolio"];

export default function DesignPortfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const filteredDesigns = selectedCategory === "All"
    ? designs
    : designs.filter(design => design.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 text-foreground">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div
            variants={headerVariants}
            initial="hidden"
            animate="visible"
            className="mb-12"
          >
            <Link
              href="/"
              className="text-primary hover:text-primary/80 mb-8 inline-flex items-center gap-2 group transition-all duration-300"
            >
              <motion.span
                whileHover={{ x: -5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                ←
              </motion.span>
              <span className="group-hover:underline">Back to Home</span>
            </Link>

            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 0.2,
              }}
            >
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Graphic Design
              </span>
              <br />
              <span className="text-foreground text-3xl md:text-4xl">Portfolio</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-center text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Explore my creative journey through visual storytelling, branding, and digital design
            </motion.p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "bg-secondary/20 text-foreground hover:bg-secondary/30 border border-secondary/50"
                  }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Portfolio Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredDesigns.map((design, index) => (
                <motion.div
                  key={`${selectedCategory}-${index}`}
                  variants={itemVariants}
                  whileHover={{
                    y: -10,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className="group relative bg-card/50 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-border/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      <Image
                        src={design.image}
                        alt={design.title}
                        width={design.width}
                        height={design.height}
                        className="w-full h-64 object-cover"
                      />
                    </motion.div>

                    {/* Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: hoveredCard === index ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-start p-4"
                    >
                      <div className="flex flex-wrap gap-2">
                        {design.tools.map((tool, toolIndex) => (
                          <motion.span
                            key={toolIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{
                              opacity: hoveredCard === index ? 1 : 0,
                              y: hoveredCard === index ? 0 : 20
                            }}
                            transition={{
                              delay: toolIndex * 0.1,
                              duration: 0.3
                            }}
                            className="px-2 py-1 bg-primary/80 text-primary-foreground text-xs rounded-full"
                          >
                            {tool}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-secondary/90 backdrop-blur-sm text-secondary-foreground text-xs font-medium rounded-full">
                        {design.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <motion.h2
                      className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {design.title}
                    </motion.h2>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {design.description}
                    </p>
                  </div>

                  {/* Hover Effect Border */}
                  <motion.div
                    className="absolute inset-0 border-2 border-primary/0 rounded-2xl pointer-events-none"
                    animate={{
                      borderColor: hoveredCard === index ? "rgb(var(--primary) / 0.5)" : "rgb(var(--primary) / 0)",
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { number: "7+", label: "Projects Completed" },
              { number: "4", label: "Design Categories" },
              { number: "5+", label: "Tools Mastered" },
              { number: "100%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-card/30 backdrop-blur-sm rounded-xl border border-border/50"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    delay: index * 0.1 + 0.5
                  }}
                  className="text-3xl font-bold text-primary mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
