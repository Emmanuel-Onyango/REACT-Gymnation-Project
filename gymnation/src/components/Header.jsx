// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/">GYM<span className="green">N</span><span className="red">ATION</span></Link>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Log In</Link>
      </nav>
    </header>
  );
};

export default Header;