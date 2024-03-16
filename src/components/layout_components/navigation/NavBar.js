import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../theme/ThemeContext';
import './NavBar.css';

const NavItem = ({ to, label, active = false, dropdown = false, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  const toggleDropdown = () => setIsOpen(!isOpen);

  if (dropdown) {
    return (
      <li className={`nav-item dropdown ${isOpen ? 'show' : ''}`}>
        <button
          className={`nav-link dropdown-toggle ${active ? 'active-link' : ''}`}
          onClick={toggleDropdown}
          aria-haspopup="true"
          aria-expanded={isOpen}>
          {label}
        </button>
        <div className={`dropdown-menu ${isOpen ? 'show' : ''}`} aria-labelledby="navbarDropdown">
          {React.Children.map(children, (child, index) => {
            // Adding className 'dropdown-item' to each child if it's a React element
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
    <li className={`nav-item ${active ? 'active' : ''}`}>
      <Link className={`nav-link ${active ? 'active-link' : ''}`} to={to}>{label}</Link>
    </li>
  );
};

const NavBar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const location = useLocation();
  const activePath = location.pathname;
  const { theme } = useTheme();

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className='navbar' data-theme={theme}>
      <Link className='navbar-brand' to="/home">Portfolio</Link>
      <button className="navbar-toggler"
        onClick={handleNavCollapse}
        aria-expanded={!isNavCollapsed}
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <NavItem to="/home" label="Home" active={activePath === '/'} />
          <NavItem to="/about" label="About Me" active={activePath === '/about'} />
          <NavItem to="/MyCV" label="My CV" active={activePath === '/MyCV'} />
          <NavItem to="/MyProjects" label="My Projects" active={activePath === '/MyProjects'} />
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
