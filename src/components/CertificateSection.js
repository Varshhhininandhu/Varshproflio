import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const certificates = [
  {
    title: 'ServiceNow Certificate',
    file: 'servicenow certifi.pdf',
  },
  {
    title: 'NPTEL Course - 1',
    file: 'varsh nptel1.pdf',
  },
  {
    title: 'NPTEL Course - 2',
    file: 'varsh nptel 2.pdf',
  },
  {
    title: 'Google Cybersecurity',
    file: 'varshini(GoogleCyberSecurity).pdf',
  },
  {
    title: 'Oracle Certificate',
    file: 'oracle 1.pdf',
  },
  {
    title: 'Infosys Certification',
    file: 'infosys.pdf',
  },
];

const CertificateSection = () => {
  return (
    <section
      id="certificates"
      className="relative w-full min-h-screen py-28 px-6 bg-black bg-gradient-to-br from-black via-[#2e026d]/70 to-[#0f172a]/80 text-white"
    >
      {/* Background glowing blobs */}
      <div className="absolute w-[600px] h-[600px] bg-purple-700 opacity-20 rounded-full blur-3xl top-[-100px] left-[-150px] animate-pulse z-0"></div>
      <div className="absolute w-[400px] h-[400px] bg-pink-600 opacity-20 rounded-full blur-2xl bottom-[-100px] right-[-100px] animate-pulse z-0"></div>

      <div className="relative container mx-auto max-w-7xl z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 text-center mb-20"
        >
          Certificates
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-md shadow-md hover:shadow-pink-700/40 hover:border-pink-600/60 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <FileText className="w-8 h-8 text-pink-400" />
                <div>
                  <h3 className="text-xl font-semibold text-white">{cert.title}</h3>
                  <span className="text-xs text-gray-400">PDF File</span>
                </div>
              </div>
              <a
                href={`/${cert.file}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-pink-600 hover:bg-pink-700 transition-colors text-white px-5 py-2.5 rounded-xl text-sm font-medium"
              >
                View Certificate
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;
