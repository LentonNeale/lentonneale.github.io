import React from 'react';
import './column.css'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';


const LeftColumn = () => (
  <div className="left-column">
    <Sidebar>
      <Menu className='left-menu'>
        <SubMenu label="Charts">
          <MenuItem> Pie charts </MenuItem>
          <MenuItem> Line charts </MenuItem>
        </SubMenu>
        <MenuItem> Documentation </MenuItem>
        <MenuItem> Calendar </MenuItem>
      </Menu>
    </Sidebar>;
  </div>
);

export default LeftColumn;
