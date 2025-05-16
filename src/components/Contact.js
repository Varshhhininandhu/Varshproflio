import React, { useState } from 'react';
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name || !email || !message) {
      toast.error('Please fill out all fields.');
      return false;
    } else if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address.');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const serviceID = 'service_8wvuqd3';
    const templateID = 'template_mb4k7z5';
    const publicKey = 'wK-EXr2qnAo6GWBwK';

    emailjs.send(serviceID, templateID, formData, publicKey)
      .then(() => {
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        toast.error('Failed to send message. Please try again later.');
        console.error('Email error:', err);
      });
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen text-white py-20 px-6 lg:px-24 overflow-hidden bg-black bg-gradient-to-br from-black via-[#2e026d]/70 to-[#0f172a]/80"
    >
      <ToastContainer position="top-center" autoClose={4000} />

      {/* Background glowing blobs */}
      <div className="absolute w-[600px] h-[600px] bg-purple-700 opacity-20 rounded-full blur-3xl top-[-100px] left-[-150px] animate-pulse z-0"></div>
      <div className="absolute w-[400px] h-[400px] bg-pink-600 opacity-20 rounded-full blur-2xl bottom-[-100px] right-[-100px] animate-pulse z-0"></div>

      <h2 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-500 drop-shadow-lg mb-16">
        📬 Get in Touch
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto z-10 relative">
        {/* Contact Info */}
        <div className="space-y-8 text-white text-lg font-medium">
          {[
            {
              icon: <FaEnvelope className="text-blue-500 transition-transform duration-300 group-hover:scale-110" />,
              label: 'Email',
              value: 'varshhunique@gmail.com',
              href: 'mailto:varshhunique@gmail.com',
            },
            {
              icon: <FaPhoneAlt className="text-green-400 transition-transform duration-300 group-hover:scale-110" />,
              label: 'Phone',
              value: '+91 7639735373',
              href: 'tel:+917639735373',
            },
            {
              icon: <FaLinkedin className="text-blue-600 transition-transform duration-300 group-hover:scale-110" />,
              label: 'LinkedIn',
              value: 'linkedin.com/in/varshini-n-634062265',
              href: 'https://www.linkedin.com/in/varshini-n-634062265/',
            },
            {
              icon: <FaGithub className="text-gray-300 transition-transform duration-300 group-hover:scale-110" />,
              label: 'GitHub',
              value: 'github.com/Varshhhininandhu',
              href: 'https://github.com/Varshhhininandhu',
            },
            {
              icon: <FaMapMarkerAlt className="text-red-500 transition-transform duration-300 group-hover:scale-110" />,
              label: 'Location',
              value: 'Coimbatore, India',
              href: null,
            },
          ].map((item, idx) => (
            <p key={idx} className="flex items-center group hover:text-blue-400 transition duration-300">
              <span className="mr-4 text-2xl">{item.icon}</span>
              <span>
                <strong>{item.label}:</strong>&nbsp;
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-white hover:text-blue-400"
                  >
                    {item.value}
                  </a>
                ) : (
                  item.value
                )}
              </span>
            </p>
          ))}
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="backdrop-blur-lg bg-white/70 shadow-xl p-10 rounded-3xl space-y-6 border border-white/30"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 bg-white/60 text-black border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-400 transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 bg-white/60 text-black border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-400 transition"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="w-full p-4 bg-white/60 text-black border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-400 transition"
          ></textarea>
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold px-6 py-3 rounded-xl hover:scale-105 transform transition duration-300 shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
