import React, { useState, useEffect } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';

// Component imports
import LeftSidebar from '../sidebars/LeftSidebar';
import RightSidebar from '../sidebars/RightSidebar';
import AboutMe from '../../about/AboutMe';
import CV from '../../myCV/CV';
import MyProjects from '../../myprojects/MyProjects';
import Home from '../../home/Home';
import PageNotFound from '../../PageNotFound';

// Theme hook
import { useTheme } from '../theme/ThemeContext';

// CSS import
import './MainBody.css';

// Utility function
const getDynamicLinks = (pathname) => {
  const pathToLinksMapping = {
    '/home': Home.dynamicLinks,
    '/about': AboutMe.dynamicLinks,
    '/MyCV': CV.dynamicLinks,
    '/MyProjects': MyProjects.dynamicLinks,
  };
  
  return pathToLinksMapping[pathname] || [];
};

const MainBody = () => {
  const [dynamicLinks, setDynamicLinks] = useState([]);
  const { '*': pathname } = useParams(); 
  const { theme } = useTheme(); // Correctly destructured to get `theme`

  useEffect(() => {
    setDynamicLinks(getDynamicLinks(pathname));
  }, [pathname]);

  return (
    <>
      <LeftSidebar dynamicLinks={dynamicLinks} />
      {/* Corrected template literals syntax for dynamic class names */}
      <div className={`main-content ${theme}-theme`}> 
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/mycv" element={<CV />} /> {/* Lowercase route for consistency */}
          <Route path="/myprojects" element={<MyProjects />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <RightSidebar />
    </>
  );
};

export default MainBody;
