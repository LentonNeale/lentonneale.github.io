import React from 'react';
import SideBar from './SideBar';
import { useTheme } from '../theme/ThemeProvider';

import './BodyLayout.scss'

const BodyLayout = ({children,leftsidebarItems, rightsidebarItems}) => {
    const { theme } = useTheme();
    return (
        <div className={`main-${theme} d-flex flex-row`}  style={{height: '90vh'}}>
            {leftsidebarItems && <SideBar
                items={leftsidebarItems}
                position='left' />}
            <div className='flex-grow-1 overflow-auto'>{children}</div>
            {rightsidebarItems && <SideBar
                items={rightsidebarItems}
                position='right' />}
        </div>
    )

}

export default BodyLayout;