import React from "react";
import { useTheme } from '../theme/ThemeProvider';
import { NavLink } from "react-router-dom";
import { MoonFill, SunFill } from "react-bootstrap-icons"
import './NavBar.scss'

const NavBar = () => {
    const { theme, toggleTheme } = useTheme();
    console.log("Theme:", theme); // Log the theme for debugging purposes


    return (
        <div className={`navbar navbar-expand-lg navbar-${theme}`}>
            <div className="container-fluid">
                <div className={`navbar-brand-${theme}`}> Portfolio </div>
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
                <button className={`btn btn-transparent`} onClick={toggleTheme}>
                {theme === 'light' ? <MoonFill color="black" /> : <SunFill color="yellow" />}
                </button>
            </div>
        </div>
    );
};

export default NavBar;