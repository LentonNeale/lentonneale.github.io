import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sidebar, Menu, SubMenu, MenuItem } from 'react-pro-sidebar';
import { useTheme } from '../../theme/ThemeContext'; // Ensure this path is correct
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

import './sidebar.scss';

const LeftSidebar = ({ dynamicLinks }) => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme(); // Destructure to get the current theme
  const [collapsed, setCollapsed] = useState(false);

  const handleToggleSidebar = () => {
    setCollapsed(!collapsed);
  };
  useEffect(() => {
    // Effect to log path changes or dynamicLinks updates
  }, [location.pathname, dynamicLinks]);

  return (
    // Apply dynamic theme className to adjust styles based on the current theme
    <div 
    class={`sidebar flex-column ${collapsed ? 'bg-info' : (theme === 'light' ? 'bg-light' : 'bg-dark')}`} 
    data-bs-theme={theme} 
    aria-label="Sidebar Navigation"
    style={{
      borderRadius: collapsed ? '20px' : '5px',
      borderRight: '1px solid white',
      borderLeft: '0px'
    }} 
    >
      <div className={`d-flex justify-content-${collapsed ? 'end' : 'start'}`}>
        <button
          type="button"
          class= {`${collapsed ? ' bg-info border-0' : ' btn-info'}`}
          onClick={handleToggleSidebar}
          style={{
            marginLeft: collapsed ? '0' : '-5px',
            borderRadius: collapsed ? '20px' : '5px',
            borderRight: '1px solid white'
          }}
        >
          {collapsed ?
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16" style={{ color: 'black' }}>
              <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
            </svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={theme === 'light' ? 'black' : 'currentColor'} class="bi bi-arrow-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
            </svg>
          }
        </button>
      </div>
      {collapsed && (
        <div className='left-sidebar-container '>
          <h1 className='h1-sidebar'>Left Sidebar</h1>
          <Sidebar>
            <Menu >
              {/* <SubMenu label="Theme"> */}
              <MenuItem className='toggle_button' onClick={toggleTheme}>Toggle Theme</MenuItem>
              {/* </SubMenu> */}
              {dynamicLinks.map((link) => (
                <MenuItem key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </MenuItem>
              ))}
            </Menu>
          </Sidebar>
        </div>
      )}
    </div>
  );
};

export default LeftSidebar;
