import React from 'react';

const RoundedTriangle = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className="relative w-0 h-0"
        style={{
          borderLeft: '50px solid transparent',
          borderRight: '50px solid transparent',
          borderBottom: '100px solid #3490dc', // Tailwind's blue-500
          borderBottomLeftRadius: '20px',
          borderBottomRightRadius: '20px',
        }}
      ></div>
    </div>
  );
};

export default RoundedTriangle;
