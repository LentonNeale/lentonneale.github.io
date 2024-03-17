import React from 'react';
import { useTheme } from  '../../theme/ThemeContext';
import './sidebar.css'

const RightColumn = () => {
  const  {theme}  = useTheme();
  return(
  <aside className='right-sidebar' data-theme={theme}> 
    <h1 className='h1-sidebar'> Right SideBar </h1>
  </aside>
  );
};

export default RightColumn;
