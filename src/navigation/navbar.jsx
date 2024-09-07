// src/components/InteractiveBars.js

import React, { useState } from 'react';

const InteractiveBars = () => {
  const [activeScreen, setActiveScreen] = useState(null);

  const bars = [
    { id: 1, content: 'Screen 1 Content' },
    { id: 2, content: 'Screen 2 Content' },
    { id: 3, content: 'Screen 3 Content' },
    { id: 4, content: 'Screen 4 Content' },
    { id: 5, content: 'Screen 5 Content' },
  ];

  return (
    <div className="flex h-screen">
      <div className="flex flex-col justify-center">
        {bars.map(bar => (
          <div
            key={bar.id}
            className="w-10 h-20 bg-gray-300 m-2 cursor-pointer hover:bg-gray-400"
            onMouseEnter={() => setActiveScreen(bar.id)}
          />
        ))}
      </div>
      <div className="flex-grow flex justify-center items-center">
        {activeScreen !== null && (
          <div className="w-1/2 h-1/2 bg-white shadow-lg border p-4">
            {bars.find(bar => bar.id === activeScreen).content}
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveBars;
