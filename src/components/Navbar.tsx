"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import { Button } from "./Button";
// import { motion } from "framer-motion";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "#about" },
  { title: "Portfolio", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  // const [nav, setNav] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  // const toggleNav = () => {
  //   setNav(!nav);
  //   if (!nav) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "auto";
  //   }
  // };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-background/80 backdrop-blur-sm border-b border-secondary/20`}
    >
      <div className="hidden md:flex items-center px-4 py-2 mx-auto max-w-[400px]">
        <ul className="flex flex-row p-2 space-x-8 mx-auto">
          {navLinks.map((link, index) => (
            <li key={index} className="relative group ">
              <Link href={link.path}>
                <p className="text-foreground hover:text-orange-500 transition duration-300">
                  {link.title}
                </p>
              </Link>
              <div className="relative">
                <div className="absolute w-full h-1 transition-all duration-300 ease-out bg-orange-500 rounded-full scale-x-0 group-hover:scale-x-100"></div>
              </div>
            </li>
          ))}
        </ul>
        {/* Theme Toggle Buttons for Desktop */}
        <div className="flex items-center space-x-2">
          {mounted && (
            <Button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              aria-label="Toggle theme"
              variant="ghost"
              size="sm"
            >
              {theme === "light" ? <BsMoonFill size={20} /> : <BsSunFill size={20} />}
            </Button>
          )}
        </div>
      </div>

      {/* Mobile Menu Button */}
      {/* <div
        onClick={toggleNav}
        className="md:hidden absolute top-5 right-5 border rounded border-foreground/70 p-2 z-50 text-foreground"
      >
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div> */}

      {/* Mobile Dropdown Menu */}
      {/* <motion.div
        initial={{ x: "100%" }}
        animate={{ x: nav ? "0%" : "100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        className={`fixed top-0 right-0 h-full w-full !bg-background/95 backdrop-blur-sm z-40 md:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <ul className="text-4xl font-semibold space-y-8 text-foreground">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  onClick={toggleNav}
                  className="hover:text-orange-500 transition duration-300"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul> */}

          {/* Theme Toggle Buttons for Mobile */}
          {/* <div className="flex items-center space-x-4 mt-8">
            {mounted && (
              <Button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                aria-label="Toggle theme"
                variant="ghost"
                size="sm"
              >
                {theme === "light" ? <BsMoonFill size={20} /> : <BsSunFill size={20} />}
              </Button>
            )}
          </div>
        </div>
      </motion.div> */}
    </div>
  );
};

export default Navbar;
