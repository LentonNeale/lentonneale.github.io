import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sidebar, Menu, SubMenu, MenuItem } from 'react-pro-sidebar';
import { useTheme } from '../theme/ThemeContext'; // Ensure this path is correct
import './sidebar.css';

const LeftSidebar = ({ dynamicLinks }) => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme(); // Destructure to get the current theme

  useEffect(() => {
    // Effect to log path changes or dynamicLinks updates
  }, [location.pathname, dynamicLinks]);

  return (
    // Apply dynamic theme className to adjust styles based on the current theme
    <aside className={`left-sidebar ${theme}-theme`} aria-label="Sidebar Navigation">
      <h1>Left Sidebar</h1>
      <Sidebar>
        <Menu >
          {/* <SubMenu label="Theme"> */}
            <MenuItem onClick={toggleTheme}>Toggle Theme</MenuItem>
          {/* </SubMenu> */}
          {dynamicLinks.map((link) => (
            <MenuItem key={link.to}>
              <Link to={link.to}>{link.label}</Link>
            </MenuItem>
          ))}
        </Menu>
      </Sidebar>
    </aside>
  );
};

export default LeftSidebar;
