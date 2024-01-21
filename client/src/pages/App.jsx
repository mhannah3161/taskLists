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
        <Route path="/" element={<HomePage />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </Router>
  );
};

export default App;