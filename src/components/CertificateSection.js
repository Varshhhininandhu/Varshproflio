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
      className="relative w-full min-h-screen py-20 px-6 pb-32 bg-black bg-gradient-to-br from-black via-[#2e026d]/60 to-[#0f172a]/80 text-white"
    >
      {/* Background glowing blobs */}
      <div className="absolute w-[450px] h-[450px] bg-purple-700 opacity-15 rounded-full blur-3xl top-[-80px] left-[-110px] animate-pulse z-0"></div>
      <div className="absolute w-[300px] h-[300px] bg-pink-600 opacity-15 rounded-full blur-2xl bottom-[-80px] right-[-80px] animate-pulse z-0"></div>

      <div className="relative container mx-auto max-w-5xl z-10">
        <motion.h2
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 text-center mb-14"
        >
          Certificates
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="bg-white/5 p-7 rounded-2xl border border-white/10 backdrop-blur-md shadow-md hover:shadow-pink-700/30 hover:border-pink-600/50 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-4">
                <FileText
                  className="w-6 h-6 text-pink-400"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
                  <span className="text-xs text-gray-400">PDF File</span>
                </div>
              </div>
              <a
                href={`/${cert.file}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 bg-pink-600 hover:bg-pink-700 transition-colors text-white px-5 py-2 rounded-xl text-xs font-medium shadow-sm"
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
