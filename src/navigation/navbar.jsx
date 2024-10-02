import React, { useState, useEffect } from 'react';
import { Home } from '../segments/home/home';
import { Project } from '../segments/projects/project';
import { Llama } from '../segments/llama/llama';
import { Stack } from '../segments/stack/stack';
import { About } from '../segments/about/about';
import { Hero } from '../segments/hero/hero';

import Transition from './transition';

import mountain from '/home/cody/Cody/Programming/React/example1/src/assets/Mountain_fix.png';

const InteractiveBars = () => {
  const [activeScreen, setActiveScreen] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const bars = [
    { id: 1, name: 'About', component: <About /> },
    { id: 2, name: 'Experience', component: <Home /> },
    { id: 3, name: 'Project', component: <Project /> },
    { id: 4, name: 'Stack', component: <Stack /> },
    { id: 5, name: 'Llama', component: <Llama /> },
  ];

  const handleScroll = (event) => {
    setActiveScreen((prev) => {
      if (event.deltaY > 0) {
        return prev < bars.length ? (prev === null ? 1 : prev + 1) : prev;
      } else {
        return prev > 1 ? prev - 1 : null;
      }
    });
  };

  const handleKeyDown = (event) => {
    setActiveScreen((prev) => {
      if (event.key === 'ArrowDown') {
        return prev < bars.length ? (prev === null ? 1 : prev + 1) : prev;
      } else if (event.key === 'ArrowUp') {
        return prev > 1 ? prev - 1 : null;
      }
      return prev;
    });
  };

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="flex h-screen relative overflow-hidden">
      <div className="flex flex-col justify-center absolute left-0 top-0 bottom-0">
        {bars.map((bar) => {
          const offsetX = Math.max(0, Math.min(20, (mousePosition.x - window.innerWidth / 2) / 60));
          const offsetY = Math.max(-30, Math.min(30, (mousePosition.y - window.innerHeight / 2) / 30));

          return (
            <div
              key={bar.id}
              className="relative flex items-center m-5 cursor-pointer"
              style={{
                transform: `translate(${offsetX}px, ${offsetY}px)`,
                transition: 'transform 1.7s ease-out',
              }}
            >
              <div
                className="absolute inset-0 w-10 h-10 -m-2"
                onMouseEnter={() => setActiveScreen(bar.id)}
              />
              <div
                className="w-6 h-[2px] rounded-[0.7px] bg-green-600 transition-transform duration-300"
                style={{
                  transformOrigin: 'left',
                  transform: activeScreen === bar.id ? 'scaleX(3.0)' : 'scaleX(1)',
                }}
              />
              <span
                className={`absolute left-24 text-[#D9D9D9] hidden lg:block transition-all duration-700 transform ${
                  activeScreen === bar.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
              >
                {bar.name}
              </span>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center items-center w-full overflow-hidden">
        {bars.map((bar) => {
          const offsetX = Math.max(-100, Math.min(50, (mousePosition.x - window.innerWidth / 2) / 45));
          const offsetY = Math.max(-100, Math.min(50, (mousePosition.y - window.innerHeight / 2) / 35));

          return (
            <div
              key={bar.id}
              className={`absolute w-3/5 h-3/5 p-4 rounded-[30px] shadow-[0_0px_40px_10px_rgba(0,0,0,0.5)] text-[#D9D9D9] transition-all duration-700 ease-in-out ${
                activeScreen === bar.id ? 'opacity-100 transform scale-100' : 'opacity-0 transform scale-90 pointer-events-none'
              }`}
              style={{
                transform: `translate(${offsetX}px, ${offsetY}px)`,
                transition: 'transform 0.4s ease-out, opacity 0.4s ease-out',
                background: 'linear-gradient(to bottom, #2a2a2a 30%, #242424 70%)',
              }}
            >
              {bar.component}
            </div>
          );
        })}

        <div
          className={`absolute w-3/5 h-3/5 p-4 rounded-[30px] shadow-[0_0px_40px_10px_rgba(0,0,0,0.5)] text-[#D9D9D9] transition-all duration-700 ease-in-out ${
            activeScreen === null ? 'opacity-100 transform scale-100' : 'opacity-0 transform scale-90 pointer-events-none'
          }`}
          style={{
            transform: `translate(${Math.max(-100, Math.min(50, (mousePosition.x - window.innerWidth / 2) / 45))}px, ${Math.max(-100, Math.min(50, (mousePosition.y - window.innerHeight / 2) / 35))}px)`,
            transition: 'transform 0.4s ease-out, opacity 0.4s ease-out',
            background: 'linear-gradient(to bottom, #2a2a2a 30%, #242424 70%)',
          }}
        >
          <div className="container mx-auto p-4">
            <img src={mountain} className="absolute bottom-0 left-0 right-0 mx-auto object-contain rounded-[30px]" alt="Mountain" />
          </div>
          <Hero/>
        </div>
      </div>
    </div>
  );
};

export default Transition(InteractiveBars);
