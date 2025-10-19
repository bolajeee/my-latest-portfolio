"use client";
import React from 'react'
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub} from 'react-icons/fa'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="px-6 md:px-0 mt-12 text-secondary py-8 container mx-auto border-t border-secondary/50 pt-4 flex justify-between items-center bg-background"> 
      <p className="text-sm text-foreground">&copy; {new Date().getFullYear()} Ibrahim Omobolaji Ibrahim. All rights reserved.</p>
      <div className="flex space-x-6 mt-4 text-foreground"> 
        <a
          href="https://www.linkedin.com/in/bolajeee/"
          className="hover:text-orange-500 transition-colors duration-300"
        >
          <FaLinkedin size={24} />
        </a>
        <a href="https://x.com/_bolajeee" className="hover:text-orange-500 transition-colors duration-300">
          <FaTwitter size={24} />
        </a>
        <a
          href="https://www.instagram.com/_bolajeee/"
          className="hover:text-orange-500 transition-colors duration-300"
        >
          <FaInstagram size={24} />
        </a>
          <a
          href="https://www.github.com/bolajeee"
          className="hover:text-orange-500 transition-colors duration-300"
        >
          <FaGithub size={24} />
        </a>
      </div>
      <button onClick={scrollToTop} className="text-sm text-foreground hover:text-orange-500 transition-colors duration-300">
        Back to Top
      </button>
    </div>
  );
}

export default Footer