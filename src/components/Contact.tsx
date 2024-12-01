import React from "react";
import Image from "next/image";
import phone from "../assets/phone.png";
import mail from "../assets/mail.png";

const Contact = () => {
  return (
    <div
      className="max-w-[1100px] mx-auto flex flex-col lg:flex-row text-white/70 p-8 rounded-lg space-y-12 lg:space-y-0 lg:space-x-12 py-32"
      id="contact"
    >
      {/* Contact Information Section */}
      <div className="flex justify-center items-center w-full lg:w-1/3">
        <ul className="space-y-8">
          <li className="flex items-center space-x-4">
            <Image src={phone} alt="Phone" className="h-[40px] w-auto" />
            <p className="text-lg md:text-xl font-medium">+234 915 783 5182</p>
          </li>
          <li className="flex items-center space-x-4">
            <Image src={mail} alt="Mail" className="h-[40px] w-auto" />
            <p className="text-md md:text-xl font-sm">
              Ibrahimomobolaji1999 <br />@gmail.com
            </p>
          </li>
        </ul>
      </div>

      {/* Form Section */}
      <div className="bg-white/10 p-8 rounded-xl w-full lg:w-2/3 shadow-lg">
        <h2 className="text-4xl md:text-5xl font-bold text-orange-400 mb-4">
          Let&apos;s Connect
        </h2>
        <p className="text-white/70 mb-6 text-lg">
          Feel free to get in touch using the form below:
        </p>

        <form
          className="space-y-6"
          action="https://getform.io/f/axoovndb"
          method="POST"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="first_name"
              className="bg-black/70 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder-gray-400"
              placeholder="First Name"
              required
            />
            <input
              type="text"
              name="last_name"
              className="bg-black/70 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder-gray-400"
              placeholder="Last Name"
              required
            />
          </div>
          <input
            type="email"
            name="email"
            className="bg-black/70 rounded-lg p-3 w-full text-white focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder-gray-400"
            placeholder="Email"
            required
          />
          <input
            type="tel"
            name="phone"
            className="bg-black/70 rounded-lg p-3 w-full text-white focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder-gray-400"
            placeholder="Phone Number"
            required
          />
          <textarea
            name="message"
            className="bg-black/70 rounded-lg p-3 w-full text-white focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder-gray-400"
            placeholder="Your Message"
            required
          />
          <button
            type="submit"
            className="bg-orange-700 hover:bg-orange-500 text-white font-semibold text-lg px-6 py-3 rounded-lg shadow-md transition-all w-full md:w-auto"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
