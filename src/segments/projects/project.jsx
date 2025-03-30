import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { GrArchlinux } from "react-icons/gr";

import stars2 from '../../assets/stars2.png';

const projects = [
  { 
    id: 1, 
    title: 'Dream-Game', 
    content: 'Dream game what I built with my own team', 
    link: '/project1', 
    image: 'src/assets/chel.jpg',
    tags: ['Godot', 'C#', 'Design'] 
  },
  { 
    id: 2, 
    title: 'Gym-bro', 
    content: 'Telegram bot for fitness', 
    link: '/project2', 
    image: 'src/assets/gymbro.jpg',
    tags: ['Python','PostgreSQL'] 
  },
  { 
    id: 3, 
    title: 'This site', 
    content: 'My portfolio site', 
    link: '/project3', 
    image: 'src/assets/monkey.jpg',
    tags: ['React', 'Node-js','Tailwind'] 
  },
  // Additional projects can be added here
];

export const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleNext = () => {
    if (currentIndex + itemsPerPage < projects.length) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(currentIndex + itemsPerPage);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const handlePrev = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(currentIndex - itemsPerPage);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const currentProjects = projects.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div>
      <div
        className="absolute inset-0 z-0 rounded-[30px] opacity-95 hidden md:block"
        style={{
          backgroundImage: `url(${stars2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
      <div className="flex md:flex-col flex-col items-center h-screen overflow-hidden md:py-[12%] lg:py-0 py-0">
        <div className={`flex flex-col md:flex-row justify-center items-stretch w-full h-5/6 md:h-[70%] lg:h-[55%] xl:h-[57%] transition-opacity duration-[300ms] ${isTransitioning ? 'opacity-0' : 'opacity-100'} overflow-hidden`}>
          {currentProjects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col h-full w-full md:w-1/3 p-4 py-4 md:py-4 transition-transform duration-300 relative ${hoveredIndex === index ? 'transform scale-105' : ''}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Link 
                to={project.link} // Use Link to navigate
                className={`md:bg-[#242424] rounded-[15px] shadow-[0_0px_10px_3px_rgba(0,0,0,0.3)] md:p-0 xl:p-0 flex-grow no-underline transition-all duration-300 border-[1px] ${hoveredIndex === index ? 'border-green-600' : 'border-transparent'}`}
              >
                <div className='md:flex-row flex-col'>
                  <div className="flex md:justify-center mb-0 md:mb-4 xl:p-6 md:p-2">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="justify-start size-[33%] opacity-80 md:size-[100%] md:h-auto md:w-full hidden md:block rounded-[15px]  object-contain" 
                    />
                  </div>
                  <h2 className="md:text-xl text-2xl flex text-green-500 py-1 justify-center md:py-0 md:px-0 md:text-center md:block font-rubik font-bold">{project.title}</h2>
                  <p className="text-gray-300 md:text-left md:hidden xl:block justify-center flex px-[15%] md:px-4 font-thin font-sans">{project.content}</p>
                  <div className="absolute bottom-6 md:left-8 right-8 flex flex-row lg:flex-col md:flex-col xl:flex-row">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="bg-inherit border-[1px] border-green-600 text-green-600 text-[70%] md:text-[70%] font-bold py-1 px-2 rounded-[6px] mb-1 md:mb-0 md:mr-2">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        {/* Uncomment if you want pagination buttons */}
        {/* <div className="mt-12 space-x-12">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="bg-inherit border-[1px] border-green-600 rounded-[12px] px-4 py-[2%] disabled:opacity-50 transition-opacity duration-300"
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex + itemsPerPage >= projects.length}
            className="bg-inherit border-[1px] border-green-600 rounded-[12px] px-4 py-[2%] disabled:opacity-50 transition-opacity duration-300"
          >
            Next
          </button>
        </div> */}
      </div>
    </div>
  );
};
