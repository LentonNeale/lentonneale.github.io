import React, { useState } from 'react';
import { useTheme } from '../../theme/ThemeContext';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import './sidebar.scss'

const RightColumn = () => {
  const { theme } = useTheme();
  const [collapsed, setCollapsed] = useState(false);

  const handleToggleSidebar = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div 
    class={`sidebar flex-column ${collapsed ? 'bg-info' : (theme === 'light' ? 'bg-light' : 'bg-dark')}`} 
    data-bs-theme={theme} 
    aria-label="Sidebar Navigation"
    >
      <div className={`d-flex justify-content-${collapsed ? 'start' : 'end'}`}>
        <button
          type="button"
          class={`${collapsed ? ' bg-info border-0' : ' btn-info'}`}
          onClick={handleToggleSidebar}
          style={{
            marginRight: collapsed ? '0' : '-5px',
            borderRadius: collapsed ? '20px' : '5px',
            borderRight: '1px solid white'
          }}
        >
          {!collapsed ?
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={theme === 'light' ? 'black' : 'currentColor'} class="bi bi-arrow-left" viewBox="0 0 16 16" >
              <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
            </svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16" style={{ color: 'black' }}>
              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
            </svg>
          }
        </button>
      </div>
      {collapsed && (
        <div className='right-sidebar-container'>
          <h1 className='h1-sidebar'>Right Sidebar</h1>
          
        </div>
      )}
    </div>
  );
};

export default RightColumn;
