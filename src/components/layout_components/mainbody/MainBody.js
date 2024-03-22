import React, { useState, useEffect } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';

// Component Imports
import LeftSidebar from '../sidebars/LeftSidebar';
import RightSidebar from '../sidebars/RightSidebar';
import AboutMe from '../../about/AboutMe';
import CV from '../../myCV/CV';
import MyProjects from '../../myprojects/MyProjects';
import Home from '../../home/Home';
import PageNotFound from '../../PageNotFound';

// Theme Hook
import { useTheme } from '../../theme/ThemeContext';

// CSS import
import './MainBody.css'; // Importing CSS for styling the main body component.

// A utility function defined to map the current pathname to a set of dynamic links. This helps in determining the content of the sidebar based on the current route.
const getDynamicLinks = (pathname) => {
  const pathToLinksMapping = {
    '/home': Home.dynamicLinks,
    '/about': AboutMe.dynamicLinks,
    '/MyCV': CV.dynamicLinks,
    '/MyProjects': MyProjects.dynamicLinks,
  };
  return pathToLinksMapping['/' + pathname] || []; // Returns an array of dynamic links based on current path, or an empty array if no match.
};

const MainBody = () => {
  const [dynamicLinks, setDynamicLinks] = useState([]); // Holds the dynamic links for the sidebar, initially empty.
  const { '*': pathname } = useParams(); // Using / to capture all path segments for flexible matching.
  const { theme } = useTheme();

  // Updates dynamicLinks state based on current pathname.
  useEffect(() => {
    setDynamicLinks(getDynamicLinks(pathname));
  }, [pathname]);

  return (
    // Fragment used to group the layout components without adding extra nodes to the DOM.
    <>
      <LeftSidebar dynamicLinks={dynamicLinks} />
      <div className='main-content' data-theme={theme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/MyCV" element={<CV />} /> {/* Ensure this matches the dynamic link logic */}
          <Route path="/MyProjects" element={<MyProjects />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <RightSidebar />
    </>
  );
};

export default MainBody;
