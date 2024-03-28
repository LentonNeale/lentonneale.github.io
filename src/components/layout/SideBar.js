import React, { useState } from "react";
import { useTheme } from '../theme/ThemeProvider';
import { NavLink } from "react-router-dom";

const sidebarStyles = {
  links: {
    backgroundColor: '#f0f0f0',
  },
  progress: {
    backgroundColor: '#e0e0e0',
  }

}

const isExternalLink = (url) => {
  return /^(https?:\/\/|mailto:|tel:)/.test(url);
};



const SideBar = ({ type, items, position }) => {
  const positionClass = position === 'left' ? 'start' : 'end';
  const [isExpanded, setIsExpanded] = useState(true); // State to track expanded/collapsed state
  const { theme } = useTheme();


  // Function to toggle the expanded/collapsed state
  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  // Function to handle expanding the sidebar
  const expandSidebar = () => {
    setIsExpanded(true);
  };

  // Function to handle collapsing the sidebar
  const collapseSidebar = () => {
    setIsExpanded(false);
  };



  const sidebarContent = (items) => {
    switch (type) {
      case 'links':
        return items.map((link, index) => (
          <li key={index} style={{ listStyle: 'none' }}>
            {isExternalLink(link.url) ? (
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.title}
              </a>
            ) : (
              <NavLink to={link.url}>{link.title}</NavLink>
            )}
          </li>
        ));
      case 'progress':
        return items.map((progress, index) => (
          <div>
            <div>{progress.label}</div>
            <div key={index} className="progress" style={{ width: '90%' }}>
              <div className="progress-bar" role="progressbar" style={{ width: `${progress.value}%` }} aria-valuenow={progress.value} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        ));
      case 'info':
        return items.map((info, index) => (
          <li key={index} style={{ listStyle: 'none' }}>
            <div>{info.description}: {info.text} </div>
          </li>
        ));
      default:
        return <div> <h3> SideBar </h3></div>
    }
  };



  const style = sidebarStyles[type]

  return (
    <div className={`sidebar sidebar-${position}-${type} ${theme === 'light' ? "bg-light bg-gradient" : "bg-dark bg-gradient"}`} style={style}>
      {isExpanded ? (
        <>
          <div className={`d-flex justify-content-${position === "left" ? "end" : "start"}`} style={{ width: '200px' }} >
            <button
              onClick={toggleSidebar}
              className="expand-button"
              style={{
                position: "relative",
                zIndex: 999,
              }}
            >
              {position === "left" ? "<<" : ">>"}
            </button>
          </div>
          <div className="d-flex flex-column align-items-center">
            {sidebarContent(items)}
          </div>
        </>
      ) : (
        <button
          onClick={expandSidebar}
          className="expand-button"
          style={{
            position: "relative",
            top: "10px",
            right: position === "left" ? "0" : "auto",
            left: position === "right" ? "0" : "auto",
            zIndex: 999,
          }}
        >
          {position === "left" ? ">" : "<"}
        </button>
      )}
    </div>
  )
}

export default SideBar