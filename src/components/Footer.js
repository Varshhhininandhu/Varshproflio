import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-black bg-gradient-to-br from-black via-[#2e026d]/70 to-[#0f172a]/80 text-purple-200 py-6 mt-0 overflow-hidden">
      
      {/* Side Glowing Blobs (slightly smaller) */}
      <div className="absolute w-[300px] h-[300px] bg-purple-700 opacity-20 rounded-full blur-2xl left-[-100px] bottom-[-80px] animate-pulse z-0"></div>
      <div className="absolute w-[250px] h-[250px] bg-pink-500 opacity-20 rounded-full blur-2xl right-[-80px] top-[-60px] animate-pulse z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center space-y-2">
        <p className="text-base italic text-purple-300">
          Always improving. Always exploring.
        </p>
        <p className="text-sm text-purple-400">
          © {new Date().getFullYear()} Varshini Nandhakumar
        </p>
      </div>
    </footer>
  );
};

export default Footer;
