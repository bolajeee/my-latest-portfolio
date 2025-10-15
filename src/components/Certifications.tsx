"use client";
import React from "react";
import Link from "next/link";
import useEmblaCarousel from 'embla-carousel-react'

const certifications = [
  {
    name: "Backend Web Development (Python)",
    details: "ALX-certified in Backend Web Development with proficiency in Python, Flask, and RESTful API architecture. Skilled in database modeling using PostgreSQL and MongoDB, authentication systems, and server-side logic optimization for scalable web applications.",
    link: "https://drive.google.com/file/d/1rKMRAT1rfhd644Ss1OWFBJK5YIZ-aht5/view?usp=sharing",
  },
  {
    name: "ALX Virtual Assistance",
    details: "ALX-certified in Virtual Assistance with expertise in remote team coordination, document management, and workflow automation using Google Workspace, Notion, and CRM tools. Adept in professional correspondence, meeting scheduling, and client relationship management.",
    link: "https://www.virtualbadge.io/certificate-validator?credential=cer-71832355-815a-462c-891c-406757e5",
  },
  {
    name: "AI Starter Kit",
    details: "ALX-certified in Artificial Intelligence Fundamentals, with a foundation in machine learning workflows, supervised and unsupervised learning, data preprocessing, and model evaluation. Familiar with Python libraries such as scikit-learn, NumPy, and pandas for AI experimentation.",
    link: "https://drive.google.com/file/d/1BKyXRIcrAw9fa864N1aMtMd0mLwianKi/view?usp=drive_link",
  },
  {
    name: "Professional Foundation",
    details: "ALX Professional Foundation certification demonstrating excellence in communication, collaboration, agile teamwork, and critical problem-solving. Experienced in professional ethics, adaptability, and remote work efficiency across cross-functional teams.",
    link: "https://drive.google.com/file/d/15qgVsRBC9-44U9vYyMpQ0gymJAMD376n/view?usp=drive_link",
  },
  {
    name: "Backend Development",
    details: "Advanced ALX certification in Backend Development, focused on designing and deploying production-ready APIs. Proficient in Flask, Django, and Express.js with skills in database integration, token-based authentication (JWT), and cloud deployment via AWS and Render.",
    link: "https://drive.google.com/file/d/1lCuJ0dj_-sakKXo8c4Q16RdHDG27x69w/view?usp=drive_link",
  },
  {
    name: "Food Product Development",
    details: "Nestlé-certified in Food Product Development, experienced in prototype formulation, sensory evaluation, and quality assurance. Skilled in product ideation, market analysis, food safety compliance (HACCP), and cross-functional project execution for innovation pipelines.",
    link: "https://drive.google.com/file/d/1YeMisDMmI3pSnOpojtW4E2K-JpE6wZgZ/view?usp=drive_link",
  },
  {
    name: "Project Management",
    details: "Nestlé-certified in Project Management with strong command of planning, scheduling, and execution using tools such as Trello, Asana, and Gantt charts. Skilled in stakeholder communication, risk analysis, and resource optimization through Agile and Waterfall methodologies.",
    link: "https://drive.google.com/file/d/1crwc640ZXOXcwmee6kIroJIfD6Po3uqN/view?usp=drive_link",
  },
  {
    name: "Consumer Understanding",
    details: "Nestlé-certified in Consumer Understanding, with expertise in market segmentation, survey design, sensory testing, and behavioral analytics. Adept at translating consumer insights into data-driven product innovation and brand positioning strategies.",
    link: "https://drive.google.com/file/d/1TGOPsp1nDHFTWgUFz9OM4lwAQU5ZiRsA/view?usp=drive_link",
  },
  {
    name: "Design of Experiments (DoE)",
    details: "Nestlé-certified in Design of Experiments, proficient in factorial and response surface methodologies for process optimization. Skilled in Minitab and Excel for statistical analysis, variance interpretation, and data-driven decision-making in product and process design.",
    link: "https://drive.google.com/file/d/1osuWyo0nX0Gk4SaGocWPhCroJaql7EhU/view?usp=drive_link",
  },
];

import Autoplay from 'embla-carousel-autoplay'

const CertificationsCarousel = ({ certifications }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {certifications.map((item, i) => (
          <div key={i} className="flex-[0_0_100%] md:flex-[0_0_33.333%] p-4">
            <div className="p-6 rounded-lg shadow bg-white/5 border border-secondary/50">
              <h3 className="text-xl font-semibold text-primary">{item.name}</h3>
              <p className="text-secondary mt-2 hidden md:block">{item.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Certifications = () => {
  return (
    <div
      className="mx-auto px-4 py-20 bg-background text-foreground"
      id="certifications"
    >
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-16">
        My <span className="text-primary">Certifications</span>
      </h1>

      <div className="max-w-[900px] mx-auto">
        <CertificationsCarousel certifications={certifications} />
      </div>
    </div>
  );
};

export default Certifications;
