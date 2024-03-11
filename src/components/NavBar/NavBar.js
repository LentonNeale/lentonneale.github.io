import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css'; // Assuming CSS is required for styling these components

// Single file containing both components for simplicity

const NavItem = ({ to, label, active = false, dropdown = false, children }) => {
  const [isOpen, setIsOpen] = useState(false);

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
      {/* Dropdown Items */}
    </li>
  );
}

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
          {React.Children.map(children, child => {
            // Adding className 'dropdown-item' to each child if it's a React element
            if (React.isValidElement(child)) {
              return React.cloneElement(child, {
                className: `${child.props.className} dropdown-item`
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
  const [isNavCollapsed, setIsNavCollapsed] = useState(true); // New state for managing collapse.
  // Use React Router's useLocation hook to get the current pathname
  const location = useLocation();
  // The active path represents the currently active NavItem
  const activePath = location.pathname;
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  // const isProjectsActive = activePath.startsWith('/project');

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Portfolio</Link>
      <button className="navbar-toggler"
        onClick={handleNavCollapse}
        aria-expanded={!isNavCollapsed}
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <NavItem to="/" label="Home" active={activePath === '/'} />
          <NavItem to="/about" label="About Me" active={activePath === '/about'} />
          <NavItem to="/MyCV" label="My CV" active={activePath === '/MyCV'} />
          <NavItem to="/MyProjects" label="My Projects" active={activePath === '/MyCV'} />
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
