import React from 'react';
import { useTheme } from '../theme/ThemeContext';

const MyProjects = () => {
  const  {theme}  = useTheme();
  // Add dynamicLinks property for the LeftSidebar
  MyProjects.dynamicLinks = [{ to: '/project1', label: 'This Website' },
  { to: '/project2', label: 'Assistant Team' },
 ];

  return (
    <div>
      <li className='content-title' data-theme={theme}>
        <h2>My Projects</h2>
      </li>
      <div className='content-body'data-theme={theme}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </div>
    </div>
  );
};

export default MyProjects;
