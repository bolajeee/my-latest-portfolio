"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Education() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const certifications = [
    {
      title: "Exceptional Leadership Award",
      image: "/assets/awards/exceptional-leadership.jpg",
      width: 320,
      height: 240,
    },
    {
      title: "HSE Level 1, 2 & 3",
      images: [
        "/assets/awards/HSE1.png",
        "/assets/awards/HSE2.png",
        "/assets/awards/HSE3.png",
      ],
      width: 320,
      height: 240,
    },
    {
      title: "Most Reputable",
      image: "/assets/awards/most-reputable.jpg",
      width: 320,
      height: 240,
    },
  ];

  const openModal = (image: string) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage("");
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === (certifications[1].images?.length || 0) - 1
        ? 0
        : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? (certifications[1].images?.length || 0) - 1
        : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen p-8 bg-gradient-to-b from-gray-800 to-black">
      <Link
        href="/"
        className="text-orange-400 hover:text-orange-300 mb-8 inline-block"
      >
        ← Back to Home
      </Link>

      <h1 className="text-4xl font-bold mb-8 text-gray-200 text-center">
        Education & Certifications
      </h1>

      <div className="space-y-8 max-w-4xl mx-auto">
        {/* University Education */}
        <div className="bg-gray-900 dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-semibold mb-4 text-gray-200">
            University Degree
          </h2>
          <div className="space-y-2">
            <p className="text-gray-300 font-medium">B.Eng Food Engineering</p>
            <p className="text-gray-400">University of Ilorin Nigeria</p>
            <p className="text-gray-400">Second Class Upper Honors</p>
            <div className="text-sm text-gray-500">2018 - 2024</div>
          </div>
        </div>

        {/* Awards & Certifications */}
        <div className="bg-gray-900 dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-semibold mb-4 text-gray-200">
            Awards & Certifications
          </h2>
          <ul className="space-y-4 text-gray-300">
            {certifications.map((cert, index) => (
              <li key={index} className="flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="font-medium">{cert.title}</span>
                  <span className="text-sm text-gray-500">
                    Click to view certificate
                  </span>
                </div>
                {cert.images ? (
                  <div className="flex items-center mt-2">
                    <button
                      className="text-gray-300 hover:text-gray-200"
                      onClick={handlePrev}
                    >
                      &lt;
                    </button>
                    <Image
                      src={cert.images[currentIndex]}
                      alt={cert.title}
                      width={cert.width}
                      height={cert.height}
                      className="cursor-pointer mx-4 w-32 h-auto"
                      onClick={() => openModal(cert.images[currentIndex])}
                    />
                    <button
                      className="text-gray-300 hover:text-gray-200 "
                      onClick={handleNext}
                    >
                      &gt;
                    </button>
                  </div>
                ) : (
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    width={cert.width}
                    height={cert.height}
                    className="cursor-pointer ml-4 w-32 h-auto"
                    onClick={() => openModal(cert.image)}
                  />
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Professional Memberships */}
        <div className="bg-gray-900 dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-semibold mb-4 text-gray-200">
            Professional Memberships
          </h2>
          <ul className="space-y-3 text-gray-300">
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
              className="absolute top-0 right-0 p-2 text-white"
              onClick={closeModal}
            >
              &times;
            </button>
            <Image
              src={selectedImage}
              alt="Certification"
              width={800}
              height={600}
              className="max-w-full max-h-screen object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
