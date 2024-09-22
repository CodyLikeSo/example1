import React, { useState, useEffect } from 'react';
import ConsoleSlide from "./console_slide";
import Transition from "../../../navigation/transition";
import ParticleEffect from '../../hero/particle';

const Development = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  return (
    <div>
      <div
        style={{
          transform: `translate(${offsetX}px, ${offsetY}px)`,
          transition: 'transform 0.4s ease-out, opacity 0.4s ease-out',
        }}
      >
        <div>
          <ConsoleSlide />
        </div>
      </div>
    </div>
  );
};

export default Transition(Development);
