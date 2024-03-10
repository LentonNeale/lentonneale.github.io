import React from 'react';

const MyProjects = () => {
  // Add dynamicLinks property for the LeftSidebar
  MyProjects.dynamicLinks = [{ to: '/projects', label: 'My Projects' }];

  return (
    <div>
      <h2>My Projects</h2>
      {/* Your projects content */}
    </div>
  );
};

export default MyProjects;
