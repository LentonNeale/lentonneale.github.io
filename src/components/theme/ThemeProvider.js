import React, { createContext, useContext, useState, useEffect } from 'react';

// Constants for theme types
const THEME_LIGHT = 'light';
const THEME_DARK = 'dark';
const THEME_STORAGE_KEY = 'theme';

// Utility functions for localStorage access
const saveThemeToStorage = (theme) => localStorage.setItem(THEME_STORAGE_KEY, theme);
const getThemeFromStorage = () => localStorage.getItem(THEME_STORAGE_KEY);

// Initialize theme based on localStorage or default to light theme
const initializeTheme = () => getThemeFromStorage() || THEME_DARK;

const ThemeContext = createContext({
  theme: THEME_LIGHT,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(initializeTheme);

    const toggleTheme = () => {
        setTheme((currentTheme) => {
            const newTheme = currentTheme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT;
            console.log("Theme: "+newTheme);
            saveThemeToStorage(newTheme);
            return newTheme;
        });
    };

    useEffect(() => {
        // This code block is actually optional as the initial theme state 
        // is already set by `initializeTheme`. Kept for demonstration.
        const savedTheme = getThemeFromStorage();
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    const value = { theme, toggleTheme }; 

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
