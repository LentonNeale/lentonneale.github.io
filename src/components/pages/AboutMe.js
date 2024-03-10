import React from 'react';

const AboutMe = () => {
  // Add dynamicLinks property for the LeftSidebar
  AboutMe.dynamicLinks = [
    { to: '/about', label: 'About Me' },
    { to: '/about/hobbies', label: 'Hobbies & Interests' },
  ];

  return (
    <div>
      <h2>About Me</h2>
      {/* Your about me content */}
    </div>
  );
};

export default AboutMe;
