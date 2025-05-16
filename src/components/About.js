import React from 'react';
import { Code, Server, BadgeCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutMeSection = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeInOut' },
    },
    hover: {
      scale: 1.05,
      boxShadow: '0 8px 24px rgba(168, 85, 247, 0.5)',
      transition: { duration: 0.3 },
    },
  };

  return (
    <section
      id="about"
      className="relative min-h-[92vh] text-white py-16 px-4 flex items-center justify-center overflow-hidden bg-black bg-gradient-to-br from-black via-[#2e026d]/70 to-[#0f172a]/80"
    >
      {/* Background Blobs */}
      <div className="absolute w-[440px] h-[440px] bg-purple-700 opacity-20 rounded-full blur-2xl top-[-80px] left-[-120px] animate-pulse z-0"></div>
      <div className="absolute w-[320px] h-[320px] bg-pink-600 opacity-20 rounded-full blur-xl bottom-[-80px] right-[-90px] animate-pulse z-0"></div>

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {/* Title and Description */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"
          >
            About Me
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-300 text-sm sm:text-base md:text-lg mt-4 leading-relaxed"
          >
            Driven by curiosity and passion for building, I craft scalable, user-friendly full-stack web solutions with a strong focus on performance and security.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-pink-400 text-base sm:text-lg md:text-xl mt-6 font-medium"
          >
            I’m seeking full-stack projects, internships, and placement opportunities to grow my skills through collaboration.
          </motion.p>
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 px-2">
          {/* Frontend */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg group transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-3">
              <Code className="w-7 h-7 text-purple-400 group-hover:text-purple-300" />
              <h3 className="text-lg font-semibold text-white group-hover:text-purple-200">
                Frontend Development
              </h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Crafting responsive and elegant UIs using React.js, Tailwind CSS, with attention to accessibility and user experience.
            </p>
          </motion.div>

          {/* Backend */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            transition={{ delay: 0.2 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg group transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-3">
              <Server className="w-7 h-7 text-blue-400 group-hover:text-blue-300" />
              <h3 className="text-lg font-semibold text-white group-hover:text-blue-200">
                Backend Development
              </h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Building reliable and scalable server-side systems using Java, Spring Boot, REST APIs, and secure data handling.
            </p>
          </motion.div>

          {/* Java */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            transition={{ delay: 0.4 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg group transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-3">
              <BadgeCheck className="w-7 h-7 text-yellow-400 group-hover:text-yellow-300" />
              <h3 className="text-lg font-semibold text-white group-hover:text-yellow-200">
                Java Programming
              </h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Skilled in object-oriented programming, data structures, algorithms, and building optimized Java applications.
            </p>
          </motion.div>
        </div>

        {/* Quote */}
        <div className="text-center max-w-2xl mx-auto">
          <blockquote className="italic text-gray-400 text-sm sm:text-base md:text-lg border-l-4 border-pink-400 pl-6">
            "Strive not to be a success, but rather to be of value." – Albert Einstein
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
