import React from 'react';

const Home = () => {
  // Add dynamicLinks property for the LeftSidebar
  Home.dynamicLinks = [
    { to: '/home', label: 'What this is all about' },
  ];

  return (
    <div>
      <li className='content-title'>
        <h2>Home</h2>
      </li>
      <div className='content-body'>
       Welcome to my personal portfolio! This is currently a work in progress as I am learning CSS, javascript, react and their numerous libraries
      libraries so I can create a modern and reactive webpage. Why not use Wix or Squarespace you ask because it's challenging and I enjoy software programming.
      
      </div>
    </div>
  );
};

export default Home;
