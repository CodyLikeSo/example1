import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InteractiveBars from './navigation/navbar';
import Development from './segments/home/development/development';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InteractiveBars />} />
        {/* <Route path="/development" element={<Development />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
