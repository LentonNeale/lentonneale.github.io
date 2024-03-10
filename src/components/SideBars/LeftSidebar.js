import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './sidebar.css'


const LeftSidebar = ({ dynamicLinks }) => {
  const location = useLocation();

  useEffect(() => {
    // Additional logic can be added here if needed
    console.log('Dynamic Links:', dynamicLinks);
  }, [location.pathname, dynamicLinks]);

  return (
    <aside className="left-sidebar">
      <h1> Left SideBar </h1>
      {dynamicLinks && dynamicLinks.map((link) => (
        <Link key={link.to} to={link.to} className={location.pathname === link.to ? 'active' : ''}>
          {link.label}
        </Link>
      ))}
    </aside>
  );
};

export default LeftSidebar;
