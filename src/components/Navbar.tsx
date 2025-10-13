"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "#about" },
  { title: "Portfolio", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleNav = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-background/80 backdrop-blur-sm border-b border-secondary/20`}
    >
      <div className="hidden md:flex items-center px-4 py-2 mx-auto max-w-[400px]">
        <ul className="flex flex-row p-2 space-x-8 mx-auto">
          {navLinks.map((link, index) => (
            <li key={index} className="relative group ">
              <Link href={link.path}>
                <p className="text-foreground hover:text-primary transition duration-300">
                  {link.title}
                </p>
              </Link>
              <div className="relative">
                <div className="absolute w-2/3 h-1 transition-all duration-300 ease-out bg-primary rounded-full group-hover:w-full"></div>
                <div className="mt-2 absolute w-1/3 h-1 transition-all duration-300 ease-out bg-secondary rounded-full group-hover:w-full"></div>
              </div>
            </li>
          ))}
        </ul>
        {/* Theme Toggle Button for Desktop */}
        <button
          onClick={toggleTheme}
          className="ml-4 p-2 rounded-full bg-primary text-background hover:bg-primary/80 transition-colors duration-300"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <BsSunFill size={20} /> : <BsMoonFill size={20} />}
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div
        onClick={toggleNav}
        className="md:hidden absolute top-5 right-5 border rounded border-foreground/70 p-2 z-50 text-foreground"
      >
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      {/* Mobile Dropdown Menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: nav ? "0%" : "100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        className={`fixed top-[200px] right-0 h-full w-64 !bg-background/80 backdrop-blur-sm z-40 md:hidden border-l border-secondary/20`} 
      >
        <div className="flex flex-col items-center justify-center h-full">
          <ul className="text-4xl font-semibold space-y-8 text-foreground">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  onClick={toggleNav}
                  className="hover:text-primary transition duration-300"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          {/* Theme Toggle Button for Mobile - Separated from navLinks */}
          <button
            onClick={toggleTheme}
            className="mt-8 p-3 rounded-full bg-primary text-background hover:bg-primary/80 transition-colors duration-300"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <BsSunFill size={30} /> : <BsMoonFill size={30} />}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
