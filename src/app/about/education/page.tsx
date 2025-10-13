"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Education() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCertImage, setSelectedCertImage] = useState(""); // Renamed to avoid confusion
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Renamed for clarity
  const [currentCertImages, setCurrentCertImages] = useState<string[]>([]); // Store images of the currently selected cert

  const certifications = [
    {
      title: "Exceptional Leadership Award",
      images: ["/assets/awards/exceptional-leadership.jpg"], // Always an array
    },
    {
      title: "HSE Level 1, 2 & 3",
      images: [
        "/assets/awards/HSE1.png",
        "/assets/awards/HSE2.png",
        "/assets/awards/HSE3.png",
      ],
    },
    {
      title: "Most Reputable",
      images: ["/assets/awards/most-reputable.jpg"], // Always an array
    },
  ];

  const openModal = (certImages: string[], initialIndex: number) => {
    setCurrentCertImages(certImages);
    setCurrentImageIndex(initialIndex);
    setSelectedCertImage(certImages[initialIndex]);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedCertImage("");
    setCurrentImageIndex(0);
    setCurrentCertImages([]);
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

  return (
    <div className="min-h-screen p-8 bg-background text-foreground"> {/* Use theme variables */}
      <Link
        href="/"
        className="text-primary hover:text-primary/80 mb-8 inline-block" // Use theme variables
      >
        ← Back to Home
      </Link>

      <h1 className="text-4xl font-bold mb-8 text-foreground text-center"> {/* Use theme variables */}
        Education & <span className="text-primary">Certifications</span> {/* Use theme variables */}
      </h1>

      <div className="space-y-8 max-w-4xl mx-auto">
        {/* University Education */}
        <div className="bg-white/5 dark:bg-black/5 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 border border-secondary/50"> {/* Use theme variables */}
          <h2 className="text-2xl font-semibold mb-4 text-foreground"> {/* Use theme variables */}
            University Degree
          </h2>
          <div className="space-y-2">
            <p className="text-secondary font-medium">B.Eng Food Engineering</p> {/* Use theme variables */}
            <p className="text-secondary">University of Ilorin Nigeria</p> {/* Use theme variables */}
            <p className="text-secondary">Second Class Upper Honors</p> {/* Use theme variables */}
            <div className="text-sm text-secondary/70">2018 - 2024</div> {/* Use theme variables */}
          </div>
        </div>

        {/* Awards & Certifications */}
        <div className="bg-white/5 dark:bg-black/5 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 border border-secondary/50"> {/* Use theme variables */}
          <h2 className="text-2xl font-semibold mb-4 text-foreground"> {/* Use theme variables */}
            Awards & <span className="text-primary">Certifications</span> {/* Use theme variables */}
          </h2>
          <ul className="space-y-4 text-foreground"> {/* Use theme variables */}
            {certifications.map((cert, index) => (
              <li key={index} className="flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="font-medium">{cert.title}</span>
                  <span className="text-sm text-secondary/70">
                    Click to view certificate
                  </span>
                </div>
                {/* Display only the first image for the list item */}
                <Image
                  src={cert.images[0]}
                  alt={cert.title}
                  width={100} // Smaller width for list item
                  height={75} // Smaller height for list item
                  className="cursor-pointer ml-4 w-auto h-auto object-contain border border-secondary/30 rounded"
                  onClick={() => openModal(cert.images, 0)} // Open modal with all images for this cert
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Professional Memberships */}
        <div className="bg-white/5 dark:bg-black/5 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 border border-secondary/50"> {/* Use theme variables */}
          <h2 className="text-2xl font-semibold mb-4 text-foreground"> {/* Use theme variables */}
            Professional <span className="text-primary">Memberships</span> {/* Use theme variables */}
          </h2>
          <ul className="space-y-3 text-secondary"> {/* Use theme variables */}
            <li>Graduate Member, Nigerian Society of Engineers (GMNSE)</li>
            <li>
              General Secretary - National Association Of Food Engineering
              Students (NAFES)
            </li>
            <li>Co-organizer NAKSS Tech Summit</li>
            <li>STEM Conference Co-organizer (NAKSS)</li>
            <li>60 Most Reputable NUSEites (NUESA)</li>
          </ul>
        </div>
      </div>

      {/* Modal for displaying the certification image */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-4 text-white text-2xl font-bold z-10"
            >
              &times;
            </button>
            {currentCertImages.length > 1 && ( // Only show navigation if multiple images
              <>
                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all z-10"
                >
                  ←
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all z-10"
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
              className="max-w-full max-h-screen object-contain"
              onClick={closeModal}
            />
            {currentCertImages.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
                {currentImageIndex + 1} / {currentCertImages.length}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
