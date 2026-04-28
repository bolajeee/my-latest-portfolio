"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCode, FaAward, FaExternalLinkAlt, FaChevronDown, FaChevronRight, FaUser, FaRocket, FaHeart } from "react-icons/fa";

const aboutSections = [
  {
    title: "Education",
    icon: FaGraduationCap,
    color: "text-blue-900 dark:text-blue-200",
    bgColor: "bg-blue-100/80 dark:bg-blue-950/35",
    borderColor: "border-blue-900/20 dark:border-blue-300/20",
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
    color: "text-slate-800 dark:text-slate-100",
    bgColor: "bg-slate-100/85 dark:bg-slate-900/45",
    borderColor: "border-slate-900/15 dark:border-slate-200/15",
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
    color: "text-indigo-900 dark:text-indigo-200",
    bgColor: "bg-indigo-100/80 dark:bg-indigo-950/35",
    borderColor: "border-indigo-900/20 dark:border-indigo-300/20",
    items: [
      {
        name: "Self-Taught Developer",
        details: "Transitioned from Food Engineering to Software Development through dedication and continuous learning. I&apos;ve built multiple projects showcasing my ability to learn new technologies quickly and apply them effectively. My diverse background brings unique problem-solving perspectives to development challenges.",
        achievements: ["Career Transition Success", "Multiple Live Projects", "Continuous Learning", "Problem-Solving Mindset"],
        link: "#projects",
        isExternal: false,
      },
    ],
  },
];

const storyParagraphs = [
  "My career began in Food Engineering, where I learned how precision, process design, and system efficiency translate into real-world impact. At the University of Ilorin, I worked on developing rice-soy extruded snacks, co-led applied research on nutritional enhancement, and gained hands-on experience in industrial process optimization during my time at OK Foods.",
  "While leading teams as General Secretary and EPEX 2024 Sponsorship Lead, I discovered how systems thinking and data-driven planning could scale beyond physical production into the digital world. That curiosity evolved into a full transition into software engineering, where I now apply the same principles of process optimization and innovation to digital systems.",
  "As a Fullstack Engineer, I have designed and deployed web and mobile applications that merge usability with performance. My work spans React, Node.js, Django, PostgreSQL, and MongoDB, building products that simplify operations, automate workflows, and deliver measurable business value.",
  "Across roles, from Technical Lead at Kuagi Resources to Senior Fullstack Developer at Eleaders Network, my focus has been clear: engineer scalable systems that optimize how people interact with technology.",
  "Today, I integrate both worlds, engineering precision and software innovation, to build technology that is not only functional but intelligently designed for efficiency, sustainability, and impact.",
];

const About = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isStoryExpanded, setIsStoryExpanded] = useState(false);

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

  const visibleStoryParagraphs = isStoryExpanded
    ? storyParagraphs
    : storyParagraphs.slice(0, 2);

  return (
    <div className="bg-background text-foreground py-24 lg:py-28 relative overflow-hidden" id="about">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/5 via-transparent to-blue-900/5 dark:from-slate-100/5 dark:to-blue-200/5" />
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-slate-900/10 blur-3xl dark:bg-blue-200/10" />
      <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-blue-900/5 blur-3xl dark:bg-slate-200/5" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <FaUser className="text-2xl text-blue-900 dark:text-blue-200" />
            <h2 className="text-4xl md:text-6xl font-bold">
              About
              <span className="px-4 text-blue-900 underline decoration-blue-900 decoration-4 dark:text-blue-200 dark:decoration-blue-200">
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
          className="bg-white/5 dark:bg-black/5 rounded-2xl p-6 lg:p-8 mb-12 lg:mb-16 border border-gray-200 dark:border-gray-700 backdrop-blur-sm"
        >
          <div className="flex flex-col items-center gap-4 text-center lg:flex-row lg:items-start lg:text-left">
            <div className="rounded-lg bg-slate-100 p-3 dark:bg-slate-900/45">
              <FaHeart className="text-xl text-blue-900 dark:text-blue-200" />
            </div>
            <div className="min-w-0">
              <h3 className="text-xl font-bold text-foreground mb-3">My Story</h3>
              <div className="space-y-4 text-secondary leading-relaxed lg:hidden">
                {visibleStoryParagraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setIsStoryExpanded((current) => !current)}
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-slate-100/85 px-4 py-2 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-200 dark:border-slate-200/10 dark:bg-slate-900/45 dark:text-slate-100 dark:hover:bg-slate-900/70 lg:hidden"
              >
                {isStoryExpanded ? "Read less" : "Read more"}
                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    isStoryExpanded ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div className="hidden lg:block">
              <p className="text-secondary leading-relaxed">
                My career began in Food Engineering, where I learned how precision, process design, and system efficiency translate into real-world impact. At the University of Ilorin, I worked on developing rice–soy extruded snacks, co-led applied research on nutritional enhancement, and gained hands-on experience in industrial process optimization during my time at OK Foods.
                <br />
                While leading teams as General Secretary and EPEX 2024 Sponsorship Lead, I discovered how systems thinking and data-driven planning could scale beyond physical production, into the digital world. That curiosity evolved into a full transition into software engineering, where I now apply the same principles of process optimization and innovation to digital systems.
                <br />
                As a Fullstack Engineer, I’ve designed and deployed web and mobile applications that merge usability with performance. My work spans React, Node.js, Django, PostgreSQL, and MongoDB, building products that simplify operations, automate workflows, and deliver measurable business value.
                <br />
                Across roles, from Technical Lead at Kuagi Resources to Senior Fullstack Developer at Eleaders Network, my focus has been clear: engineer scalable systems that optimize how people interact with technology.
                <br />
                Today, I integrate both worlds, engineering precision and software innovation, to build technology that’s not only functional but intelligently designed for efficiency, sustainability, and impact.
              </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* About Sections */}
        <div className="space-y-10 lg:space-y-12">
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
                      : 'border-gray-200 dark:border-gray-700 hover:border-blue-900/30 dark:hover:border-blue-300/30'
                      }`}
                  >
                    {/* Clickable Indicator */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center gap-2 text-sm font-medium text-blue-900 dark:text-blue-200">
                        <span>Click to explore</span>
                        <FaExternalLinkAlt className="text-xs" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      {/* Title with Arrow */}
                      <div className="flex items-center justify-between">
                        <h4 className="text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-blue-900 dark:group-hover:text-blue-200 md:text-2xl">
                          {item.name}
                        </h4>
                        <motion.div
                          animate={{ x: hoveredCard === sectionIndex * 10 + itemIndex ? 5 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <FaChevronRight className="text-blue-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:text-blue-200" />
                        </motion.div>
                      </div>

                      {/* Description */}
                      <p className="text-secondary leading-relaxed text-base md:text-lg">
                        {item.details}
                      </p>

                      {/* Achievements/Highlights */}
                      <div className="space-y-3">
                        <h5 className="text-sm font-semibold text-foreground flex items-center gap-2">
                          <FaAward className="text-blue-900 dark:text-blue-200" />
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
                              className="rounded-full border border-slate-900/10 bg-slate-100 px-3 py-1 text-sm font-medium text-slate-800 dark:border-slate-200/10 dark:bg-slate-900/45 dark:text-slate-100"
                            >
                              {achievement}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-900/5 to-transparent opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-100 dark:from-blue-200/5" />
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
          className="text-center mt-16 lg:mt-20"
        >
          <div className="rounded-2xl border border-slate-900/10 bg-gradient-to-r from-slate-100 to-blue-50/80 p-8 dark:border-slate-200/10 dark:from-slate-900/55 dark:to-blue-950/35">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Let&apos;s Build Something Amazing Together
            </h3>
            <p className="text-secondary mb-6 max-w-2xl mx-auto">
              I&apos;m always excited to work on new projects and collaborate with fellow developers and designers.
              Whether you have a project in mind or just want to connect, I&apos;d love to hear from you!
            </p>
            <motion.button
              onClick={() => handleNavigation('#contact', false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mx-auto flex items-center gap-2 rounded-lg bg-slate-900 px-8 py-3 font-semibold text-white transition-colors duration-300 hover:bg-blue-950 dark:bg-blue-700 dark:hover:bg-blue-600"
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
