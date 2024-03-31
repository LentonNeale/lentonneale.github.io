import React from 'react';
import { useTheme } from '../theme/ThemeProvider';

const Footer = () => {
  const { theme } = useTheme();
  return (
    <footer className={`footer-${theme}`} style={{ height: '100px', border: '1px solid var(--heading-color)' }}>
    <p>© 2024 My Website. All rights reserved.</p>
  </footer>
  );
  };

export default Footer;