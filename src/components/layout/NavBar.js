import React from "react";
import {useTheme } from '../theme/ThemeProvider';




const NavBar = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={`navbar navbar-expand-lg ${theme === 'light' ? "navbar-light bg-light" : "navbar-dark bg-dark" }`}>
            <div className="container-fluid">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <button onClick={toggleTheme}>Toggle Theme</button> {/* Toggle button */}
            </div>
        </div>
    );
};

export default NavBar;