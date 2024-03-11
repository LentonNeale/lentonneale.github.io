import React, { useState, useEffect } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import LeftSidebar from '../../SideBars/LeftSidebar';
import RightSidebar from '../../SideBars/RightSidebar';
import AboutMe from '../../AboutMe/AboutMe';
import CV from '../CV';
import MyProjects from '../MyProjects';
import Home from '../Home';

import './MainBody.css';

const MainBody = () => {
  const [dynamicLinks, setDynamicLinks] = useState();
  const { '*': pathname } = useParams();

  useEffect(() => {
    // Fetch or generate dynamic links based on the current component
    // For simplicity, hardcoding links here
    switch (pathname) {
      case '/':
        setDynamicLinks(Home.dynamicLinks || []);
        break;
      case '/about':
        setDynamicLinks(AboutMe.dynamicLinks || []);
        break;
      case '/CV':
        setDynamicLinks(CV.dynamicLinks || []);
        break;
      case '/MyProjects':
        setDynamicLinks(MyProjects.dynamicLinks || []);
        break;
      default:
        setDynamicLinks([]);
    }
  }, [pathname]);

  return (
    <>
      <LeftSidebar dynamicLinks={dynamicLinks} />
      <div className='main-content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/MyCV" element={<CV />} />
          <Route path="/MyProjects" element={<MyProjects />} />
          {/* Add more routes for other pages */}
        </Routes>
      </div>
      <RightSidebar />
    </>
  );
};

export default MainBody;
