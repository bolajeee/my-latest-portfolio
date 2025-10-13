import React from 'react'
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="px-6 md:px-0 mt-12 text-secondary py-8 container mx-auto border-t border-secondary/50 pt-4 flex justify-between items-center bg-background"> {/* Use theme variables */}
      <h1 className="text-2xl font-bold text-primary"> {/* Use text-primary */}
        Ibrahim <span className="hidden md:block text-foreground">Omobolaji I.</span> {/* Use text-foreground */}
      </h1>
      <div className="flex space-x-6 mt-4 text-foreground"> {/* Use text-foreground for icons */}
        <a
          href="https://www.linkedin.com/in/bolajeee/"
          className="hover:text-primary transition-colors duration-300" // Use text-primary on hover
        >
          <FaLinkedin size={20} className="hover:size-8" />
        </a>
        <a href="https://x.com/_bolajeee" className="hover:text-primary transition-colors duration-300"> {/* Use text-primary on hover */}
          <FaTwitter size={20} className="hover:size-8" />
        </a>
        <a
          href="https://www.instagram.com/_bolajeee/"
          className="hover:text-primary transition-colors duration-300" // Use text-primary on hover
        >
          <FaInstagram size={20} className="hover:size-8" />
        </a>
          <a
          href="https://www.github.com/bolajeee"
          className="hover:text-primary transition-colors duration-300" // Use text-primary on hover
        >
          <FaGithub size={20} className="hover:size-8" />
        </a>
      </div>
    </div>
  );
}

export default Footer