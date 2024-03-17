import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../theme/ThemeContext';
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
  const { theme } = useTheme();

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
    <nav className='navbar-container' data-theme={theme}>
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
