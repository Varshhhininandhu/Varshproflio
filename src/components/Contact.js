import React, { useState } from 'react';
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const newErrors = {};
    if (!name) newErrors.name = true;
    if (!email || !emailRegex.test(email)) newErrors.email = true;
    if (!message) newErrors.message = true;

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      toast.error('Please fill all fields correctly.');
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
        setTimeout(() => setFormData({ name: '', email: '', message: '' }), 1500);
      })
      .catch((err) => {
        toast.error('Failed to send message. Please try again later.');
        console.error('Email error:', err);
      });
  };

  const contactDetails = [
    {
      icon: <FaEnvelope aria-hidden="true" />,
      label: 'Email',
      value: 'varshhunique@gmail.com',
      href: 'mailto:varshhunique@gmail.com',
      colorClass: 'text-blue-500',
    },
    {
      icon: <FaPhoneAlt aria-hidden="true" />,
      label: 'Phone',
      value: '+91 7639735373',
      href: 'tel:+917639735373',
      colorClass: 'text-green-400',
    },
    {
      icon: <FaLinkedin aria-hidden="true" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/varshini-n-634062265',
      href: 'https://www.linkedin.com/in/varshini-n-634062265/',
      colorClass: 'text-blue-600',
    },
    {
      icon: <FaGithub aria-hidden="true" />,
      label: 'GitHub',
      value: 'github.com/Varshhhininandhu',
      href: 'https://github.com/Varshhhininandhu',
      colorClass: 'text-gray-300',
    },
    {
      icon: <FaMapMarkerAlt aria-hidden="true" />,
      label: 'Location',
      value: 'Coimbatore, India',
      href: null,
      colorClass: 'text-red-500',
    },
  ];

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen text-white py-16 px-6 lg:px-20 overflow-hidden bg-black bg-gradient-to-br from-black via-[#2e026d]/70 to-[#0f172a]/80"
    >
      <ToastContainer position="top-center" autoClose={4000} />

      {/* Background glowing blobs */}
      <div className="absolute w-[600px] h-[600px] bg-purple-700 opacity-20 rounded-full blur-3xl top-[-100px] left-[-150px] animate-pulse z-0"></div>
      <div className="absolute w-[400px] h-[400px] bg-pink-600 opacity-20 rounded-full blur-2xl bottom-[-100px] right-[-100px] animate-pulse z-0"></div>

      <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-500 drop-shadow-lg mb-14">
        📬 Get in Touch
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto z-10 relative">
        {/* Contact Info */}
        <div className="space-y-8 text-white text-lg font-medium">
          {contactDetails.map((item, idx) => (
            <p
              key={idx}
              className={`flex items-center group hover:text-blue-400 transition duration-300 cursor-pointer`}
            >
              <span className={`mr-4 text-2xl ${item.colorClass} group-hover:scale-110 transform transition-transform duration-300`}>
                {item.icon}
              </span>
              <span>
                <strong>{item.label}:</strong>&nbsp;
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-white hover:text-blue-400"
                    aria-label={`Link to ${item.label}`}
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
          className="backdrop-blur-md bg-white/60 shadow-xl p-8 rounded-3xl space-y-6 border border-white/30"
          noValidate
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full p-4 bg-white/60 text-black border rounded-xl focus:outline-none focus:ring-4 transition
              ${errors.name ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-blue-400'}`}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-4 bg-white/60 text-black border rounded-xl focus:outline-none focus:ring-4 transition
              ${errors.email ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-blue-400'}`}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className={`w-full p-4 bg-white/60 text-black border rounded-xl focus:outline-none focus:ring-4 transition
              ${errors.message ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-blue-400'}`}
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
