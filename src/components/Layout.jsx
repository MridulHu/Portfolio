import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Layout.css';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header>
        <nav>
          <div className="menu-icon" onClick={toggleMenu}>
            ☰
          </div>
          <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/projects" onClick={toggleMenu}>Projects</Link></li>
            <li><Link to="/skills" onClick={toggleMenu}>Skills</Link></li>
            <li><Link to="/about" onClick={toggleMenu}>About Me</Link></li>
            <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
