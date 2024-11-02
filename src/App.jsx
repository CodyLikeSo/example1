import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import InteractiveBars from './navigation/navbar';

import Development from './segments/home/development/development';
import Management from './segments/home/management/management';
import Sound_design from './segments/home/sound_design/sound_design';
import Dev_pages from './segments/home/development/dev_pages';

import { AnimatePresence } from 'framer-motion'; // Import AnimatePresence for route transitions

// import lines from '/home/cody/Cody/Programming/React/example1/example1/src/assets/lines.png';
import lines from '/home/cody/Cody/Programming/React/my_site/example1/src/assets/lines.png';



import keyboard from '/home/cody/Cody/Programming/React/my_site/example1/src/assets/keyboard3.png';
// import keyboard from '/home/cody/Cody/Programming/React/example1/example1/src/assets/keyboard3.png';

// Popup Component for the guide
function GuidePopup({ onClose }) {
  const [isExiting, setIsExiting] = useState(false); // Track if the popup is exiting

  useEffect(() => {
    // Function to handle key press
    const handleKeyPress = () => {
      setIsExiting(true); // Start exit animation on key press
      setTimeout(onClose, 2500); // Close the popup after the animation (500ms)
    };

    // Function to handle mouse click
    const handleMouseClick = () => {
      setIsExiting(true); // Start exit animation on mouse click
      setTimeout(onClose, 2500); // Close the popup after the animation (500ms)
    };

    // Add event listeners for keydown and mousedown events
    window.addEventListener('keydown', handleKeyPress);
    window.addEventListener('mousedown', handleMouseClick);

    // Cleanup the event listeners on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener('mousedown', handleMouseClick);
    };
  }, [onClose]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-[#1a1a1a] bg-opacity-80 z-50 
        ${isExiting ? 'animate-fadeOut' : 'animate-fadeIn'}`} // Apply fadeIn or fadeOut animation
    >
      <img src={keyboard} alt="Guide" className="max-w-[100%] max-h-[120%]" />
    </div>
  );
}

// AnimatedRoutes component
function AnimatedRoutes() {
  const location = useLocation();
  const [showGuide, setShowGuide] = useState(true); // State to track if the guide is visible

  // Close the guide
  const closeGuide = () => {
    setShowGuide(false);
  };

  return (
    <>
      {/* Only show the guide popup on the home page */}
      {/* <AnimatePresence>
        {location.pathname === '/' && showGuide && <GuidePopup onClose={closeGuide} />}
      </AnimatePresence> */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<InteractiveBars />} />
          <Route path="/develop" element={<Development />} />
          <Route path="/manage" element={<Management />} />
          <Route path="/sound" element={<Sound_design />} />
          <Route path="/develop/pages" element={<Dev_pages />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
