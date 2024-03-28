import React from 'react';
import SideBar from './SideBar';

const BodyLayout = ({children,leftSideBarType,leftsidebarItems, rightSideBarType, rightsidebarItems}) => {

    return (
        <div className='d-flex flex-row' style={{height: '100vh'}}>
            {leftSideBarType && <SideBar type = {leftSideBarType} 
            items = {leftsidebarItems}
            position='left' /> }
            <div className='flex-grow-1'>{children}</div>
            {rightSideBarType && <SideBar type = {rightSideBarType} 
            items = {rightsidebarItems}
            position='right' /> }
        </div>
    )

}

export default BodyLayout;