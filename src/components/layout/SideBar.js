import React, {useState} from "react";

const sidebarStyles = {
    links: {
        backgroundColor: '#f0f0f0',
    },
    progress: {
        backgroundColor: '#e0e0e0',
    }

}



const SideBar = ({ type, items, position }) => {
    const positionClass = position === 'left' ? 'start' : 'end';
    const [isExpanded, setIsExpanded] = useState(true); // State to track expanded/collapsed state

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
                    <li key={index}>
                        <a href={link.url}>{link.title}</a>
                    </li>
                ));
            case 'progress':
                return items.map((progress, index) => (
                    <div key={index}>
                        <label>{progress.label}</label>
                        <progress value={progress.value} max="100">
                        </progress>
                    </div>
                ));
            default:
                return <div> <h3> SideBar </h3></div>
        }
    };



    const style = sidebarStyles[type]

    return (
<div className={`sidebar sidebar-${position}-${type}`} style={style}>
      {isExpanded ? (
        <>
        <div className={`d-flex justify-content-${ position === "left" ? "end":"start"}` }>
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
          {sidebarContent(items)}
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