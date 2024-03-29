import React from 'react';
import { useTheme } from '../theme/ThemeProvider';

const Header = () => {
  const { theme } = useTheme();
  return (
    <header className={`${theme === 'light' ? "bg-light bg-gradient" : "bg-dark bg-gradient"} `} style={{ height: '100px', border: '1px solid red' }}>
      <h1> Personal Portfolio </h1>
    </header>
  );
};

export default Header;
