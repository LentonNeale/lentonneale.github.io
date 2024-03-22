import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../theme/ThemeContext';

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

import './NavBar.css';



const NavItem = ({ to, label, active = false, dropdown = false, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  const toggleDropdown = () => setIsOpen(!isOpen);

  const navItemClasses = `nav-item ${active ? 'active' : ''}`;
  const navLinkClasses = `nav-link ${active ? 'active-link' : ''}`;

  if (dropdown) {
    return (
      <li className={`nav-item dropdown ${isOpen ? 'show' : ''}`} data-theme={theme}>
        <button
          className={`nav-link dropdown-toggle ${active ? 'active-link' : ''}`}
          onClick={toggleDropdown}
          aria-haspopup="true"
          aria-expanded={isOpen}>
          {label}
        </button>
        <div className={`dropdown-menu ${isOpen ? 'show' : ''}`} aria-labelledby="navbarDropdown" data-theme={theme}>
          {React.Children.map(children, (child, index) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child, {
                key: index,
                className: `${child.props.className || ''} dropdown-item`
              });
            }
            return child;
          })}
        </div>
      </li>
    );
  }

  return (
    <li className={navItemClasses} data-theme={theme}>
      <Link className={navLinkClasses} to={to}>{label}</Link>
    </li>
  );
};

const NavBar = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  const activePath = location.pathname;
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => setShowDropDown(!showDropDown);




  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 960);
      setShowDropDown(false); // Close menu when screen size changes
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <nav className='navbar-container' data-bs-theme={theme}>
      <Button class='btn-sm' onClick={toggleTheme}>
        {theme === 'light' ? 
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lightbulb" viewBox="0 0 16 16">
          <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1" />
        </svg> 
        : 
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lightbulb-fill" viewBox="0 0 16 16">
          <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5" />
        </svg>}
      </Button>
      <div className='navbar-brand'> Portfolio </div>
      {isMobile ? (
        <button className="navbar-toggler"
          onClick={toggleMenu}
          aria-expanded={showDropDown}
          aria-label="Toggle navigation"
          data-theme={theme}>
          <span className="navbar-toggler-icon">
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
          </span>

        </button>
      ) : (
        <div className={`navbar-menu ${showDropDown ? 'show-menu' : ""}`} id='nav-menu' data-theme={theme}>
          <ul className='nav-elements'>
            <NavItem to="/home" label="Home" active={activePath === '/home'} />
            <NavItem to="/about" label="About Me" active={activePath === '/about'} />
            <NavItem to="/MyCV" label="My CV" active={activePath === '/MyCV'} />
            <NavItem to="/MyProjects" label="My Projects" active={activePath === '/MyProjects'} />
          </ul>
        </div>
      )}
    </nav>
  );

};

export default NavBar;
