import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import InteractiveBars from './navigation/navbar';

import Development from './segments/home/development/development';
import Management from './segments/home/management/management';
import Sound_design from './segments/home/sound_design/sound_design';
import Dev_pages from './segments/home/development/dev_pages';

import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<InteractiveBars />} />
        <Route path="/develop" element={<Development />} />
        <Route path="/manage" element={<Management />} />
        <Route path="/sound" element={<Sound_design />} />
        <Route path="/develop/pages" element={<Dev_pages />} />
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
