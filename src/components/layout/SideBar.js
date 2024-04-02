import React, { useState } from "react";
import { useTheme } from '../theme/ThemeProvider';
import { NavLink } from "react-router-dom";
import { Envelope, Linkedin } from "react-bootstrap-icons";
import './SideBar.scss';

const isExternalLink = (url) => {
  return /^https:\/\//.test(url);
};

const SideBar = ({ type, items, position }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const { theme } = useTheme();

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const expandSidebar = () => {
    setIsExpanded(true);
  };

  const renderLinkItem = (link, index) => (
    <li key={index}>
      {isExternalLink(link.url) ? (
        <NavLink className={`sidebar-link-${theme}`} href={link.url} target="_blank" rel="noopener noreferrer">
          {link.label}
        </NavLink>
      ) : (
        <NavLink className={`sidebar-link-${theme}`} to={link.url}>{link.label}</NavLink>
      )}
    </li>
  );

  const renderProgressItem = (progress) => (
    <div className="progress-item " key={progress.label}>
      <div>{progress.label} {progress.value}%</div>
      <div className="d-flex justify-content-center">
        <div className={`progress-${theme}`}>
          <div
            className={`progress-bar-${theme}`}
            style={{ width: `${progress.value}%` }}
            role="progressbar"
            aria-valuenow={progress.value}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
  );

  const renderInfoItem = (info, index) => (
    <li key={index}>
      {info.description === 'Email' ? (
        <div>
          <div> Contact Me: </div>
          <NavLink href={`mailto:${info.text}`}>
            <Envelope />
          </NavLink>
        </div>
      ) : info.description === 'LinkedIn' ? (
        <NavLink href={info.text} target="_blank" rel="noopener noreferrer">
          <Linkedin />
        </NavLink>
      ) : (
        <div>{info.description}: {info.text}</div>
      )}
    </li>
  );

  const renderSidebarContent = () => {
    switch (type) {
      case 'links':
        return items.map(renderLinkItem);
      case 'progress':
        return items.map(renderProgressItem);
      case 'info':
        return items.map(renderInfoItem);
      default:
        return <div> <h3> SideBar </h3></div>;
    }
  };

  return (
    <div className={`sidebar${isExpanded ? "" : "collapsed-"}-${theme}`}>
      {isExpanded ? (
        <>
          <div className={`d-flex justify-content-${position === "left" ? "end" : "start"}`}>
            <button
              onClick={toggleSidebar}
              className={`expanded-button-${theme}`}
            >
              {position === "left" ? "<<" : ">>"}
            </button>
          </div>
          <div>
            <div className="sidebar-content">
              {renderSidebarContent()}
            </div>
          </div>
        </>
      ) : (
        <button
          onClick={expandSidebar}
          className={`expand-button-${theme}`}
          style={{
            marginLeft: position === "left" ? "-5px" : "",
            marginRight: position === "right" ? "-5px" : ""
          }}
        >
          {position === "left" ? ">" : "<"}
        </button>
      )}
    </div>
  );
};

export default SideBar;
