import React, { useState, useEffect } from 'react';
import { Home } from '../segments/home/home';
import { Project } from '../segments/projects/project';
import { Llama } from '../segments/llama/llama';
import { Stack } from '../segments/stack/stack';
import { About } from '../segments/about/about';
import { Hero } from '../segments/hero/hero';

import mountain from '/home/cody/Cody/Programming/React/example1/example1/src/assets/Mountain_full.png';

const InteractiveBars = () => {
  const [activeScreen, setActiveScreen] = useState(null);

  const bars = [
    { id: 1, component: <Home /> },
    { id: 2, component: <About /> },
    { id: 3, component: <Project /> },
    { id: 4, component: <Stack /> },
    { id: 5, component: <Llama /> },
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

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="flex h-screen relative overflow-hidden">
      <div className="flex flex-col justify-center absolute left-0 top-0 bottom-0">
        {bars.map((bar) => (
          <div
            key={bar.id}
            className="w-6 h-[2px] rounded-[0.7px] bg-green-600 m-5 cursor-pointer transition-transform duration-300"
            style={{
              transform: activeScreen === bar.id ? 'scaleX(6.0) scaleY(3.0)' : 'scaleX(1) scaleY(1)',
            }}
            onMouseEnter={() => setActiveScreen(bar.id)}
          />
        ))}
      </div>

      <div className="flex justify-center items-center w-full overflow-hidden">
        {bars.map((bar) => (
          <div
            key={bar.id}
            className={`absolute w-3/5 h-3/5 p-4 bg-[#242424] rounded-[30px] shadow-[0_0px_40px_10px_rgba(0,0,0,0.25)] text-[#D9D9D9] transition-all duration-700 ease-in-out ${
              activeScreen === bar.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
            }`}
          >
            {bar.component}
          </div>
        ))}

        {activeScreen === null && (
          <div className="absolute w-3/5 h-3/5 p-4 bg-[#242424] rounded-[30px] shadow-[0_0px_40px_10px_rgba(0,0,0,0.25)] text-[#D9D9D9] transition-all duration-700 ease-in-out opacity-100 translate-x-0">
            <div className="container mx-auto p-4">
              <img src={mountain} className="absolute bottom-0 left-0 right-0 mx-auto object-contain" />
            </div>
            <Hero />
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveBars;
