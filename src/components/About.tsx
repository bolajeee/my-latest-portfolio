"use client";
import React from "react";
import Link from "next/link";

const resumeSections = [
  {
    title: "Educational Background",
    items: [
      {
        name: "Food Engineering, University of Ilorin",
        details: "Graduated with second-class upper honors, overcoming challenges like the COVID-19 pandemic and strikes.",
        link: "/about/education",
      },
    ],
  },
  {
    title: "Skills & Expertise",
    items: [
      {
        name: "Web Development",
        details: "Proficient in front-end development using React and Vite, with experience in building responsive and interactive web applications.",
        link: "#projects",
      },
      {
        name: "Graphics Design",
        details: "Experienced in creating visually appealing designs using tools like Canva and Photoshop for branding, social media, and presentations.",
        link: "/about/design",
      },
    ],
  },
  {
    title: "Certifications",
    items: [
      {
        name: "ALX Virtual Assistance",
        details: "Certified in ALX Virtual Assistance, skilled in administrative support, email management, scheduling, and customer relations.",
        link: "https://www.virtualbadge.io/certificate-validator?credential=cer-71832355-815a-462c-891c-406757e5",
      },
    ],
  },
];

const About = () => {
  return (
    <div
      className="mx-auto px-4 py-20 bg-background text-foreground" // Use theme variables
      id="about"
    >
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-16">
        About <span className="text-primary">Me</span>
      </h1>

      <div className="max-w-[900px] mx-auto space-y-12">
        {resumeSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="p-6 rounded-lg shadow-md bg-white/5 dark:bg-black/5 border border-secondary/50"> {/* Theme-aware styling */}
            <h2 className="text-3xl font-semibold mb-6 text-primary border-b pb-2 border-primary/50">
              {section.title}
            </h2>
            <div className="space-y-8">
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex}>
                  <h3 className="text-xl font-medium text-foreground">
                    {item.link ? (
                      <Link href={item.link} className="block pulse-on-hover p-4 -m-4 rounded-lg hover:bg-white/10 dark:hover:bg-black/10 transition-colors duration-300"> {/* Apply pulse-on-hover and theme-aware hover background */}
                        <span className="hover:underline text-primary">{item.name}</span>
                      </Link>
                    ) : (
                      item.name
                    )}
                  </h3>
                  <p className="text-secondary mt-2 leading-relaxed">
                    {item.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
