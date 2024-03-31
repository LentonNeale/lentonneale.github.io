import React from 'react';
import { useTheme } from '../theme/ThemeProvider';
import lightHeader from '../../assets/images/Header-Light-img.jpg';
import darkHeader from '../../assets/images/Header-Dark-img.jpg';
import './Header.scss'


const Header = () => {
  const { theme } = useTheme();
  return (
    <header className={`header-${theme}`} style={{ height: '120px'}}>
      <img src={`${theme === 'light' ? lightHeader:darkHeader}`} alt="Error" />
    </header>
  );
};

export default Header;
