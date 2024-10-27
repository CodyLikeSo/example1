import React, { useEffect, useState } from 'react';
import { GoQuestion } from 'react-icons/go';
import ConsoleEmulator from './console';

function ConsoleSlide() {
  const [isMdOrLarger, setIsMdOrLarger] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMdOrLarger(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex h-screen justify-center items-center w-full overflow-hidden relative">
      <div
        className={`w-4/5 h-full sm:h-full md:h-4/5 lg:h-3/5 lg:w-3/5 rounded-[30px] 
          md:shadow-[0_0px_40px_10px_rgba(0,0,0,0.5)] md:border border-green-600 p-[3%] relative`}
        style={{
          background: isMdOrLarger
            ? 'linear-gradient(to bottom, #2a2a2a 30%, #242424 70%)'
            : '#242424',
        }}
      >
        <ConsoleEmulator />
      </div>
    </div>
  );
}

export default ConsoleSlide;
