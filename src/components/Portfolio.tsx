import React from 'react'
import { motion } from "framer-motion";
import Image from "next/image"

const Portfolio = () => {

    {
        title: "",
            desc: "",
            devStack: "",
            link: "",
            git: "",
            src: project1
    }

  return (
      <div className='text-white bg-gradient-to-b from-black to-[#381a5f]' id="portfolio">
          <div className='max-w-[1200px] mx-auto space-y-24'>
              {projects.map((project, index) => (
                  <motion.div key={index}
                      initial={{opacity: 0, y: 75 }}
                      whileInView={{opacity:1, y: 0}}
                      viewport={{once: true}}
                      transition={{duration: 0.5, delay: 0.25}}>
                      
                      <div>
                          <h2>{`0${index + 1}`}</h2>
                          <h2>{project.title}</h2>
                          <p>{project.desc}</p>
                          <p>{project.devstack}</p>
                          <div className='w-64 h-[1px] '>
                              <a href={project.link} className='m-6'>Link</a> 
                              <a href={project.git} >Git</a> 
                          </div>

                      </div>

                      <div className='flex justify-center items-center'>
                          <Image src={project.src} alt={project.title} className="h-[400px] w-[auto] object-cover" />
                      </div>
                  </motion.div>
              ))}
          </div>
    </div>
  )
}

export default Portfolio