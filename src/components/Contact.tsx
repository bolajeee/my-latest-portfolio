"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
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
  const [focusedField, setFocusedField] = useState<string | null>(null);

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

  const contactInfo = [
    {
      icon: FaPhone,
      label: "Phone",
      value: "+234 904 733 7104",
      href: "tel:+2349047337104",
      color: "text-green-500"
    },
    {
      icon: FaEnvelope,
      label: "Email",
      value: "ibrahimomobolaji1999@gmail.com",
      href: "mailto:ibrahimomobolaji1999@gmail.com",
      color: "text-blue-500"
    },
    // {
    //   icon: FaMapMarkerAlt,
    //   label: "Location",
    //   value: "Lagos, Nigeria",
    //   href: "#",
    //   color: "text-red-500"
    // }
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/in/bolajeee",
      color: "text-blue-600 hover:text-blue-700"
    },
    {
      icon: FaGithub,
      href: "https://github.com/bolajeee",
      color: "text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
    },
    {
      icon: FaTwitter,
      href: "https://x.com/_bolajeee",
      color: "text-blue-400 hover:text-blue-500"
    }
  ];

  return (
    <div className="bg-background text-foreground py-24 lg:py-28 relative overflow-hidden" id="contact">
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
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Get In
            <span className="px-4 text-blue-900 underline decoration-blue-900 decoration-4 dark:text-blue-200 dark:decoration-blue-200">
              Touch
            </span>
          </h2>
          <p className="text-lg md:text-xl text-secondary max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let&apos;s discuss your next project and create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Contact Info Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                Let&apos;s Connect
              </h3>

              {/* Contact Information */}
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white/5 p-4 transition-all duration-300 group hover:border-blue-900/30 dark:border-gray-700 dark:bg-black/5 dark:hover:border-blue-300/30"
                  >
                    <div className={`rounded-lg bg-gradient-to-r from-slate-100 to-blue-50 p-3 ${item.color} transition-transform duration-300 group-hover:scale-110 dark:from-slate-900/55 dark:to-blue-950/35`}>
                      <item.icon size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-secondary font-medium">{item.label}</p>
                      <p className="text-foreground font-semibold">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-8">
                <h4 className="text-lg font-semibold text-foreground mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`rounded-lg border border-gray-200 bg-white/5 p-3 transition-all duration-300 hover:border-blue-900/30 dark:border-gray-700 dark:bg-black/5 dark:hover:border-blue-300/30 ${social.color}`}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/5 dark:bg-black/5 p-8 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 backdrop-blur-sm"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Send Message
            </h3>

            <form className="space-y-6" onSubmit={sendEmail}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Name */}
                <motion.div
                  className="relative"
                  whileFocus={{ scale: 1.02 }}
                >
                  <input
                    type="text"
                    name="firstname"
                    className={`w-full bg-white/5 dark:bg-black/5 border rounded-xl p-4 text-foreground focus:outline-none transition-all duration-300 placeholder-gray-400 ${focusedField === 'firstname'
                      ? 'border-blue-900 shadow-lg shadow-blue-900/15 dark:border-blue-300 dark:shadow-blue-300/10'
                      : 'border-gray-200 dark:border-gray-700 hover:border-blue-900/30 dark:hover:border-blue-300/30'
                      }`}
                    placeholder="First Name"
                    value={formData.firstname}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('firstname')}
                    onBlur={() => setFocusedField(null)}
                    required
                  />
                </motion.div>

                {/* Last Name */}
                <motion.div
                  className="relative"
                  whileFocus={{ scale: 1.02 }}
                >
                  <input
                    type="text"
                    name="lastname"
                    className={`w-full bg-white/5 dark:bg-black/5 border rounded-xl p-4 text-foreground focus:outline-none transition-all duration-300 placeholder-gray-400 ${focusedField === 'lastname'
                      ? 'border-blue-900 shadow-lg shadow-blue-900/15 dark:border-blue-300 dark:shadow-blue-300/10'
                      : 'border-gray-200 dark:border-gray-700 hover:border-blue-900/30 dark:hover:border-blue-300/30'
                      }`}
                    placeholder="Last Name"
                    value={formData.lastname}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('lastname')}
                    onBlur={() => setFocusedField(null)}
                    required
                  />
                </motion.div>
              </div>

              {/* Email */}
              <motion.div
                className="relative"
                whileFocus={{ scale: 1.02 }}
              >
                <input
                  type="email"
                  name="email"
                  className={`w-full bg-white/5 dark:bg-black/5 border rounded-xl p-4 text-foreground focus:outline-none transition-all duration-300 placeholder-gray-400 ${focusedField === 'email'
                    ? 'border-blue-900 shadow-lg shadow-blue-900/15 dark:border-blue-300 dark:shadow-blue-300/10'
                    : 'border-gray-200 dark:border-gray-700 hover:border-blue-900/30 dark:hover:border-blue-300/30'
                    }`}
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  required
                />
              </motion.div>

              {/* Phone */}
              <motion.div
                className="relative"
                whileFocus={{ scale: 1.02 }}
              >
                <input
                  type="tel"
                  name="tel"
                  className={`w-full bg-white/5 dark:bg-black/5 border rounded-xl p-4 text-foreground focus:outline-none transition-all duration-300 placeholder-gray-400 ${focusedField === 'tel'
                    ? 'border-blue-900 shadow-lg shadow-blue-900/15 dark:border-blue-300 dark:shadow-blue-300/10'
                    : 'border-gray-200 dark:border-gray-700 hover:border-blue-900/30 dark:hover:border-blue-300/30'
                    }`}
                  placeholder="Phone Number"
                  value={formData.tel}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('tel')}
                  onBlur={() => setFocusedField(null)}
                  required
                />
              </motion.div>

              {/* Message */}
              <motion.div
                className="relative"
                whileFocus={{ scale: 1.02 }}
              >
                <textarea
                  name="message"
                  rows={5}
                  className={`w-full bg-white/5 dark:bg-black/5 border rounded-xl p-4 text-foreground focus:outline-none transition-all duration-300 placeholder-gray-400 resize-none ${focusedField === 'message'
                    ? 'border-blue-900 shadow-lg shadow-blue-900/15 dark:border-blue-300 dark:shadow-blue-300/10'
                    : 'border-gray-200 dark:border-gray-700 hover:border-blue-900/30 dark:hover:border-blue-300/30'
                    }`}
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  disabled={submissionStatus === "sending"}
                  className="w-full py-4 text-lg font-semibold"
                >
                  {submissionStatus === "sending" ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </motion.div>

              {/* Status Messages */}
              {submissionStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-green-500 text-center font-medium"
                >
                  ✅ Message sent successfully! I&apos;ll get back to you soon.
                </motion.div>
              )}
              {submissionStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-500 text-center font-medium"
                >
                  ❌ Failed to send message. Please try again or contact me directly.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
