import React, { useState } from 'react';
import monkey from '/home/cody/Cody/Programming/React/example1/example1/src/assets/monkey.jpg';
import monkey2 from '/home/cody/Cody/Programming/React/example1/example1/src/assets/wolf.jpg';


import { GrArchlinux } from "react-icons/gr";


const projects = [
  { 
    id: 1, 
    title: 'Dream-Game', 
    content: 'Dream game what i build with my own team using Godot and Bevy ', 
    link: '/project1', 
    image: monkey,
    tags: ['Godot', 'C#', 'Design'] 
  },
  { 
    id: 2, 
    title: 'Gym-bro', 
    content: 'Telegram bot for fitness', 
    link: '/project2', 
    image: monkey,
    tags: ['Python','PostgreSQL'] 
  },
  { 
    id: 3, 
    title: 'This site', 
    content: 'My portfolio site', 
    link: '/project3', 
    image: monkey,
    tags: ['React', 'Node-js','Tailwind'] 
  },
  { 
    id: 4, 
    title: 'Project 4', 
    content: 'Content Project 4', 
    link: '/project4', 
    image: monkey,
    tags: ['Rust', 'React'] 
  },
  { 
    id: 5, 
    title: 'Project 5', 
    content: 'Content Project 5', 
    link: '/project5', 
    image: monkey,
    tags: ['Python'] 
  },
  { 
    id: 6, 
    title: 'Project 6', 
    content: 'Content Project 6', 
    link: '/project6', 
    image: monkey,
    tags: ['React', 'Python'] 
  },
];

export const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null); // Для отслеживания наведения

  const handleNext = () => {
    if (currentIndex + itemsPerPage < projects.length) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(currentIndex + itemsPerPage);
        setIsTransitioning(false);
      }, 300); // Длительность анимации
    }
  };

  const handlePrev = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(currentIndex - itemsPerPage);
        setIsTransitioning(false);
      }, 300); // Длительность анимации
    }
  };

  const currentProjects = projects.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="flex md:flex-col flex-col items-center h-screen overflow-hidden md:py-[12%] lg:py-0 py-0">
      <div className={`flex flex-col md:flex-row justify-center items-stretch w-full h-5/6  md:h-[50%] lg:h-[45%] xl:h-[55%]  transition-opacity duration-[300ms] ${isTransitioning ? 'opacity-0' : 'opacity-100'} overflow-y-auto`}>
        {currentProjects.map((project, index) => (
          <div
            key={project.id}
            className={`flex flex-col h-full w-full md:w-1/3 p-4 py-4 md:py-4 transition-transform duration-300 relative ${hoveredIndex === index ? 'transform scale-105' : ''}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <a 
              href={project.link} 
              className={`md:bg-[#242424] bg-[#16A34A] rounded-[15px] shadow-[0_0px_10px_3px_rgba(0,0,0,0.3)] md:p-0 xl:p-0 flex-grow no-underline transition-all duration-300 border-[1px] ${hoveredIndex === index ? 'border-green-600' : 'border-transparent'}`}
            >
              <div className='md:flex-row  flex-col'>
                <div className="flex md:justify-center mb-0 md:mb-4">
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="justify-start size-[33%] md:size-[100%] md:h-auto md:w-full hidden md:block rounded-[15px] border-[2px] border-green-900 object-contain" 
                  />
                </div>
                <h2 className="md:text-xl text-2xl flex font-bold text-white py-1 justify-center md:py-0 md:px-0 md:text-center md:block">{project.title}</h2>
                <p className="text-gray-300 md:text-center md:hidden xl:block justify-center flex px-[15%] md:px-0">{project.content}</p>

                <div className="absolute bottom-6 md:left-8 right-8 flex flex-row lg:flex-col md:flex-col  xl:flex-row">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="bg-inherit border-[1px] border-green-600 text-green-600 text-[70%] md:text-[70%]  font-bold py-1 px-2 rounded-[6px] mb-1 md:mb-0 md:mr-2">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
      <div className="mt-12 space-x-12">
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
      </div>
    </div>
  );
}  