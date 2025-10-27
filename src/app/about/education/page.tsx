"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowLeft,
  FaGraduationCap,
  FaAward,
  FaUsers,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaMedal,
  FaCertificate,
  FaUniversity,
  FaExternalLinkAlt,
  FaBook,
  FaTrophy,
  FaStar,
  FaLightbulb,
  FaHandshake,
  FaRocket,
  FaFlask,
  FaCog,
  FaCheckCircle,
  FaEye
} from "react-icons/fa";
// Education data
const educationDataJson = {
  "education": {
    "degree": "Bachelor of Engineering (B.Eng) in Food Engineering",
    "university": "University of Ilorin",
    "location": "Ilorin, Kwara State, Nigeria",
    "duration": "2018 - 2024",
    "grade": "Second Class Upper Honors",
    "description": "Comprehensive engineering program focusing on food processing, quality control, and safety management. Developed strong analytical and problem-solving skills through rigorous coursework and practical laboratory experience.",
    "keySubjects": [
      "Food Process Engineering",
      "Quality Control & Assurance",
      "Food Safety & HACCP",
      "Thermodynamics",
      "Unit Operations",
      "Food Chemistry",
      "Microbiology",
      "Project Management",
      "Statistics & Data Analysis",
      "Engineering Mathematics",
      "Fluid Mechanics",
      "Heat & Mass Transfer"
    ],
    "achievements": [
      "Graduated with Second Class Upper Honors ",
      "Completed final year project on innovative food preservation techniques",
      "Active member of student engineering society and leadership roles",
      "Participated in multiple engineering conferences and workshops",
      "Received academic excellence recognition in multiple semesters",
      "Contributed to research publications in food engineering"
    ],
    "projects": [
      {
        "title": "3rd Generation Rice-Soy Snack Development",
        "description": "Developed a 3rd generation rice-soy snack with enhanced nutritional profile and improved processing techniques",
        "technologies": ["Product Development", "Process Control", "Food Science", "Nutritional Analysis"],
        "year": "2024",
        "publicationLink": "https://https://elibrary.asabe.org/abstract.asp?aid=55351",
        "publicationTitle": "Development and Characterization of 3rd Generation Rice-Soy Snack"
      },

    ]
  },
  "certifications": [
    {
      "title": "Exceptional Leadership Award",
      "description": "Recognized for outstanding leadership qualities and contribution to student community development. This award acknowledges exceptional ability to inspire, guide, and motivate fellow students while maintaining academic excellence.",
      "issuer": "University of Ilorin",
      "year": "2023",
      "category": "Leadership",
      "skills": ["Leadership", "Team Management", "Community Development", "Public Speaking"],
      "images": ["/assets/awards/exceptional-leadership.jpg"]
    },
    {
      "title": "Health, Safety & Environment (HSE) Certification",
      "description": "Comprehensive certification covering workplace safety, environmental protection, and health management across three progressive levels. Includes risk assessment, safety protocols, environmental compliance, and emergency response procedures.",
      "issuer": "Professional Safety Institute",
      "year": "2023",
      "category": "Safety & Environment",
      "skills": ["Risk Assessment", "Safety Management", "Environmental Compliance", "Emergency Response"],
      "images": [
        "/assets/awards/HSE1.png",
        "/assets/awards/HSE2.png",
        "/assets/awards/HSE3.png"
      ]
    },
    {
      "title": "Most Reputable NUESites Award",
      "description": "Awarded for maintaining exceptional contributions to the Nigerian Universities Engineering Students' Association . Selected from hundreds of students for outstanding character, organization contributions, and positive impact on the university community.",
      "issuer": "Nigerian University Engineering Students Association",
      "year": "2024",
      "category": "Academic Excellence",
      "skills": ["Academic Excellence", "Character Development", "Peer Leadership", "Community Impact"],
      "images": ["/assets/awards/most-reputable.jpg"]
    }
  ],
  "memberships": [
    {
      "title": "Graduate Member, Nigerian Society of Engineers (GMNSE)",
      "description": "Professional membership in Nigeria's premier engineering organization, providing access to continuous professional development, networking opportunities, and industry best practices.",
      "role": "Graduate Member",
      "year": "2024 - Present",
      "icon": "FaUniversity",
      "benefits": ["Professional Development", "Industry Networking", "Technical Resources", "Career Advancement"]
    },
    {
      "title": "General Secretary - NAFES",
      "description": "National Association Of Food Engineering Students leadership position, responsible for coordinating national activities, managing communications, and representing student interests at the national level.",
      "role": "General Secretary",
      "year": "2022 - 2024",
      "icon": "FaUsers",
      "responsibilities": ["National Coordination", "Strategic Planning", "Student Advocacy", "Event Management"]
    },
    {
      "title": "NAKSS Tech Summit Co-organizer",
      "description": "Organized technology summit promoting STEM education and innovation, bringing together students, professionals, and industry leaders to discuss emerging technologies and career opportunities.",
      "role": "Co-organizer",
      "year": "2023",
      "icon": "FaAward",
      "impact": ["STEM Promotion", "Industry Collaboration", "Student Engagement", "Innovation Advocacy"]
    },
    {
      "title": "60 Most Reputable NUSEites",
      "description": "Selected among the 60 most reputable students in NUESA nationwide, recognizing outstanding academic performance, leadership qualities, and positive contribution to the engineering student community.",
      "role": "Honoree",
      "year": "2024",
      "icon": "FaMedal",
      "recognition": ["National Recognition", "Academic Excellence", "Leadership Impact", "Peer Respect"]
    }
  ],
  "achievements": [
    {
      "year": "2024",
      "title": "Most Reputable Student Award",
      "description": "Selected among the 60 most reputable students nationwide for exceptional academic performance and character",
      "icon": "FaTrophy",
      "color": "from-yellow-500 to-orange-500",
      "impact": "National recognition for academic and character excellence"
    },
    {
      "year": "2024",
      "title": "Engineering Graduation with Honors",
      "description": "Completed Bachelor of Engineering degree with Second Class Upper Honors ",
      "icon": "FaGraduationCap",
      "color": "from-blue-500 to-purple-500",
      "impact": "Academic excellence in rigorous engineering program"
    },
    {
      "year": "2023",
      "title": "Exceptional Leadership Award",
      "description": "Recognized for outstanding leadership in student community development and peer mentorship",
      "icon": "FaHandshake",
      "color": "from-orange-500 to-red-500",
      "impact": "Positive influence on student community and leadership development"
    },
    {
      "year": "2023",
      "title": "HSE Professional Certification",
      "description": "Completed comprehensive Health, Safety & Environment training across three progressive levels",
      "icon": "FaLightbulb",
      "color": "from-green-500 to-blue-500",
      "impact": "Enhanced workplace safety and environmental management expertise"
    },
    {
      "year": "2022-2024",
      "title": "NAFES General Secretary",
      "description": "Led national association of food engineering students, coordinating activities and representing student interests",
      "icon": "FaUsers",
      "color": "from-blue-500 to-purple-500",
      "impact": "National leadership role affecting thousands of engineering students"
    },
    {
      "year": "2023",
      "title": "Tech Summit Co-organizer",
      "description": "Successfully organized NAKSS Tech Summit promoting STEM education and innovation",
      "icon": "FaRocket",
      "color": "from-purple-500 to-pink-500",
      "impact": "Promoted STEM education and connected students with industry professionals"
    }
  ]
};

// TypeScript interfaces
interface Education {
  degree: string;
  university: string;
  location: string;
  duration: string;
  grade: string;
  gpa: string;
  description: string;
  keySubjects: string[];
  achievements: string[];
  projects?: {
    title: string;
    description: string;
    technologies: string[];
    year: string;
    publicationLink?: string;
    publicationTitle?: string;
  }[];
}

interface Certification {
  title: string;
  description: string;
  issuer: string;
  year: string;
  category: string;
  skills?: string[];
  images: string[];
}

interface Membership {
  title: string;
  description: string;
  role: string;
  year: string;
  icon: string;
  benefits?: string[];
  responsibilities?: string[];
  impact?: string[];
  recognition?: string[];
}

interface Achievement {
  year: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  impact: string;
}

export default function Education() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCertImage, setSelectedCertImage] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentCertImages, setCurrentCertImages] = useState<string[]>([]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("education");
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  const { education, certifications, memberships, achievements } = educationDataJson;

  const iconMap: { [key: string]: any } = {
    FaUniversity,
    FaUsers,
    FaAward,
    FaMedal,
    FaTrophy,
    FaGraduationCap,
    FaHandshake,
    FaLightbulb,
    FaRocket
  };

  const openModal = (certImages: string[], initialIndex: number) => {
    setCurrentCertImages(certImages);
    setCurrentImageIndex(initialIndex);
    setSelectedCertImage(certImages[initialIndex]);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedCertImage("");
    setCurrentImageIndex(0);
    setCurrentCertImages([]);
    document.body.style.overflow = 'auto';
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % currentCertImages.length;
      setSelectedCertImage(currentCertImages[nextIndex]);
      return nextIndex;
    });
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => {
      const nextIndex = (prevIndex - 1 + currentCertImages.length) % currentCertImages.length;
      setSelectedCertImage(currentCertImages[nextIndex]);
      return nextIndex;
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-orange-500/5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 w-full" ref={ref}>
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-foreground/60 hover:text-orange-500 mb-12 text-sm transition-colors group"
          >
            <FaArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Education &
            <span className="text-orange-500 px-4 underline decoration-orange-500 decoration-4">
              Achievements
            </span>
          </h1>
          <p className="text-lg md:text-xl text-secondary max-w-3xl mx-auto mb-12">
            Academic journey, professional certifications, and leadership accomplishments that shaped my career
          </p>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
          {/*  <div className="bg-white/5 dark:bg-black/5 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
              <div className="text-2xl md:text-3xl font-bold text-orange-500 mb-1">4.2</div>
              <div className="text-sm text-secondary">GPA</div>
            </div>  */}
            <div className="bg-white/5 dark:bg-black/5 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
              <div className="text-2xl md:text-3xl font-bold text-orange-500 mb-1">{certifications.length}</div>
              <div className="text-sm text-secondary">Certifications</div>
            </div>
            <div className="bg-white/5 dark:bg-black/5 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
              <div className="text-2xl md:text-3xl font-bold text-orange-500 mb-1">{memberships.length}</div>
              <div className="text-sm text-secondary">Memberships</div>
            </div>
            <div className="bg-white/5 dark:bg-black/5 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
              <div className="text-2xl md:text-3xl font-bold text-orange-500 mb-1">{achievements.length}</div>
              <div className="text-sm text-secondary">Awards</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {[
            { id: "education", label: "Education", icon: FaGraduationCap },
            { id: "certifications", label: "Certifications", icon: FaCertificate },
            { id: "memberships", label: "Memberships", icon: FaUsers },
            { id: "achievements", label: "Achievements", icon: FaTrophy }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeTab === tab.id
                ? "bg-orange-500 text-white shadow-lg"
                : "bg-white/5 dark:bg-black/5 text-foreground hover:bg-orange-500/20 border border-gray-200 dark:border-gray-700"
                }`}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Content Sections */}
        <AnimatePresence mode="wait">
          {activeTab === "education" && (
            <motion.div
              key="education"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {/* University Education Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="bg-white/5 dark:bg-black/5 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-orange-500/50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* University Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-orange-500/20 rounded-full">
                        <FaUniversity className="text-orange-500 text-xl" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">{education.degree}</h3>
                        <p className="text-orange-500 font-medium">{education.university}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-orange-500" />
                        <span className="text-secondary">{education.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaCalendarAlt className="text-orange-500" />
                        <span className="text-secondary">{education.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaMedal className="text-orange-500" />
                        <span className="text-secondary">{education.grade}</span>
                      </div>
                      {/* <div className="flex items-center gap-2">
                        <FaStar className="text-orange-500" />
                        <span className="text-secondary">GPA: {education.gpa}</span>
                      </div> */}
                    </div>

                    <p className="text-secondary leading-relaxed mb-6">
                      {education.description}
                    </p>

                    {/* Education Progress */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                        <FaRocket className="text-orange-500" />
                        Academic Journey
                      </h4>
                      <div className="space-y-3">
                        {[
                          { year: "2018", event: "Started Engineering Program", status: "completed" },
                          { year: "2020", event: "Completed Core Courses", status: "completed" },
                          { year: "2022", event: "Specialized in Food Engineering", status: "completed" },
                          { year: "2024", event: "Graduated with Honors", status: "completed" }
                        ].map((milestone, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="flex items-center gap-3"
                          >
                            <div className="w-3 h-3 bg-orange-500 rounded-full flex-shrink-0" />
                            <div className="flex-1">
                              <span className="text-orange-500 font-medium text-sm">{milestone.year}</span>
                              <span className="text-secondary text-sm ml-2">{milestone.event}</span>
                            </div>
                            <FaCheckCircle className="text-green-500 text-sm" />
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Key Subjects */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                        <FaBook className="text-orange-500" />
                        Key Subjects
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {education.keySubjects.map((subject: string, index: number) => (
                          <motion.span
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="px-3 py-2 bg-orange-500/10 text-orange-500 text-sm rounded-full border border-orange-500/30 text-center hover:bg-orange-500/20 transition-colors"
                          >
                            {subject}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Academic Projects */}
                    {education.projects && education.projects.length > 0 && (
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                          <FaFlask className="text-orange-500" />
                          Academic Projects
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {education.projects.map((project: any, index: number) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.4, delay: index * 0.1 }}
                              className="p-4 bg-white/5 dark:bg-black/5 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-orange-500/50 transition-all duration-300 group"
                            >
                              <div className="flex items-center gap-2 mb-2">
                                <FaCog className="text-orange-500 group-hover:rotate-180 transition-transform duration-300" />
                                <h5 className="font-semibold text-foreground group-hover:text-orange-500 transition-colors">{project.title}</h5>
                                <span className="text-xs text-orange-500 ml-auto">{project.year}</span>
                              </div>
                              <p className="text-secondary text-sm mb-3">{project.description}</p>

                              {/* Technologies */}
                              <div className="flex flex-wrap gap-1 mb-3">
                                {project.technologies.map((tech: string, techIndex: number) => (
                                  <span
                                    key={techIndex}
                                    className="px-2 py-1 bg-orange-500/10 text-orange-500 text-xs rounded-full"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>

                              {/* Publication Link */}
                              {project.publicationLink && (
                                <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                                  <div className="flex items-center gap-2 mb-2">
                                    <FaBook className="text-orange-500 text-xs" />
                                    <span className="text-xs font-medium text-foreground">Publication:</span>
                                  </div>
                                  <a
                                    href={project.publicationLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-3 py-2 bg-orange-500/20 hover:bg-orange-500/30 text-orange-500 text-xs rounded-lg transition-all duration-300 group"
                                  >
                                    <span className="line-clamp-1">{project.publicationTitle || "View Publication"}</span>
                                    <FaExternalLinkAlt className="group-hover:rotate-12 transition-transform" />
                                  </a>
                                </div>
                              )}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Academic Achievements */}
                  <div className="lg:w-80">
                    <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                      <FaStar className="text-orange-500" />
                      Academic Highlights
                    </h4>
                    <div className="space-y-3">
                      {education.achievements.map((achievement: string, index: number) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          className="flex items-start gap-3 p-3 bg-white/5 dark:bg-black/5 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-orange-500/30 transition-all duration-300 group"
                        >
                          <FaCheckCircle className="text-orange-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                          <span className="text-secondary text-sm">{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {activeTab === "certifications" && (
            <motion.div
              key="certifications"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {certifications.map((cert: Certification, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white/5 dark:bg-black/5 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-orange-500/50 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer group"
                  onClick={() => openModal(cert.images, 0)}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-orange-500/20 rounded-full group-hover:bg-orange-500/30 transition-colors">
                      <FaCertificate className="text-orange-500 text-xl" />
                    </div>
                    <div className="flex-1">
                      <span className="text-xs text-orange-500 font-medium">{cert.category}</span>
                      <p className="text-xs text-secondary">{cert.year}</p>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-orange-500 transition-colors">
                    {cert.title}
                  </h3>

                  <p className="text-secondary text-sm mb-4 line-clamp-3">
                    {cert.description}
                  </p>

                  {/* Skills */}
                  {cert.skills && (
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.map((skill: string, skillIndex: number) => (
                          <span
                            key={skillIndex}
                            className="px-2 py-1 bg-orange-500/10 text-orange-500 text-xs rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-secondary">{cert.issuer}</span>
                    <div className="flex items-center gap-1">
                      {cert.images.map((_: string, imgIndex: number) => (
                        <div
                          key={imgIndex}
                          className="w-2 h-2 bg-orange-500/30 rounded-full group-hover:bg-orange-500 transition-colors"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Preview Image */}
                  <div className="relative overflow-hidden rounded-lg">
                    <Image
                      src={cert.images[0]}
                      alt={cert.title}
                      width={300}
                      height={200}
                      className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-orange-500 text-white p-2 rounded-full">
                        <FaEye className="text-sm" />
                      </div>
                    </div>
                    <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                        {cert.images.length} image{cert.images.length > 1 ? 's' : ''}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === "memberships" && (
            <motion.div
              key="memberships"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {memberships.map((membership: Membership, index: number) => {
                const IconComponent = iconMap[membership.icon] || FaAward;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/5 dark:bg-black/5 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-orange-500/50 transition-all duration-300 shadow-lg hover:shadow-xl group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-orange-500/20 rounded-full group-hover:bg-orange-500/30 transition-colors">
                        <IconComponent className="text-orange-500 text-xl" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-orange-500 transition-colors mb-2">
                          {membership.title}
                        </h3>
                        <p className="text-orange-500 text-sm font-medium mb-2">{membership.role}</p>
                        <p className="text-secondary text-sm mb-3">{membership.description}</p>

                        {/* Additional Info */}
                        {(membership.benefits || membership.responsibilities || membership.impact || membership.recognition) && (
                          <div className="mb-3">
                            <div className="flex flex-wrap gap-1">
                              {(membership.benefits || membership.responsibilities || membership.impact || membership.recognition || []).map((item: string, itemIndex: number) => (
                                <span
                                  key={itemIndex}
                                  className="px-2 py-1 bg-orange-500/10 text-orange-500 text-xs rounded-full"
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="flex items-center gap-2">
                          <FaCalendarAlt className="text-orange-500 text-xs" />
                          <span className="text-xs text-secondary">{membership.year}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}

          {activeTab === "achievements" && (
            <motion.div
              key="achievements"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {/* Achievement Timeline */}
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 to-orange-300"></div>
                <div className="space-y-8">
                  {achievements.map((achievement: Achievement, index: number) => {
                    const IconComponent = iconMap[achievement.icon] || FaTrophy;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="relative flex items-start gap-6"
                      >
                        <div className={`relative z-10 p-3 bg-gradient-to-r ${achievement.color} rounded-full shadow-lg group-hover:scale-110 transition-transform`}>
                          <IconComponent className="text-white text-xl" />
                        </div>
                        <div className="flex-1 bg-white/5 dark:bg-black/5 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-orange-500/50 transition-all duration-300 group">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-orange-500 font-bold text-sm">{achievement.year}</span>
                            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          </div>
                          <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-orange-500 transition-colors">{achievement.title}</h3>
                          <p className="text-secondary mb-3">{achievement.description}</p>
                          <div className="flex items-center gap-2 text-sm">
                            <FaLightbulb className="text-orange-500" />
                            <span className="text-secondary font-medium">Impact:</span>
                            <span className="text-secondary">{achievement.impact}</span>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Enhanced Modal for displaying certification images */}
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50 p-4 backdrop-blur-sm" onClick={closeModal}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative bg-background rounded-2xl max-w-[95vw] max-w-4xl max-h-[90vh] overflow-hidden w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-foreground/60 hover:text-foreground z-10 p-2 bg-black/20 rounded-full backdrop-blur-sm transition-colors"
              >
                ✕
              </button>

              {currentCertImages.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/60 hover:text-foreground z-10 p-2 bg-black/20 rounded-full backdrop-blur-sm transition-colors"
                  >
                    ←
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/60 hover:text-foreground z-10 p-2 bg-black/20 rounded-full backdrop-blur-sm transition-colors"
                  >
                    →
                  </button>
                </>
              )}

              <Image
                src={selectedCertImage}
                alt="Certification"
                width={800}
                height={600}
                className="w-full h-auto max-h-[90vh] object-contain"
              />

              {currentCertImages.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-foreground/80 text-sm bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm">
                  {currentImageIndex + 1} / {currentCertImages.length}
                </div>
              )}
            </motion.div>
          </div>
        )}

        {/* Scroll to Top Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 p-3 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 transition-colors z-40"
          title="Scroll to top"
        >
          <FaArrowLeft className="rotate-90" size={16} />
        </motion.button>
      </div>
    </div>
  );
}

