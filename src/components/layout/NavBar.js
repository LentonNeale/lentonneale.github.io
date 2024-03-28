import React from "react";
import {useTheme } from '../theme/ThemeProvider';
import { NavLink } from "react-router-dom";



const NavBar = () => {
    const {theme, toggleTheme} = useTheme();
    console.log("Theme:", theme); // Log the theme for debugging purposes


    return (
        <div className={`navbar navbar-expand-lg ${theme === 'light' ? "navbar-light bg-light" : "navbar-dark bg-dark" }`}>
            <div className="container-fluid">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                </ul>
                <button onClick={toggleTheme}>Toggle Theme</button> {/* Toggle button */}
            </div>
        </div>
    );
};

export default NavBar;