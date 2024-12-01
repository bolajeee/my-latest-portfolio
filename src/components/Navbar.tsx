"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Portfolio", path: "#portfolio" },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  const menuVariants = {
    open: {
      x: 0,
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
  };

  return (
    <div className="text-gray-200 pt-6">
      <div className="hidden md:flex items-center px-4 py-2 mx-auto max-w-[400px]">
        <ul className="flex flex-row p-2 space-x-8 mx-auto">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.path}>
                <p className="hover:text-white transition duration-300">
                  {link.title}
                </p>
              </Link>
            </li>
          ))}

          <li>
            <a href="#contact" className="group">
              <h1 className="text-lg font-bold text-gray-200 cursor-pointer">
                Contact Me
              </h1>
              <div className="relative">
                <div className="absolute w-2/3 h-1 transition-all duration-300 ease-out bg-orange-400 rounded-full group-hover:w-full"></div>
                <div className="mt-2 absolute w-1/3 h-1 transition-all duration-300 ease-out bg-gray-400 rounded-full group-hover:w-full"></div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div
        onClick={toggleNav}
        className="md:hidden absolute top-5 right-5 border rounded border-gray-200 p-2 z-50 text-gray-200"
      >
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      <motion.div
        initial={false}
        animate={nav ? "open" : "closed"}
        variants={menuVariants}
        className="fixed left-0 top-0 w-full z-40"
      >
        <ul className="text-4xl font-semibold my-24 text-center space-y-8 text-gray-200">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.path}
                onClick={closeNav}
                className="hover:text-white transition duration-300"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Navbar;
