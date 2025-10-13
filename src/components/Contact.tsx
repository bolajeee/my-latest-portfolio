"use client";
import React, { useState } from "react";
import Image from "next/image";
import phone from "../assets/phone.png";
import mail from "../assets/mail.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    tel: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        "service_pw7xrpv",
        "template_xulpt9r",
        formData,
        "oloR0CX5NnmNzgmOq"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Email sent successfully!");
          setFormData({
            firstname: "",
            lastname: "",
            email: "",
            tel: "",
            message: "",
          });
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Email sending failed!");
        }
      );
  };

  return (
    <div
      className="max-w-[1100px] mx-auto flex flex-col lg:flex-row text-foreground p-8 rounded-lg space-y-12 lg:space-y-0 lg:space-x-12 py-32 bg-background" // Use theme variables
      id="contact"
    >
      {/* Contact Information Section */}
      <div className="flex justify-center items-center w-full lg:w-1/3">
        <ul className="space-y-8">
          <li className="flex items-center space-x-4">
            <Image src={phone} alt="Phone" className="h-[40px] w-auto grayscale hover:grayscale-0 transition duration-300" /> {/* Apply grayscale */}
            <p className="text-lg md:text-xl font-medium text-primary"> {/* Use text-primary */}
              <a href="tel:+2349157835182">+234 915 783 5182</a>
            </p>
          </li>
          <li className="flex items-center space-x-4">
            <Image src={mail} alt="Mail" className="h-[40px] w-auto grayscale hover:grayscale-0 transition duration-300" /> {/* Apply grayscale */}
            <p className="text-md md:text-xl font-sm text-primary"> {/* Use text-primary */}
              <a href="mailto:ibrahimomobolaji1999@gmail.com">
                Ibrahimomobolaji1999 <br />
                @gmail.com
              </a>
            </p>
          </li>
        </ul>
      </div>

      {/* Form Section */}
      <div className="bg-white/5 dark:bg-black/5 p-8 rounded-xl w-full lg:w-2/3 shadow-lg border border-gray-200 dark:border-gray-700"> {/* Use theme-aware background and border */}
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4"> {/* Use text-primary */}
          Let&apos;s Connect
        </h2>
        <p className="text-secondary mb-6 text-lg"> {/* Use text-secondary */}
          Feel free to get in touch using the form below:
        </p>

        <form className="space-y-6" onSubmit={sendEmail}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="firstname"
              className="bg-background border border-secondary/50 rounded-lg p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary placeholder-secondary/70" // Theme-aware input
              placeholder="First Name"
              value={formData.firstname}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastname"
              className="bg-background border border-secondary/50 rounded-lg p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary placeholder-secondary/70" // Theme-aware input
              placeholder="Last Name"
              value={formData.lastname}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="email"
            name="email"
            className="bg-background border border-secondary/50 rounded-lg p-3 w-full text-foreground focus:outline-none focus:ring-2 focus:ring-primary placeholder-secondary/70" // Theme-aware input
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="tel"
            className="bg-background border border-secondary/50 rounded-lg p-3 w-full text-foreground focus:outline-none focus:ring-2 focus:ring-primary placeholder-secondary/70" // Theme-aware input
            placeholder="Phone Number" // Fixed typo here
            value={formData.tel}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            className="bg-background border border-secondary/50 rounded-lg p-3 w-full text-foreground focus:outline-none focus:ring-2 focus:ring-primary placeholder-secondary/70" // Theme-aware input
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="bg-primary hover:bg-primary/80 text-background font-semibold text-lg px-6 py-3 rounded-lg shadow-md transition-all w-full md:w-auto" // Theme-aware button
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
