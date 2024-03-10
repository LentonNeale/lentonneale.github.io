import React from 'react';

const Home = () => {
  // Add dynamicLinks property for the LeftSidebar
  Home.dynamicLinks = [
    { to: '/home', label: 'What this is all about' },
  ];

  return (
    <div>
      <h2>Home Page</h2>
      {/* Your about me content */}
    </div>
  );
};

export default Home;
