import React, { useState } from "react";
import { useTheme } from '../theme/ThemeProvider';
import { NavLink } from "react-router-dom";
import { Envelope, Linkedin } from "react-bootstrap-icons";
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

  const renderExternalLinkItem = (link) => (
    <li>
      <a className={`sidebar-link-${theme}`} href={link.url} target="_blank" rel="noopener noreferrer">
        {link.label}
      </a>
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

  const renderEmailItem =(link) =>(
    <NavLink href={`mailto:${link.text}`}>
            <Envelope /> 
    </NavLink>
  );

  // const renderInfoItem = (info, index) => (
  //   <li key={index}>
  //     {info.description === 'Email' ? (
  //       <div>
  //         <div> Contact Me: </div>
  //         <NavLink href={`mailto:${info.text}`}>
  //           <Envelope />
  //         </NavLink>
  //       </div>
  //     ) : info.description === 'LinkedIn' ? (
  //       <NavLink href={info.text} target="_blank" rel="noopener noreferrer">
  //         <Linkedin />
  //       </NavLink>
  //     ) : (
  //       <div>{info.description}: {info.text}</div>
  //     )}
  //   </li>
  // );

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
