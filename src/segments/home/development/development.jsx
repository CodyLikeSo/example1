import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ConsoleSlide from "./console_slide";
import Transition from "../../../navigation/transition";
// import lines from '/home/cody/Cody/Programming/React/example1/example1/src/assets/lines.png';
// import stars from '/home/cody/Cody/Programming/React/example1/example1/src/assets/stars2.png';

import lines from '/home/cody/Cody/Programming/React/my_site/example1/src/assets/lines.png';
import stars from '/home/cody/Cody/Programming/React/my_site/example1/src/assets/stars2.png';


const Development = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        navigate("/"); // Replace with your desired route
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Cleanup the event listeners on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [navigate]);

  // Movement speed for the main component
  const offsetX = Math.max(-100, Math.min(50, (mousePosition.x - window.innerWidth / 2) / 45));
  const offsetY = Math.max(-100, Math.min(50, (mousePosition.y - window.innerHeight / 2) / 35));

  // Movement speed for the button
  const buttonSpeedFactor = 0.5;
  const buttonOffsetX = Math.max(-100, Math.min(50, (mousePosition.x - window.innerWidth / 2) * buttonSpeedFactor / 45));
  const buttonOffsetY = Math.max(-100, Math.min(50, (mousePosition.y - window.innerHeight / 2) * buttonSpeedFactor / 35));

  const handleButtonClick = () => {
    navigate("/develop/pages");
  };

  return (
    <div>

            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: `url(${lines})`,
                backgroundSize: '150%', // Set to 200% to make it 2x size
                backgroundPosition: 'center 33%',
                backgroundRepeat: 'no-repeat',
              }}
            ></div>
      <div
        style={{
          transform: `translate(${offsetX}px, ${offsetY}px)`,
          transition: 'transform 0.4s ease-out, opacity 0.4s ease-out',
        }}
      >
        <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          <ConsoleSlide />
                          <div
                              className='absolute text-[#d9d9d9] md:top-[8%] top-[2%] md:left-[4%] left-[2%] md:text-[100%] text-[50%] border-green-600 border-[1px] px-1 md:p-3 rounded-[15px] md:shadow-[0_0px_40px_10px_rgba(0,0,0,0.5)] cursor-pointer'
                              onClick={() => navigate('/')}
                          >
                              Back to main
                          </div>
        </div>
      </div>
      <button
        onClick={handleButtonClick}
        style={{
          transform: `translate(${buttonOffsetX}px, ${buttonOffsetY}px)`,
          transition: 'transform 0.4s ease-out',
        }}
        className="p-[0.2%] shadow-[0_0px_20px_4px_rgba(0,0,0,0.3)] bg-transparent rounded-[30px] text-green-600 border-[1px] border-green-600 transition duration-300 absolute bottom-[3%] transform inset-x-1/3"
      >
        Change Version
      </button>
    </div>
  );
};

export default Transition(Development);
