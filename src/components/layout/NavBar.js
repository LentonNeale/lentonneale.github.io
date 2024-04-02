import React, { useState, useEffect } from "react";
import { useTheme } from '../theme/ThemeProvider';
// import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavLink } from 'react-bootstrap';
import { MoonFill, SunFill } from "react-bootstrap-icons"
import './NavBar.scss'

const NavBar = () => {
    const { theme, toggleTheme } = useTheme();
    
    return (
        <Navbar expand="lg" className={`navbar navbar-expand-lg navbar-${theme}`}>
        <div className="container-fluid">
          <Navbar.Brand className={`navbar-brand-${theme}  mb-lg-0`}>Lenton's Portfolio</Navbar.Brand>
          <button className={`btn btn-transparent`} onClick={toggleTheme}>
            {theme === 'light' ? <MoonFill color="black" /> : <SunFill color="yellow" />}
          </button>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar-nav mx-5 me-auto mb-3 mb-lg-0">
              <Nav.Item className="nav-item mx-2">
                <NavLink className="nav-link mb-2 mb-lg-0" href="/">Home</NavLink>
              </Nav.Item>
              <Nav.Item className="nav-item mx-2">
                <NavLink className="nav-link mb-2 mb-lg-0" href="/about">About</NavLink>
              </Nav.Item>
              <Nav.Item className="nav-item mx-2">
                <NavLink className="nav-link mb-2 mb-lg-0" href="/contact">Contact</NavLink>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>

        </div>
      </Navbar>
    );
};

export default NavBar;