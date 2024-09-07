import React, { useState } from 'react';

export default function HoverButton1() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative inline-block">
        <button
          className={`h-2 bg-green-600 rounded transition-all duration-300 ${
            isHovered ? 'w-40' : 'w-20'
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        ></button>

        <div
          className={`absolute left-full top-0 ml-2 py-1 text-[#D9D9D9] transition-opacity duration-200 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p className="rounded px-2">Home</p>
        </div>
      </div>
    </div>
  );
}
