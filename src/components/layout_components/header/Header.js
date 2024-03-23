import React from 'react';
import { useTheme } from  '../../theme/ThemeContext';
import '../CommonStyles/H_and_F.scss';

const Header = () => {
  // Use useContext hook to consume the theme context
  const { theme } = useTheme();
  
  return (
    <header className='header' data-theme={theme}> {/* Apply theme class */}
      <h1> My Personal Portfolio </h1>
    </header>
  );
};

export default Header;
