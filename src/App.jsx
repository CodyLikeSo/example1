import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InteractiveBars from './navigation/navbar';
import Development from './segments/home/development/development';
import { AnimatePresence } from 'framer-motion';
import Transition from './navigation/transition';

function App() {
  return (
    <AnimatePresence mode='wait'>
      <Router>
        <Routes>
          <Route path="/" element={<InteractiveBars />} />
          <Route path="/development" element={<Development/>} />
        </Routes>
      </Router>
    </AnimatePresence>
  );
}

export default App;
