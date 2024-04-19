import React from 'react';
import { useTheme } from '../theme/ThemeProvider';
import './Footer.scss'

const Footer = () => {
  const { theme } = useTheme();
  return (
    <footer className={`footer-${theme}`} style={{ height: '5vh', border: '1px solid var(--heading-color)' }}>
    <p className={`footer-text-${theme}`}>© 2024 LentonNeale.github.io. All rights reserved.</p>
  </footer>
  );
  };

export default Footer;