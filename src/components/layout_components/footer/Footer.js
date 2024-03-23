import React from 'react';
import { useTheme } from  '../../theme/ThemeContext';
import '../CommonStyles/H_and_F.scss';

const Footer = () => {
  const  {theme}  = useTheme();

  return (
  <footer className='footer' data-theme={theme}>
    <p>© 2023 My Website. All rights reserved.</p>
  </footer>
  );
  };

export default Footer;
