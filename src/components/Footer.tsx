import React from 'react'
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="px-6 md:px-0 mt-12 text-white/70 py-8 container mx-auto border-t border-gray-700 pt-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-orange-400">
        Ibrahim <span className="hidden md:block text-white">Omobolaji I.</span>
      </h1>
      <div className="flex space-x-6 mt-4">
        <a
          href="https://www.linkedin.com/in/bolajeee/"
          className="hover:text-gray-300"
        >
          <FaLinkedin size={20} />
        </a>
        <a href="https://x.com/_bolajeee" className="hover:text-gray-300">
          <FaTwitter size={20} />
        </a>
        <a
          href="https://www.instagram.com/_bolajeee/"
          className="hover:text-gray-300"
        >
          <FaInstagram size={20} />
        </a>
      </div>
    </div>
  );
}

export default Footer