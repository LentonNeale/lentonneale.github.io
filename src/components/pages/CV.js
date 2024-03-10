import React from 'react';

const CV = () => {
  // Add dynamicLinks property for the LeftSidebar
  CV.dynamicLinks = [
    { to: '/MyCV', label: 'My CV' },
    { to: '/MyCV/experience', label: 'Experience' },
    { to: '/MyCV/education', label: 'Education' },
  ];

  return (
    <div>
      <h2>My CV</h2>
      {/* Your CV content */}
    </div>
  );
};

export default CV;
