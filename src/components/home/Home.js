import React from 'react';
import { useTheme } from '../theme/ThemeContext';
import MyProjects from '../myprojects/MyProjects';
import AboutMe from '../about/AboutMe';
import CV from '../myCV/CV';
import './home.css'

const Home = () => {
  const { theme } = useTheme();
  return (
    <div className='scrollable-container'>
      <div className='scrollable-page'>
        <li className='content-title' data-theme={theme}>
          <h2>Home</h2>
        </li>
        <div className='content-body' data-theme={theme}>

          <p>Welcome to my personal portfolio! I'm excited to share my journey with you as I explore the realms of web development. Currently a work in progress, this portfolio is a testament to my ongoing learning journey in CSS, JavaScript, React, and their myriad libraries. Rather than opting for the convenience of platforms like Wix or Squarespace, I've chosen to embark on this path because I thrive on challenges and relish the intricacies of software programming. Each line of code represents a step forward in my quest for mastery, and I'm eager to showcase the skills and projects I've been diligently crafting along the way.</p>

          <p>As you navigate through these digital pages, I invite you to join me on this exciting adventure. From frontend designs to backend functionalities, every element has been meticulously crafted to reflect my dedication to excellence in web development. Whether you're a fellow enthusiast, a potential collaborator, or simply curious about my journey, I hope this portfolio serves as an inspiring testament to the boundless possibilities that emerge when passion meets perseverance. Welcome aboard, and let's embark on this coding odyssey together!</p>

        </div>
      </div>

      <div className='scrollable-page'>
        {<AboutMe />}
      </div>

      <div className='scrollable-page'>
        {<MyProjects />}
      </div>

      <div className='scrollable-page'>
        {<CV />}
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
