import React, { useState } from 'react';
import ParticleEffect from './particle';

export const Hero = () => {
  const [titleStyle, setTitleStyle] = useState({ transform: 'translate(0, 0) scale(1)' });
  const [linkStyle, setLinkStyle] = useState({ transform: 'translate(0, 0) scale(1)' });

  const handleMouseMoveTitle = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setTitleStyle({
      transform: `translate(${x * 0.05}px, ${y * 0.4}px) scale(1.05)`,
    });
  };

  const handleMouseLeaveTitle = () => {
    setTitleStyle({ transform: 'translate(0, 0) scale(1)' });
  };

  const handleMouseMoveLink = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setLinkStyle({
      transform: `translate(${x * 0.07}px, ${y * 0.2}px) scale(1.05)`,
    });
  };

  const handleMouseLeaveLink = () => {
    setLinkStyle({ transform: 'translate(0, 0) scale(1)' });
  };

  return (
    <div className="font-extrabold font-poppins text-center">
      <div className="rounded-[30px] hidden 2xl:block">
        <ParticleEffect />
      </div>
      <div className="relative 2xl:right-[20%] xl:right-[20%] lg:right-0 md:right-0 sm:right-0 mt-[12%]">
        <h2
          className="2xl:text-8xl xl:text-7xl lg:text-7xl md:text-6xl sm:text-6xl text-2xl top-0 right-0 text-transparent bg-clip-text transition-transform duration-300 ease-out"
          style={{
            ...titleStyle,
            backgroundImage: 'linear-gradient(to right, #ffffff 50%, #1A1A1A 70%)',
          }}
          onMouseMove={handleMouseMoveTitle}
          onMouseLeave={handleMouseLeaveTitle}
        >
          CODY
        </h2>
        <p
          className="font-normal text-transparent bg-clip-text 2xl:text-xl xl:text-lg lg:text-sm md:text-ms sm:text-[14px] transition-transform hover:text-green-600 duration-300 ease-out"
          style={{
            ...linkStyle,
            backgroundImage: 'linear-gradient(to right, #ffffff 47%, #1A1A1A 62%)',
          }}
          onMouseMove={handleMouseMoveLink}
          onMouseLeave={handleMouseLeaveLink}
        >
          <a href="https://media.licdn.com/dms/document/media/D4D2DAQGQCegykS1DGQ/profile-treasury-document-pdf-analyzed/0/1723928528647?e=1726704000&v=beta&t=NqKFDlHgAKPc_Sv-pqR_47n0qYCw8lCaUEH39RQ5THI">
            Personal Portfolio
          </a>
        </p>
      </div>
    </div>
  );
};
