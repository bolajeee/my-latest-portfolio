"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

const navLinks = [
  { title: "Home", path: "#" },
  { title: "About", path: "#about" },
  { title: "Portfolio", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [nav, setNav] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNav = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = "auto"; // Allow scrolling
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-opacity duration-300 ${
        scrolling ? "bg-black bg-opacity-80" : "bg-transparent"
      }`}
    >
      <div className="hidden md:flex items-center px-4 py-2 mx-auto max-w-[400px]">
        <ul className="flex flex-row p-2 space-x-8 mx-auto">
          {navLinks.map((link, index) => (
            <li key={index} className="relative group ">
              <Link href={link.path}>
                <p className="text-white hover:text-orange-400 transition duration-300">
                  {link.title}
                </p>
              </Link>
              <div className="relative">
                <div className="absolute w-2/3 h-1 transition-all duration-300 ease-out bg-orange-400 rounded-full group-hover:w-full"></div>
                <div className="mt-2 absolute w-1/3 h-1 transition-all duration-300 ease-out bg-gray-400 rounded-full group-hover:w-full"></div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <div
        onClick={toggleNav}
        className="md:hidden absolute top-5 right-5 border rounded border-gray-200 p-2 z-50 text-gray-200"
      >
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      {/* Mobile Dropdown Menu */}
      {nav && (
        <div className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-80 z-40">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center justify-center h-full"
          >
            <ul className="text-4xl font-semibold space-y-8 text-gray-200">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.path}
                    onClick={toggleNav}
                    className="hover:text-white transition duration-300"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
