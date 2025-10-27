"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";


const navLinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "/#about" },
  { title: "Portfolio", path: "/#projects" },
  { title: "Contact", path: "/#contact" },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNav = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const closeNav = () => {
    setNav(false);
    document.body.style.overflow = "auto";
  };

  const handleNavigation = (path: string) => {
    closeNav();

    // If we're on the homepage and it's a hash link, scroll to section
    if (pathname === "/" && path.startsWith("/#")) {
      const sectionId = path.substring(2); // Remove "/#"
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    // For other cases, navigate normally
    window.location.href = path;
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
      ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-lg'
      : 'bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800'
      }`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-lg font-bold text-gray-900 dark:text-white hover:text-orange-500 transition-colors">
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => handleNavigation(link.path)}
                className="text-sm text-gray-600 dark:text-gray-300 hover:text-orange-500 transition-colors font-medium"
              >
                {link.title}
              </button>
            ))}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="p-2 text-gray-600 dark:text-gray-300 hover:text-orange-500 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {theme === "light" ? <BsMoonFill size={16} /> : <BsSunFill size={16} />}
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="p-2 text-gray-600 dark:text-gray-300 hover:text-orange-500 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {theme === "light" ? <BsMoonFill size={16} /> : <BsSunFill size={16} />}
              </button>
            )}
            <button
              onClick={toggleNav}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-orange-500 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {nav ? <AiOutlineClose size={18} /> : <AiOutlineMenu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {nav && (
        <>
          <div className="fixed inset-0 bg-black/20 z-40 md:hidden" onClick={closeNav} />
          <div className="fixed top-16 right-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-xl z-50 md:hidden min-w-[160px]">
            <div className="py-2">
              {navLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => handleNavigation(link.path)}
                  className="block w-full text-left px-4 py-3 text-sm text-gray-600 dark:text-gray-300 hover:text-orange-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium"
                >
                  {link.title}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
