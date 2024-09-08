export const Home = () => (
  <div className="text-center">
    <h2 className="text-xl font-bold">Home screen</h2>
    <p>Content Home</p>
  </div>
);

export default Home;

// import React, { useState, useEffect } from 'react';

// export const Home = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (event) => {
//       const { clientX, clientY } = event;
//       setPosition({ x: clientX, y: clientY });
//     };

//     window.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   const calculateTransform = () => {
//     const offsetX = (position.x / window.innerWidth) * 10 - 5;
//     const offsetY = (position.y / window.innerHeight) * 10 - 5;
//     return `translate(${offsetX}px, ${offsetY}px)`;
//   };

//   return (
//     <div
//       className="text-center"
//       style={{ transform: calculateTransform(), transition: 'transform 0.1s ease-out' }}
//     >
//       <h2 className="text-xl font-bold">Home screen</h2>
//       <p>Content Home</p>
//     </div>
//   );
// };

// export default Home;
