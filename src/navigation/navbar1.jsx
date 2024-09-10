import React, { useState, useEffect } from 'react';

import { Home } from '../segments/home/home';
import { Project } from '../segments/projects/project';
import { Llama } from '../segments/llama/llama';
import { Stack } from '../segments/stack/stack';
import { About } from '../segments/about/about';
import { Hero } from '../segments/hero/hero';

import RoundedTriangle from '../segments/hero/triangle';

const InteractiveBars1 = () => {
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
    <div className="flex h-screen">
      <div className="flex flex-col justify-center">
        {bars.map(bar => (
          <div
            key={bar.id}
            className="w-6 h-[2px] rounded-[0.7px] bg-green-600 m-5 cursor-pointer transform transition-transform duration-300"
            style={{ transform: activeScreen === bar.id ? 'scaleX(6.0) scaleY(3.0)' : 'scaleX(1) scaleY(1)' }}
            onMouseEnter={() => setActiveScreen(bar.id)}
          />
        ))}
      </div>
      <div className="flex-grow flex justify-center items-center">
        {activeScreen === null ? (
          <div className="2xl:w-3/5 2xl:h-3/5 xl:w-3/5 xl:h-3/5 lg:w-4/5 lg:h-3/5 md:w-4/5 md:h-3/5 sm:w-4/5 sm:h-3/5 max-sm:w-4/5 max-sm:h-3/5 p-4 bg-[#242424] rounded-2xl shadow-[0_0px_40px_10px_rgba(0,0,0,0.25)] text-[#D9D9D9] relative">
            <img src={mountain} className="absolute inset-0 w-full h-full object-contain"/>
            <Hero />
          </div>
        ) : (
          <div className="2xl:w-3/5 2xl:h-3/5 xl:w-3/5 xl:h-3/5 lg:w-4/5 lg:h-3/5 md:w-4/5 md:h-3/5 sm:w-4/5 sm:h-3/5 max-sm:w-4/5 max-sm:h-3/5 p-4 bg-[#242424] rounded-2xl shadow-[0_0px_40px_10px_rgba(0,0,0,0.25)] text-[#D9D9D9]">
            {bars.find(bar => bar.id === activeScreen).component}
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveBars1;