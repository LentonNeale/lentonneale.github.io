import React, { useState } from "react";
import { useTheme } from '../theme/ThemeProvider';
import { NavLink } from "react-router-dom";
import { Envelope, Linkedin } from "react-bootstrap-icons"

import './SideBar.scss'

const isExternalLink = (url) => {
  return /^https:\/\//.test(url);
};



function isEmail(text) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(text);
}

const SideBar = ({ type, items, position }) => {
  // const positionClass = position === 'left' ? 'start' : 'end';
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

  const sidebarContent = (items) => {
    switch (type) {
      case 'links':
        return items.map((link, index) => (
          <li key={index} style={{ listStyle: 'none' }}>
            {isExternalLink(link.url) ? (
              <a className={`sidebar-link-${theme}`} href={link.url} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            ) : (
              <NavLink className={`sidebar-link-${theme}`} to={link.url}>{link.label}</NavLink>
            )}
          </li>
        ));
      case 'progress':
        return items.map((progress, index) => (
          <div>
            <div>{progress.label}</div>
            <div key={index} className="progress" style={{ width: '120px' }}>
              <div className="progress-bar" role="progressbar" style={{ width: `${progress.value}%` }} aria-valuenow={progress.value} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        ));
      case 'info':
        return items.map((info, index) => (
          <li key={index} style={{ listStyle: 'none' }}>
            {info.description === 'Email' ? (
              <div>
                <div> Contact Me: </div>
                <a href={`mailto:${info.text}`}>
                  <Envelope />
                </a>
              </div>
            ) : info.description === 'LinkedIn' ? (
              <a href={info.text} target="_blank" rel="noopener noreferrer">
                <Linkedin />
              </a>
            ) : (
              <div>{info.description}: {info.text}</div>
            )}
          </li>
        ));
      default:
        return <div> <h3> SideBar </h3></div>
    }
  };




  return (
    <div className={`sidebar-${isExpanded ? "" : "collapsed-" }${theme}`}>
      {isExpanded ? (
        <>
          <div className={`d-flex justify-content-${position === "left" ? "end" : "start"}`} style={{ width: '200px' }} >
            <button
              onClick={toggleSidebar}
              className={`expanded-button-${theme}`}
              style={{
                position: "relative",
                zIndex: 999,
              }}
            >
              {position === "left" ? "<<" : ">>"}
            </button>
          </div>

          <div className="d-flex flex-column align-items-center" >
            {sidebarContent(items)}
          </div>
        </>
      ) : (
          <button
            onClick={expandSidebar}
            className={`expand-button-${theme}`}
            style={{
              position: "relative",
              top: "10px",
              marginLeft: position === "left" ? "-3px" : "",
              marginRight: position === "right" ? "-3px" : "",
              // right: position === "left" ? "5" : "auto",
              // left: position === "right" ? "-5" : "auto",
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