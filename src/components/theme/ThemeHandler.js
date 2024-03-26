import React, { useEffect } from 'react';
import { useTheme } from './ThemeProvider';

const ThemeHandler = ({ children }) => {
  const { theme } = useTheme(); // Correct usage of useTheme here

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return <>{children}</>;
};

export default ThemeHandler;