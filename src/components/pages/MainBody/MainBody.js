// Imports necessary React features and components for the app, including routing functionality.
import React, { useState, useEffect } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
// Sidebar components are imported to be used within the layout.
import LeftSidebar from '../../SideBars/LeftSidebar';
import RightSidebar from '../../SideBars/RightSidebar';
// Individual page components are imported for routing.
import AboutMe from '../../AboutMe/AboutMe';
import CV from '../CV';
import MyProjects from '../MyProjects';
import Home from '../Home';

import './MainBody.css'; // Importing CSS for styling the main body component.

// A utility function defined to map the current pathname to a set of dynamic links. This helps in determining the content of the sidebar based on the current route.
const getDynamicLinks = (pathname) => {
  const pathToLinksMapping = {
    // Maps paths to their corresponding dynamic links arrays, if any.
    '/': Home.dynamicLinks,
    '/about': AboutMe.dynamicLinks,
    '/CV': CV.dynamicLinks, // Adjusted to match the route
    '/MyProjects': MyProjects.dynamicLinks,
  };
  // console.log('MainBody - getDynamicLinks(): Home ' + JSON.stringify(Home.dynamicLinks));
  // console.log('MainBody - getDynamicLinks(): pathTo'+ JSON.stringify(pathToLinksMapping));  
  return pathToLinksMapping['/'+pathname] || []; // Returns an array of dynamic links based on current path, or an empty array if no match.
};

const MainBody = () => {
  const [dynamicLinks, setDynamicLinks] = useState([]); // Holds the dynamic links for the sidebar, initially empty.
  const { '*': pathname } = useParams(); // Using wildcard to capture all path segments for flexible matching.

  useEffect(() => {
    // This effect runs when the `pathname` changes.
    // Temporary debug log inside getDynamicLinks
    // console.log("Returning links for",pathname , ": ", getDynamicLinks(pathname));
    const links = getDynamicLinks(pathname); // Acquires dynamicLinks based on current pathname.
    setDynamicLinks(links); // Updates dynamicLinks state based on current pathname.
    // console.log('DynamicLinks updated:', links); // Log the newly set dynamicLinks.
  }, [pathname]); // Dependency array with pathname ensures effect is only re-run when pathname changes.

  return (
    // Fragment used to group the layout components without adding extra nodes to the DOM.
    <>
      {/* LeftSidebar receives dynamicLinks to display relevant navigation based on current route. */}
      <LeftSidebar dynamicLinks={dynamicLinks} />
      <div className='main-content'>
        {/* Defines routes for the application, rendering different components based on the current URL path. */}
        <Routes>
          {/* Each Route component specifies a path and the component to render for that path. */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/CV" element={<CV />} /> {/* Ensure this matches the dynamic link logic */}
          <Route path="/MyProjects" element={<MyProjects />} />
          {/* Placeholder comment indicates where additional routes can be added. */}
        </Routes>
      </div>
      {/* RightSidebar is simply placed in the layout without dynamic content based on routing. */}
      <RightSidebar />
    </>
  );
};

export default MainBody; // Exports MainBody component for use in other parts of the app.
