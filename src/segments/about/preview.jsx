import React, { useState, useEffect } from 'react';

export const Preview = () => {
  const [isMainVisible, setIsMainVisible] = useState(false);
  const [isExtraVisible, setIsExtraVisible] = useState(false);

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      startAnimation();
    }
  };

  const startAnimation = () => {
    setTimeout(() => {
      setIsMainVisible(true);
    }, 1000);

    setTimeout(() => {
      setIsExtraVisible(true);
    }, 3000);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const mainTextStyles = {
    transition: 'opacity 2.5s ease-in-out',
    opacity: isMainVisible ? 1 : 0,
  };

  const extraTextStyles = {
    transition: 'opacity 2.5s ease-in-out',
    opacity: isExtraVisible ? 1 : 0,
  };

  return (
    <div className="relative h-full w-full">
      <h1
        style={mainTextStyles}
        className="flex justify-center items-center py-[20%] 2xl:py-[12%] xl:py-[24%] lg:py-[28%] md:py-[30%] sm:py-[35%] 2xl:text-xl xl:text-lg lg:text-md md:text-sm sm:text-xl font-poppins font-light"
      >
        My name is Arseniy. You've landed on my site, which I made to fuck with my skills.
      </h1>

      <div
        style={extraTextStyles}
        className="flex flex-col justify-center p-2 items-center 2xl:text-2xl xl:text-lg lg:text-md md:text-sm sm:text-xl font-extralight"
      >
        <h1>
          If you're actually interested, I suggest you scroll down below
        </h1>
        <h2>
          and take a look at one of my three areas of expertise
        </h2>
      </div>
    </div>
  );
};
