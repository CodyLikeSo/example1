import React, { useState } from 'react';

export default function HoverButton({ word }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="items-center">
      <div className="relative inline-block">
        <button
          className={`h-1 bg-green-600 rounded transition-all duration-600 ${
            isHovered ? 'w-20' : 'w-10'
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        ></button>

        <div
          className={`absolute left-full top-0 ml-2 text-[#D9D9D9] transition-opacity duration-200 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p className="rounded px-2 text-lg">{word}</p>
        </div>
      </div>
    </div>
  );
}
