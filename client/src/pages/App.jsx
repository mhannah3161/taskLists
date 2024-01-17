import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import PortfolioPage from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import "../styles/styles.css?inline";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/employees" element={<AboutMe />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;