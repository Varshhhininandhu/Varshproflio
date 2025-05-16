import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import care1 from '../assets/care1.jpg.jpeg';
import care2 from '../assets/care2.jpg.jpeg';
import care3 from '../assets/care3.jpg.jpeg';
import food1 from '../assets/food1.jpg.jpeg';
import food2 from '../assets/food2.jpg.jpeg';
import food3 from '../assets/food3.jpg.jpeg';

const Projects = () => {
  const projectList = [
    {
      title: 'CareSphere – Smart Healthcare Appointment System',
      description:
        'Designed a full-stack web app for booking doctor appointments and managing emergency medical requests. Features include dashboards for patients and doctors, JWT-based authentication, appointment history, schedule filtering, and emergency request handling.',
      technologies: ['ReactJS', 'Spring Boot', 'MySQL', 'JWT'],
      images: [care1, care2, care3],
      github: 'https://github.com/Varshhhininandhu/CARESPHERE',
      demo: 'https://frontend-caresphere.onrender.com/',
    },
    {
      title: 'Food Paradise – Online Grocery Store',
      description:
        'Built a responsive online grocery platform using ReactJS, allowing users to browse, search, and order products. The project features reusable components, effective routing, state management with hooks, and a mobile-friendly layout using CSS Grid and Flexbox.',
      technologies: ['ReactJS', 'CSS Grid', 'Flexbox'],
      images: [food1, food2, food3],
      github: 'https://github.com/Varshhhininandhu/GroceryStore',
      demo: 'https://food-paradise-l630.onrender.com/',
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    cssEase: 'ease-in-out',
    fade: false,
  };

  return (
    <section
      id="projects"
      className="relative w-full min-h-screen bg-black bg-gradient-to-br from-black via-[#2e026d]/70 to-[#0f172a]/80 py-14 px-6 sm:px-10 md:px-14 lg:px-20 overflow-hidden"
    >
      {/* Background Blobs */}
      <div className="absolute w-[600px] h-[600px] bg-purple-700 opacity-20 rounded-full blur-3xl top-[-100px] left-[-150px] animate-pulse z-0"></div>
      <div className="absolute w-[400px] h-[400px] bg-pink-600 opacity-20 rounded-full blur-2xl bottom-[-100px] right-[-100px] animate-pulse z-0"></div>

      <h2 className="text-4xl md:text-5xl font-playfair font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-500 drop-shadow-lg mb-12 relative z-10">
        🚀 My Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto relative z-10">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-[#1a1a2e] via-[#1f1f3a] to-[#1c1c2e] border border-white/10 text-white p-8 rounded-3xl shadow-xl ring-1 ring-purple-900/40 hover:ring-pink-500 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="mb-6 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-transform duration-500 transform hover:scale-105">
              <Slider {...sliderSettings}>
                {project.images.map((img, i) => (
                  <div key={i} className="relative group">
                    <img
                      src={img}
                      alt={`Slide ${i + 1}`}
                      className="w-full h-56 object-cover rounded-xl group-hover:brightness-90 transition duration-300"
                    />
                  </div>
                ))}
              </Slider>
            </div>

            <div className="mb-4">
              <h3 className="text-2xl font-semibold text-pink-300 mb-2 font-playfair">
                {project.title}
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="mb-5 text-sm text-purple-200">
              <span className="font-semibold text-purple-400">Technologies:</span>{' '}
              {project.technologies.join(', ')}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md transition-transform transform hover:scale-105"
              >
                Live Demo 🌐
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md transition-transform transform hover:scale-105"
              >
                GitHub <FaExternalLinkAlt className="text-xs" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
