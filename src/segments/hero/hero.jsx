import React from 'react';
import ParticleEffect from './particle';

export const Hero = () => {
  return (
    <div>
      <div
        className="absolute inset-0 z-0 rounded-[30px] opacity-95 hidden md:block"
        style={{
          backgroundImage: `url('src/assets/stars2.png')`,
          backgroundSize: 'cover', // or 'contain' depending on your needs
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
      <div className="font-extrabold font-poppins text-center">
        <div className="rounded-[30px]">
          <ParticleEffect />
        </div>
        <div className="relative 2xl:right-[20%] xl:right-[20%] lg:right-0 md:right-0 sm:right-0 mt-[12%]">
          <h2
            className="text-6xl top-0 right-0 text-transparent bg-clip-text transition-transform duration-300 ease-out"
            style={{
              backgroundImage: 'linear-gradient(to right, #ffffff 50%, #1A1A1A 90%)',
            }}
          >
            CODY
          </h2>
          <p
            className="font-normal text-transparent bg-clip-text 2xl:text-xl xl:text-lg lg:text-sm md:text-ms sm:text-[14px] transition-transform duration-300 ease-out"
            style={{
              backgroundImage: 'linear-gradient(to right, #ffffff 50%, #1A1A1A 90%)',
            }}
          >
            <a
              href="https://media.licdn.com/dms/document/media/D4D2DAQGQCegykS1DGQ/profile-treasury-document-pdf-analyzed/0/1723928528647?e=1726704000&v=beta&t=NqKFDlHgAKPc_Sv-pqR_47n0qYCw8lCaUEH39RQ5THI"
              className="hover:text-green-600 transition-colors duration-700 ease-out"
            >
              Personal Portfolio
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
