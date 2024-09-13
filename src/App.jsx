import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import InteractiveBars from './navigation/navbar';
import Development from './segments/home/development/development';
import { AnimatePresence } from 'framer-motion';
import Transition from './navigation/transition';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<InteractiveBars />} />
        <Route path="/development" element={<Development />} />
      </Routes>
    </AnimatePresence>
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
