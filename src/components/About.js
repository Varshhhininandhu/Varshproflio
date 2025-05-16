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
      scale: 1.07,
      boxShadow: '0 10px 30px rgba(168, 85, 247, 0.6)',
      transition: { duration: 0.3 },
    },
  };

  return (
    <section
      id="about" // ✅ Added for react-scroll
      className="relative min-h-screen text-white py-24 px-6 flex items-center justify-center overflow-hidden bg-black bg-gradient-to-br from-black via-[#2e026d]/70 to-[#0f172a]/80"
    >
      {/* Background Blobs */}
      <div className="absolute w-[600px] h-[600px] bg-purple-700 opacity-20 rounded-full blur-3xl top-[-100px] left-[-150px] animate-pulse z-0"></div>
      <div className="absolute w-[400px] h-[400px] bg-pink-600 opacity-20 rounded-full blur-2xl bottom-[-100px] right-[-100px] animate-pulse z-0"></div>

      <div className="relative z-10 container mx-auto max-w-6xl">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 leading-tight"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
            className="text-gray-300 text-xl md:text-2xl mt-6 leading-relaxed"
          >
            Driven by curiosity and passion for building, I craft scalable, user-friendly full-stack web solutions with a strong focus on performance and security.<br />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.4 }}
            className="text-pink-400 text-2xl md:text-3xl mt-8 font-semibold"
          >
            I am actively seeking exciting full-stack projects, internships, and placement opportunities to collaborate and grow my skills.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {/* Frontend Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-10 shadow-lg group transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-center gap-4 mb-6">
              <Code className="w-10 h-10 text-purple-400 group-hover:text-purple-300" />
              <h3 className="text-3xl font-semibold text-white group-hover:text-purple-200">
                Frontend Development
              </h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              Crafting responsive, dynamic, and beautiful interfaces with React.js, Tailwind CSS, and a strong focus on user experience.
            </p>
          </motion.div>

          {/* Backend Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            transition={{ delay: 0.2 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-10 shadow-lg group transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-center gap-4 mb-6">
              <Server className="w-10 h-10 text-blue-400 group-hover:text-blue-300" />
              <h3 className="text-3xl font-semibold text-white group-hover:text-blue-200">
                Backend Development
              </h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              Building reliable, scalable server-side applications using Java, Spring Boot, REST APIs, and integrating with databases.
            </p>
          </motion.div>

          {/* Java Programming Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            transition={{ delay: 0.4 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-10 shadow-lg group transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-center gap-4 mb-6">
              <BadgeCheck className="w-10 h-10 text-yellow-400 group-hover:text-yellow-300" />
              <h3 className="text-3xl font-semibold text-white group-hover:text-yellow-200">
                Java Programming
              </h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              Proficient in object-oriented programming, data structures, and building efficient logic using core and advanced Java concepts.
            </p>
          </motion.div>
        </div>

        {/* Motivational Quote */}
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="italic text-gray-400 text-lg md:text-xl max-w-2xl mx-auto border-l-4 border-pink-400 pl-6">
            "Strive not to be a success, but rather to be of value." – Albert Einstein
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
