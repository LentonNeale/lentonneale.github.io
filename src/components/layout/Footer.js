import React from 'react';
import { useTheme } from '../theme/ThemeProvider';

const Footer = () => {
  const { theme } = useTheme();
  return (
  <footer className={`${theme === 'light' ? "bg-light bg-gradient" : "bg-dark bg-gradient"} `} style={{height: '100px', border: '1px solid red'}}>
    <p>© 2024 My Website. All rights reserved.</p>
  </footer>
  );
  };

export default Footer;