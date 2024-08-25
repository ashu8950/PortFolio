import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideBar from './Component/SideBar';
import Home from './Component/Home';
import About from './Component/About';
import Skill from './Component/Skill';
import Qualification from './Component/Qualification';
import PortFolio from './Component/PortFolio';
import Contact from './Component/Contact';
import Certification from './Component/Certification';

function App() {
  return (
    <Router>
      <SideBar />
      <div className="main-content">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skill />} />
          <Route path="/qualification" element={<Qualification />} />
          <Route path="/portfolio" element={<PortFolio />} />
          <Route path="/certification" element={<Certification />} />
          <Route path="/contact" element={<Contact />} />
          {/* Optional: Add a default route */}
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
