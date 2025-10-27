"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCode, FaPalette, FaAward, FaExternalLinkAlt, FaChevronRight, FaUser, FaRocket, FaHeart } from "react-icons/fa";

const aboutSections = [
  {
    title: "Education",
    icon: FaGraduationCap,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    items: [
      {
        name: "Food Engineering, University of Ilorin",
        details: "Graduated with Second-class upper honors, demonstrating resilience and adaptability in overcoming academic challenges. This experience taught me problem-solving skills and attention to detail that I now apply to software development.",
        achievements: ["Second-class Upper Division", "Research Project on Food Processing", "Academic Excellence Award"],
        link: "/about/education",
        isExternal: false,
      },
    ],
  },
  {
    title: "Technical Skills",
    icon: FaCode,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30",
    items: [
      {
        name: "Full-Stack Web Development",
        details: "Specialized in modern web technologies including React, Next.js, TypeScript, and Node.js. I build responsive, user-friendly applications with clean code architecture and optimal performance. My focus is on creating seamless user experiences while maintaining scalable backend systems.",
        achievements: ["React & Next.js Expert", "TypeScript Proficiency", "RESTful API Development", "Database Design"],
        link: "#skills",
        isExternal: false,
      },
      {
        name: "UI/UX & Graphics Design",
        details: "Creating visually appealing and intuitive designs using modern design tools like Figma, Canva, and Adobe Creative Suite. I understand the importance of user-centered design and apply design thinking principles to create engaging digital experiences.",
        achievements: ["Figma Proficiency", "Brand Identity Design", "Responsive Design", "User Experience Optimization"],
        link: "/about/design",
        isExternal: false,
      },
    ],
  },
  {
    title: "Professional Journey",
    icon: FaRocket,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    items: [
      {
        name: "Self-Taught Developer",
        details: "Transitioned from Food Engineering to Software Development through dedication and continuous learning. I've built multiple projects showcasing my ability to learn new technologies quickly and apply them effectively. My diverse background brings unique problem-solving perspectives to development challenges.",
        achievements: ["Career Transition Success", "Multiple Live Projects", "Continuous Learning", "Problem-Solving Mindset"],
        link: "#projects",
        isExternal: false,
      },
    ],
  },
];

const About = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleNavigation = (link: string, isExternal: boolean) => {
    if (isExternal) {
      window.open(link, '_blank');
    } else if (link.startsWith('#')) {
      const element = document.getElementById(link.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = link;
    }
  };

  return (
    <div className="bg-background text-foreground py-32 relative overflow-hidden" id="about">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-orange-500/5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <FaUser className="text-orange-500 text-2xl" />
            <h2 className="text-4xl md:text-6xl font-bold">
              About
              <span className="text-orange-500 px-4 underline decoration-orange-500 decoration-4">
                Me
              </span>
            </h2>
          </div>
          <p className="text-lg md:text-xl text-secondary max-w-3xl mx-auto">
            A passionate developer with a unique journey from Food Engineering to Full-Stack Development,
            bringing creativity, problem-solving skills, and dedication to every project.
          </p>
        </motion.div>

        {/* Personal Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white/5 dark:bg-black/5 rounded-2xl p-8 mb-16 border border-gray-200 dark:border-gray-700 backdrop-blur-sm"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-orange-500/20 rounded-lg">
              <FaHeart className="text-orange-500 text-xl" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">My Story</h3>
              <p className="text-secondary leading-relaxed">
                My career began in Food Engineering, where I learned how precision, process design, and system efficiency translate into real-world impact. At the University of Ilorin, I worked on developing rice–soy extruded snacks, co-led applied research on nutritional enhancement, and gained hands-on experience in industrial process optimization during my time at OK Foods.
                <br/>
                While leading teams as General Secretary and EPEX 2024 Sponsorship Lead, I discovered how systems thinking and data-driven planning could scale beyond physical production, into the digital world. That curiosity evolved into a full transition into software engineering, where I now apply the same principles of process optimization and innovation to digital systems.
                <br/>
                As a Fullstack Engineer, I’ve designed and deployed web and mobile applications that merge usability with performance. My work spans React, Node.js, Django, PostgreSQL, and MongoDB, building products that simplify operations, automate workflows, and deliver measurable business value.
                <br/>
                Across roles, from Technical Lead at Kuagi Resources to Senior Fullstack Developer at Eleaders Network, my focus has been clear: engineer scalable systems that optimize how people interact with technology.
                <br/>
                Today, I integrate both worlds, engineering precision and software innovation, to build technology that’s not only functional but intelligently designed for efficiency, sustainability, and impact.
              </p>
            </div>
          </div>
        </motion.div>

        {/* About Sections */}
        <div className="space-y-12">
          {aboutSections.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Section Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-3 ${section.bgColor} rounded-lg`}>
                  <section.icon className={`${section.color} text-2xl`} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  {section.title}
                </h3>
              </div>

              {/* Section Items */}
              <div className="grid gap-6">
                {section.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                    viewport={{ once: true }}
                    onHoverStart={() => setHoveredCard(sectionIndex * 10 + itemIndex)}
                    onHoverEnd={() => setHoveredCard(null)}
                    onClick={() => handleNavigation(item.link, item.isExternal)}
                    className={`group relative bg-white/5 dark:bg-black/5 rounded-2xl p-8 border transition-all duration-300 cursor-pointer ${hoveredCard === sectionIndex * 10 + itemIndex
                        ? `${section.borderColor} shadow-2xl transform -translate-y-2`
                        : 'border-gray-200 dark:border-gray-700 hover:border-orange-500/50'
                      }`}
                  >
                    {/* Clickable Indicator */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center gap-2 text-orange-500 text-sm font-medium">
                        <span>Click to explore</span>
                        <FaExternalLinkAlt className="text-xs" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      {/* Title with Arrow */}
                      <div className="flex items-center justify-between">
                        <h4 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-orange-500 transition-colors duration-300">
                          {item.name}
                        </h4>
                        <motion.div
                          animate={{ x: hoveredCard === sectionIndex * 10 + itemIndex ? 5 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <FaChevronRight className="text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>
                      </div>

                      {/* Description */}
                      <p className="text-secondary leading-relaxed text-base md:text-lg">
                        {item.details}
                      </p>

                      {/* Achievements/Highlights */}
                      <div className="space-y-3">
                        <h5 className="text-sm font-semibold text-foreground flex items-center gap-2">
                          <FaAward className="text-orange-500" />
                          Key Highlights
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {item.achievements.map((achievement, achIndex) => (
                            <motion.span
                              key={achIndex}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: achIndex * 0.1 }}
                              viewport={{ once: true }}
                              className="px-3 py-1 bg-orange-500/20 text-orange-500 text-sm rounded-full border border-orange-500/30 font-medium"
                            >
                              {achievement}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded-2xl p-8 border border-orange-500/30">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-secondary mb-6 max-w-2xl mx-auto">
              I'm always excited to work on new projects and collaborate with fellow developers and designers.
              Whether you have a project in mind or just want to connect, I'd love to hear from you!
            </p>
            <motion.button
              onClick={() => handleNavigation('#contact', false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center gap-2 mx-auto"
            >
              Get In Touch
              <FaChevronRight />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
