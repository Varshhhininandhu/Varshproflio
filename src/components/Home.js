import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import varshImg from '../assets/varsh.jpg';

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-[98vh] text-white py-20 px-6 flex items-center justify-center overflow-hidden bg-black bg-gradient-to-br from-black via-[#2e026d]/70 to-[#0f172a]/80"
    >
      {/* Background blobs */}
      <div className="absolute w-[480px] h-[480px] bg-purple-700 opacity-20 rounded-full blur-2xl top-[-100px] left-[-120px] animate-pulse z-0"></div>
      <div className="absolute w-[360px] h-[360px] bg-pink-600 opacity-20 rounded-full blur-xl bottom-[-90px] right-[-80px] animate-pulse z-0"></div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl w-full flex flex-col md:flex-row-reverse items-center gap-12 text-center md:text-left">
        {/* Profile Image */}
        <motion.img
          src={varshImg}
          alt="Varshini"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-40 sm:w-56 md:w-64 lg:w-[380px] h-auto rounded-2xl object-cover shadow-2xl border-4 border-purple-500"
        />

        {/* Text Section */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-6"
          >
            I’m{' '}
            <span className="text-white">
              <Typewriter
                words={['Varshini Nandhakumar, a Full Stack Developer']}
                loop={1}
                cursor={false}
                typeSpeed={100}
                deleteSpeed={0}
                delaySpeed={1000}
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-300 text-base sm:text-lg md:text-xl max-w-xl mb-6"
          >
            I'm a Computer Science student passionate about building secure and scalable applications using React, Spring Boot, and cybersecurity best practices.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <a
              href="/Varshini Nandhakumar.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#a855f7] hover:bg-[#9333ea] text-white rounded-xl font-semibold shadow-lg transition duration-300"
            >
              Resume
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-[#a855f7] hover:bg-[#9333ea] text-white rounded-xl font-semibold shadow-lg transition duration-300"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
