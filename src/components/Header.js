import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-black via-[#2e026d]/70 to-[#0f172a]/80 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img
            src="/logome.jpeg"
            alt="Logo"
            className="w-12 h-12 object-contain"
          />
        </div>

        <nav className="space-x-4 text-white font-semibold text-sm">
          <Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-purple-400">
            Home
          </Link>
          <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-purple-400">
            About
          </Link>
          <Link to="skills" smooth={true} duration={500} className="cursor-pointer hover:text-purple-400">
            Skills
          </Link>
          <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-purple-400">
            Projects
          </Link>
          <Link to="certificates" smooth={true} duration={500} className="cursor-pointer hover:text-purple-400">
            Certificates
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
