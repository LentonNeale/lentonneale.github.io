import React from 'react';
import SideBar from './SideBar';
import { useTheme } from '../theme/ThemeProvider';

import './BodyLayout.scss'

const BodyLayout = ({children,leftSideBarType,leftsidebarItems, rightSideBarType, rightsidebarItems}) => {
    const { theme } = useTheme();
    return (
        <div className={`main-${theme} d-flex flex-row`}  style={{height: '90vh'}}>
            {leftSideBarType && <SideBar type = {leftSideBarType} 
            items = {leftsidebarItems}
            position='left' /> }
            <div className='flex-grow-1 overflow-auto'>{children}</div>
            {rightSideBarType && <SideBar type = {rightSideBarType} 
            items = {rightsidebarItems}
            position='right' /> }
        </div>
    )

}

export default BodyLayout;