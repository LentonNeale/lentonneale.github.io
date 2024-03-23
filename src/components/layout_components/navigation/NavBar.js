import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../theme/ThemeContext';

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

import './NavBar.scss';

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false); // State to manage mobile menu visibility
  const location = useLocation();
  const activePath = location.pathname;
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => setShowDropDown(!showDropDown);

  useEffect(() => {
    console.log("showDropDown:", showDropDown);
  }, [showDropDown]);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 960);
      setShowDropDown(false); // Reset mobile menu state on resize
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <nav class={`navbar navbar-expand-lg ${theme === 'light' ? 'navbar-light bg-light' : 'navbar-dark bg-dark'}`}>

      <Button type="button" class='btn-custom-outline-dark' onClick={toggleTheme} style={{ background: 'none', border: 'none' }}>
        {theme === 'light' ?
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" class="bi bi-lightbulb-off" viewBox="0 0 16 16">
            <path fill="#0c0c0d" d="M2.23 4.35A6 6 0 0 0 2 6c0 1.691.7 3.22 1.826 4.31.203.196.359.4.453.619l.762 1.769A.5.5 0 0 0 5.5 13a.5.5 0 0 0 0 1 .5.5 0 0 0 0 1l.224.447a1 1 0 0 0 .894.553h2.764a1 1 0 0 0 .894-.553L10.5 15a.5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 .288-.091L9.878 12H5.83l-.632-1.467a3 3 0 0 0-.676-.941 4.98 4.98 0 0 1-1.455-4.405zm1.588-2.653.708.707a5 5 0 0 1 7.07 7.07l.707.707a6 6 0 0 0-8.484-8.484zm-2.172-.051a.5.5 0 0 1 .708 0l12 12a.5.5 0 0 1-.708.708l-12-12a.5.5 0 0 1 0-.708" />
          </svg>
          :
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" class="bi bi-lightbulb-fill" viewBox="0 0 16 16">
            <path fill="currentColor" d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5" />
          </svg>}
      </Button>

      <div class="navbar-brand"> My Portfolio </div>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu" aria-controls='navbarMenu' aria-expanded='false' aria-label="Toggle navigation">
        <span class="navbr-toggler-icon"></span>
      </button>
      <div>
        <div class="collapse navbar-collapse" id="navbarMenu">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/home">
                Home
                {/* <span class="sr-only">(current)</span> */}
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/about">
                About
                {/* <span class="sr-only">(current)</span> */}
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/MyCV">
                My CV
                {/* <span class="sr-only">(current)</span> */}
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/MyProjects">
                My Projects
                {/* <span class="sr-only">(current)</span> */}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;



{/* <nav className='navbar-container' data-bs-theme={theme}>
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
  <button class="btn btn-secondary dropdown-toggle"
    type="button"
    data-bs-toggle="dropdown" 
    aria-expanded="false"
    data-theme={theme}>
    <span className="navbar-toggler-icon">
      <div className='bar'></div>
      <div className='bar'></div>
      <div className='bar'></div>
    </span>
  </button>
    <ul className='nav-elements'>
      <li><NavItem to="/home" label="Home" active={activePath === '/home'} /></li>
      <li><NavItem to="/about" label="About Me" active={activePath === '/about'} /></li>
      <li><NavItem to="/MyCV" label="My CV" active={activePath === '/MyCV'} /></li>
      <li><NavItem to="/MyProjects" label="My Projects" active={activePath === '/MyProjects'} /></li>
    </ul>
  </div>
): ''}
</nav>
); */}
