"use client";
import React, { useState, useEffect } from "react";
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

interface Certification {
  name: string;
  details: string;
  link: string;
  provider: string;
}

const certifications: Certification[] = [
  {
    name: "Backend Web Development (Python)",
    details: "Backend development with Python, Flask, RESTful APIs, PostgreSQL, and MongoDB.",
    link: "https://drive.google.com/file/d/1rKMRAT1rfhd644Ss1OWFBJK5YIZ-aht5/view?usp=sharing",
    provider: "ALX",
  },
  {
    name: "Virtual Assistance",
    details: "Remote team coordination, document management, and workflow automation.",
    link: "https://www.virtualbadge.io/certificate-validator?credential=cer-71832355-815a-462c-891c-406757e5",
    provider: "ALX",
  },
  {
    name: "AI Starter Kit",
    details: "Machine learning fundamentals, data preprocessing, and model evaluation.",
    link: "https://drive.google.com/file/d/1BKyXRIcrAw9fa864N1aMtMd0mLwianKi/view?usp=drive_link",
    provider: "ALX",
  },
  {
    name: "Professional Foundation",
    details: "Communication, collaboration, and critical problem-solving skills.",
    link: "https://drive.google.com/file/d/15qgVsRBC9-44U9vYyMpQ0gymJAMD376n/view?usp=drive_link",
    provider: "ALX",
  },
  {
    name: "Backend Development",
    details: "Production-ready APIs with Flask, Django, JWT authentication, and cloud deployment.",
    link: "https://drive.google.com/file/d/1lCuJ0dj_-sakKXo8c4Q16RdHDG27x69w/view?usp=drive_link",
    provider: "ALX",
  },
  {
    name: "Food Product Development",
    details: "Prototype formulation, sensory evaluation, and quality assurance.",
    link: "https://drive.google.com/file/d/1YeMisDMmI3pSnOpojtW4E2K-JpE6wZgZ/view?usp=drive_link",
    provider: "Nestlé",
  },
  {
    name: "Project Management",
    details: "Planning, scheduling, and execution using Agile and Waterfall methodologies.",
    link: "https://drive.google.com/file/d/1crwc640ZXOXcwmee6kIroJIfD6Po3uqN/view?usp=drive_link",
    provider: "Nestlé",
  },
  {
    name: "Consumer Understanding",
    details: "Market segmentation, survey design, and behavioral analytics.",
    link: "https://drive.google.com/file/d/1TGOPsp1nDHFTWgUFz9OM4lwAQU5ZiRsA/view?usp=drive_link",
    provider: "Nestlé",
  },
  {
    name: "Design of Experiments (DoE)",
    details: "Statistical analysis and process optimization using Minitab and Excel.",
    link: "https://drive.google.com/file/d/1osuWyo0nX0Gk4SaGocWPhCroJaql7EhU/view?usp=drive_link",
    provider: "Nestlé",
  },
];

const CertificationsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      slidesToScroll: 1,
      breakpoints: {
        '(min-width: 768px)': { slidesToScroll: 2 }
      }
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  const scrollTo = (index: number) => emblaApi && emblaApi.scrollTo(index);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {certifications.map((cert, index) => (
            <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4">
              <Link
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="bg-foreground/5 hover:bg-foreground/10 border border-foreground/10 hover:border-orange-500/30 rounded-lg p-6 h-full transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-xs font-medium text-orange-500 bg-orange-500/10 px-2 py-1 rounded">
                      {cert.provider}
                    </span>
                    <svg className="w-4 h-4 text-foreground/40 group-hover:text-orange-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                  <h3 className="font-medium text-foreground group-hover:text-orange-500 transition-colors mb-2 break-words">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed break-words">
                    {cert.details}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === selectedIndex
                ? 'bg-orange-500 w-6'
                : 'bg-foreground/20 hover:bg-foreground/40'
              }`}
          />
        ))}
      </div>
    </div>
  );
};

const Certifications = () => {
  return (
    <div
      className="mx-auto px-4 py-16 bg-background text-foreground overflow-x-hidden"
      id="certifications"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-light mb-4 text-foreground">
            Certifications
          </h1>
          <p className="text-foreground/60 text-sm">
            Professional certifications and training programs
          </p>
        </div>

        <CertificationsCarousel />
      </div>
    </div>
  );
};

export default Certifications;
