import React from 'react';
import { FaJava, FaReact, FaDocker, FaGitAlt, FaAws } from 'react-icons/fa';
import { SiMysql, SiSpringboot, SiTailwindcss, SiPostman } from 'react-icons/si';
import { motion } from 'framer-motion';

const skillsData = [
  {
    title: "Programming Languages 🧑‍💻",
    items: [
      { skill: "Java", icon: <FaJava className="text-2xl text-yellow-600" /> },
      { skill: "C++", icon: <FaReact className="text-2xl text-blue-500" /> },
      { skill: "SQL", icon: <SiMysql className="text-2xl text-blue-700" /> },
      { skill: "DSA", icon: <FaReact className="text-2xl text-green-400" /> },
    ],
  },
  {
    title: "Web Technologies 🌐",
    items: [
      { skill: "HTML, CSS, JavaScript", icon: <FaReact className="text-2xl text-blue-600" /> },
      { skill: "ReactJS, REST APIs", icon: <FaReact className="text-2xl text-cyan-500" /> },
      { skill: "Tailwind CSS, Bootstrap", icon: <SiTailwindcss className="text-2xl text-teal-400" /> },
    ],
  },
  {
    title: "Frameworks & Tools 🛠️",
    items: [
      { skill: "Spring Boot", icon: <SiSpringboot className="text-2xl text-green-600" /> },
      { skill: "Git & GitHub", icon: <FaGitAlt className="text-2xl text-orange-600" /> },
      { skill: "Docker (Basics)", icon: <FaDocker className="text-2xl text-cyan-600" /> },
      { skill: "Postman", icon: <SiPostman className="text-2xl text-orange-500" /> },
    ],
  },
  {
    title: "Databases & Cloud ☁️",
    items: [
      { skill: "MySQL", icon: <SiMysql className="text-2xl text-blue-700" /> },
      { skill: "AWS (EC2, S3)", icon: <FaAws className="text-2xl text-orange-400" /> },
    ],
  },
  {
    title: "Soft Skills 💼",
    items: [
      { skill: "Problem-solving", icon: <FaReact className="text-2xl text-green-500" /> },
      { skill: "Critical Thinking", icon: <FaReact className="text-2xl text-purple-600" /> },
      { skill: "Team Collaboration", icon: <FaReact className="text-2xl text-blue-500" /> },
      { skill: "Adaptability", icon: <FaReact className="text-2xl text-yellow-500" /> },
    ],
  },
  {
    title: "Languages Known 🌍",
    items: [
      { skill: "English", icon: <FaReact className="text-2xl text-gray-600" /> },
      { skill: "Tamil", icon: <FaReact className="text-2xl text-orange-600" /> },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full min-h-screen py-8 px-8 sm:px-12 md:px-16 lg:px-24 bg-black bg-gradient-to-br from-black via-[#2e026d]/70 to-[#0f172a]/80"
    >
      {/* Glowing Background Blobs */}
      <div className="absolute w-[600px] h-[600px] bg-purple-700 opacity-20 rounded-full blur-3xl top-[-100px] left-[-150px] animate-pulse z-0"></div>
      <div className="absolute w-[400px] h-[400px] bg-pink-600 opacity-20 rounded-full blur-2xl bottom-[-100px] right-[-100px] animate-pulse z-0"></div>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="text-3xl md:text-5xl font-playfair font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-500 drop-shadow-lg mb-8"
      >
        💡 My Skills
      </motion.h2>

      <div className="max-w-8xl mx-auto flex flex-wrap justify-center gap-x-10 gap-y-6 relative z-10">
        {skillsData.map((skill, idx) => (
          <div
            key={idx}
            className="w-full sm:w-[calc(50%-1.5rem)] md:w-[calc(33%-1.5rem)] lg:w-[calc(25%-1.5rem)] bg-gradient-to-br from-[#2e2e3e] via-[#3a2d57] to-[#2c2e4b] text-white rounded-xl shadow-md p-6 border border-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-pink-700/50 hover:ring-1 hover:ring-pink-600/60"
          >
            <h3 className="text-2xl font-semibold mb-4 text-center text-pink-300 font-playfair">
              {skill.title}
            </h3>
            <ul className="space-y-3">
              {skill.items.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-4 text-base text-gray-300 hover:text-white transition"
                >
                  <div className="w-12 h-12 flex justify-center items-center rounded-full bg-purple-900/20 shadow-sm">
                    {item.icon}
                  </div>
                  <span className="font-medium">{item.skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
