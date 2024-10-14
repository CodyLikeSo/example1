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

  // Movement speed for the main component
  const offsetX = Math.max(-100, Math.min(50, (mousePosition.x - window.innerWidth / 2) / 45));
  const offsetY = Math.max(-100, Math.min(50, (mousePosition.y - window.innerHeight / 2) / 35));

  // Movement speed for the button (adjust these factors to change speed)
  const buttonSpeedFactor = 0.5; // Slower than the main component
  const buttonOffsetX = Math.max(-100, Math.min(50, (mousePosition.x - window.innerWidth / 2) * buttonSpeedFactor / 45));
  const buttonOffsetY = Math.max(-100, Math.min(50, (mousePosition.y - window.innerHeight / 2) * buttonSpeedFactor / 35));

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
        style={{
          transform: `translate(${buttonOffsetX}px, ${buttonOffsetY}px)`,
          transition: 'transform 0.4s ease-out', // Adjust transition if needed
        }}
        className="p-[0.2%] shadow-[0_0px_20px_4px_rgba(0,0,0,0.3)] bg-inherit rounded-[30px] text-green-600 border-[1px] border-green-600 transition duration-300 absolute bottom-[3%] transform inset-x-1/3"
        onClick={toggleSlides}
      >
        Change Version
      </button>
    </div>
  );
};

export default Transition(Development);
