import React, { useState } from "react";
import { useTheme } from '../theme/ThemeProvider';
import { NavLink } from "react-router-dom";
import { Envelope, Linkedin, Git} from "react-bootstrap-icons";
import './SideBar.scss';


const SideBar = ({ items, position }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { theme } = useTheme();

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const expandSidebar = () => {
    setIsExpanded(true);
  };

  const renderNavItem = (link) => (
    <li >
        <NavLink className={`sidebar-link-${theme}`} to={link.url}>{link.label}</NavLink>
    </li>
  );

  const renderExternalLinkItem = (link, theme) => {
    let content;
  
    // Determine the content based on link.label using switch
    switch (link.label) {
      case 'LinkedIn':
        content = <Linkedin />;
        break;
      case 'Website Repo':
        content = <Git />;
        break;
      default:
        content = link.label;
    }
  
    // Return the list item containing the link and the determined content
    return (
      <li>
        <a className={`sidebar-link-${theme}`} href={link.url} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      </li>
    );
  };

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

  const renderEmailItem =(link) =>(
    <NavLink href={`mailto:${link.text}`}>
            <Envelope /> 
    </NavLink>
  );


  const renderSidebarContent = (items) => {
    return items.map((item) => {
      switch (item.itemtype) {
          case 'navigation':
              return renderNavItem(item);
          case 'external-link':
              return renderExternalLinkItem(item);
          case 'progress':
              return renderProgressItem(item);
          case 'email':
              return renderEmailItem(item);
          default:
              return (
                  <div key={item.label} className="default-item">
                      <h3>Sidebar</h3>
                  </div>
              );
      }
  });
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
              {renderSidebarContent(items)}
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
