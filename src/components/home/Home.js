import React from 'react';

const Home = () => {
  return (
    <div>
      <li className='content-title'>
        <h2>Home</h2>
      </li>
      <div className='content-body'>
        Welcome to my personal portfolio! This is currently a work in progress as I am learning CSS, JavaScript, React, and their numerous libraries. Why not use Wix or Squarespace, you ask? Because it's challenging, and I enjoy software programming.
      </div>
    </div>
  );
};

// Define dynamicLinks outside the component function
Home.dynamicLinks = [
  { to: '/home_about', label: 'What this is all about' },
  { to: '/home_blurb', label: 'Intro' },
];

export default Home;
