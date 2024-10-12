import React, { useState, useEffect } from 'react';
import ConsoleSlide from "./console_slide";
import Transition from "../../../navigation/transition";
import Slides_development from './simple_version';

const Development = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showSlides, setShowSlides] = useState(true); // State to toggle between components
  const [isTransitioning, setIsTransitioning] = useState(false); // State for transition

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const offsetX = Math.max(-100, Math.min(50, (mousePosition.x - window.innerWidth / 2) / 45));
  const offsetY = Math.max(-100, Math.min(50, (mousePosition.y - window.innerHeight / 2) / 35));

  const toggleSlides = () => {
    setIsTransitioning(true); // Start transition
    setTimeout(() => {
      setShowSlides((prev) => !prev); // Toggle the component after transition duration
      setIsTransitioning(false); // End transition
    }, 300); // Match this duration with the CSS transition duration
  };

  return (
    <div>
      <div
        style={{
          transform: `translate(${offsetX}px, ${offsetY}px)`,
          transition: 'transform 0.4s ease-out, opacity 0.4s ease-out',
        }}
      >
        <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          {showSlides ? <ConsoleSlide /> : <Slides_development/>}
        </div>
      </div>
      <button
        className="p-[0.2%] px-[3%] bg-inherit rounded-[30px] text-green-600 border-[1px] border-green-600 transition duration-300 absolute bottom-[12%] left-1/2 transform -translate-x-1/2"
        onClick={toggleSlides}
      >
        Simple Version
      </button>
    </div>
  );
};

export default Transition(Development);
