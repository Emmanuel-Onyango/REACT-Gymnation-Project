// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import PackageSelection from './pages/PackageSelection';
import PlatinumPage from './pages/PlatinumPage';
import RegularDashboard from './pages/RegularDashboard';
import './assets/styles.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/packageselection" element={<PackageSelection />} />
        <Route path="/platinumpage" element={<PlatinumPage />} />
        <Route path="/regulardash" element={<RegularDashboard />} />
        {/* Add routes for premiumdashboard.html when you create that component */}
      </Routes>
    </Router>
  );
}

export default App;