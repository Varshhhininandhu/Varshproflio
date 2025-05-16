import React from 'react';
import {
  FaJava,
  FaDocker,
  FaGitAlt,
  FaAws,
} from 'react-icons/fa';
import {
  SiMysql,
  SiSpringboot,
  SiTailwindcss,
  SiPostman,
  SiCplusplus,
  SiJavascript,
} from 'react-icons/si';
import {
  GiBrain,
  GiTeamIdea,
  GiTalk,
  GiFlexibleStar,
} from 'react-icons/gi';
import { motion } from 'framer-motion';

const skillsData = [
  {
    title: 'Programming Languages 🧑‍💻',
    items: [
      { skill: 'Java', icon: <FaJava className="text-2xl text-yellow-600" /> },
      { skill: 'C++', icon: <SiCplusplus className="text-2xl text-blue-500" /> },
      { skill: 'SQL', icon: <SiMysql className="text-2xl text-blue-700" /> },
      { skill: 'DSA', icon: <GiBrain className="text-2xl text-green-400" /> },
    ],
  },
  {
    title: 'Web Technologies 🌐',
    items: [
      { skill: 'HTML, CSS, JavaScript', icon: <SiJavascript className="text-2xl text-yellow-400" /> },
      { skill: 'ReactJS, REST APIs', icon: <SiJavascript className="text-2xl text-blue-500" /> },
      { skill: 'Tailwind CSS, Bootstrap', icon: <SiTailwindcss className="text-2xl text-teal-400" /> },
    ],
  },
  {
    title: 'Frameworks & Tools 🛠️',
    items: [
      { skill: 'Spring Boot', icon: <SiSpringboot className="text-2xl text-green-600" /> },
      { skill: 'Git & GitHub', icon: <FaGitAlt className="text-2xl text-orange-600" /> },
      { skill: 'Docker (Basics)', icon: <FaDocker className="text-2xl text-cyan-600" /> },
      { skill: 'Postman', icon: <SiPostman className="text-2xl text-orange-500" /> },
    ],
  },
  {
    title: 'Databases & Cloud ☁️',
    items: [
      { skill: 'MySQL', icon: <SiMysql className="text-2xl text-blue-700" /> },
      { skill: 'AWS (EC2, S3)', icon: <FaAws className="text-2xl text-orange-400" /> },
    ],
  },
  {
    title: 'Soft Skills 💼',
    items: [
      { skill: 'Problem-solving', icon: <GiBrain className="text-2xl text-green-500" /> },
      { skill: 'Critical Thinking', icon: <GiBrain className="text-2xl text-purple-600" /> },
      { skill: 'Team Collaboration', icon: <GiTeamIdea className="text-2xl text-blue-500" /> },
      { skill: 'Adaptability', icon: <GiFlexibleStar className="text-2xl text-yellow-500" /> },
    ],
  },
  {
    title: 'Languages Known 🌍',
    items: [
      { skill: 'English', icon: <GiTalk className="text-2xl text-gray-400" /> },
      { skill: 'Tamil', icon: <GiTalk className="text-2xl text-orange-600" /> },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full py-16 px-4 sm:px-8 lg:px-16 bg-black bg-gradient-to-br from-black via-[#2e026d]/70 to-[#0f172a]/80"
    >
      {/* Background Blobs */}
      <div className="absolute w-[500px] h-[500px] bg-purple-700 opacity-20 rounded-full blur-3xl top-[-80px] left-[-120px] animate-pulse z-0"></div>
      <div className="absolute w-[350px] h-[350px] bg-pink-600 opacity-20 rounded-full blur-2xl bottom-[-80px] right-[-80px] animate-pulse z-0"></div>

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-500 mb-8"
      >
        💡 My Skills
      </motion.h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {skillsData.map((group, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="bg-[#1e1e2f] rounded-xl p-4 shadow-md border border-white/10 hover:shadow-pink-500/30 hover:scale-[1.015] transition-transform duration-300"
          >
            <h3 className="text-lg font-semibold text-pink-300 mb-3 text-center">
              {group.title}
            </h3>
            <ul className="space-y-2">
              {group.items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition text-sm"
                >
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-900/20">
                    {item.icon}
                  </div>
                  <span className="font-medium">{item.skill}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
