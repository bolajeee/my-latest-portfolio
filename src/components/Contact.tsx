"use client";
import React, { useState } from "react";
import Image from "next/image";
import phone from "../assets/phone.png";
import mail from "../assets/mail.png";
import emailjs from "@emailjs/browser";
import { Button } from "./Button";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    tel: "",
    message: "",
  });

  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  // 🔹 Handles input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🔹 Handles form submission and sends email
  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmissionStatus("error");
      alert("Please enter a valid email address.");
      return;
    }

    setSubmissionStatus("sending");

    // 🔹 Map to your EmailJS template variable names
    const templateParams = {
      from_name: `${formData.firstname} ${formData.lastname}`,
      reply_to: formData.email,
      phone_number: formData.tel,
      message: formData.message,
    };

    try {
      const response = await emailjs.send(
        "service_pw7xrpv", // ✅ Service ID
        "template_xulpt9r", // ✅ Template ID
        templateParams,
        "oloR0CX5NnmNzgmOq" // ✅ Public Key (check EmailJS dashboard)
      );

      console.log("✅ SUCCESS!", response.status, response.text);
      setSubmissionStatus("success");

      // Reset form after success
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        tel: "",
        message: "",
      });
    } catch (error: any) {
      console.error("❌ FAILED...", JSON.stringify(error, null, 2));
      setSubmissionStatus("error");
    }
  };

  return (
    <div
      className="max-w-[1100px] mx-auto flex flex-col lg:flex-row text-foreground p-8 rounded-lg space-y-12 lg:space-y-0 lg:space-x-12 py-32 bg-background"
      id="contact"
    >
      {/* Contact Info Section */}
      <div className="flex justify-center items-center w-full lg:w-1/3">
        <ul className="space-y-8">
          <li className="flex items-center space-x-4">
            <Image src={phone} alt="Phone" className="h-[40px] w-auto" />
            <p className="text-lg md:text-xl font-medium text-orange-500">
              <a href="tel:+2349157835182" className="hover:underline">
                +234 915 783 5182
              </a>
            </p>
          </li>
          <li className="flex items-center space-x-4">
            <Image src={mail} alt="Mail" className="h-[40px] w-auto" />
            <p className="text-md md:text-xl font-sm text-orange-500">
              <a href="mailto:ibrahimomobolaji1999@gmail.com" className="hover:underline">
                Ibrahimomobolaji1999 <br />@gmail.com
              </a>
            </p>
          </li>
        </ul>
      </div>

      {/* Form Section */}
      <div className="bg-white/5 dark:bg-black/5 p-8 rounded-xl w-full lg:w-2/3 shadow-lg border border-gray-200 dark:border-gray-700">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Let&apos;s Connect
        </h2>
        <p className="text-secondary mb-6 text-lg">
          Feel free to get in touch using the form below:
        </p>

        <form className="space-y-6" onSubmit={sendEmail}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="firstname"
              className="bg-background border border-secondary/50 rounded-lg p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary placeholder-secondary/70"
              placeholder="First Name"
              value={formData.firstname}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastname"
              className="bg-background border border-secondary/50 rounded-lg p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary placeholder-secondary/70"
              placeholder="Last Name"
              value={formData.lastname}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="email"
            name="email"
            className="bg-background border border-secondary/50 rounded-lg p-3 w-full text-foreground focus:outline-none focus:ring-2 focus:ring-primary placeholder-secondary/70"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="tel"
            className="bg-background border border-secondary/50 rounded-lg p-3 w-full text-foreground focus:outline-none focus:ring-2 focus:ring-primary placeholder-secondary/70"
            placeholder="Phone Number"
            value={formData.tel}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            className="bg-background border border-secondary/50 rounded-lg p-3 w-full text-foreground focus:outline-none focus:ring-2 focus:ring-primary placeholder-secondary/70"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <Button type="submit" disabled={submissionStatus === "sending"}>
            {submissionStatus === "sending" ? "Sending..." : "Send Message"}
          </Button>

          {/* Status messages */}
          {submissionStatus === "success" && (
            <p className="text-green-500 mt-3">✅ Email sent successfully!</p>
          )}
          {submissionStatus === "error" && (
            <p className="text-red-500 mt-3">❌ Email sending failed. Please try again.</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
