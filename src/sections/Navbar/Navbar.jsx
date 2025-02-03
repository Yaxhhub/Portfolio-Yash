import React from 'react'
import './Navbar.css';

const Navbar = () => {
    return (
      <nav className="Style.navbar">
        <div className="navbar-logo">
          <a href="/">MyWebsite</a>
        </div>
        <ul className="navbar-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="navbar-toggle">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    );
  };

export default Navbar