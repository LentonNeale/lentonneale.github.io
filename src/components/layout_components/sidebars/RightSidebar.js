import React, { useState } from 'react';
import { useTheme } from '../../theme/ThemeContext';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import './sidebar.css'

const RightColumn = () => {
  const { theme } = useTheme();
  const [collapsed, setCollapsed] = useState(false);

  const handleToggleSidebar = () => {
    setCollapsed(!collapsed);
  };
  return (
    <aside className='right-sidebar' data-theme={theme} aria-label="Sidebar Navigation">
      <button className='sidebar-button' onClick={handleToggleSidebar}>
        {collapsed ? '>' : '<'}
      </button>
      {collapsed && (
        <div className='right-sidebar-container'>
          <h1 className='h1-sidebar'> Right SideBar </h1>
          <Sidebar collapsed={collapsed}>
            <Menu>

            </Menu>
          </Sidebar>
        </div>
      )}
    </aside>
  );
};

export default RightColumn;
