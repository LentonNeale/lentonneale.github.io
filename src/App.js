import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout_components/header/Header';
import Navbar from './components/layout_components/navigation/NavBar';
import Footer from './components/layout_components/footer/Footer';
import MainBody from './components/layout_components/mainbody/MainBody';
import { ThemeProvider, useTheme } from './components/theme/ThemeContext'; 
import './App.css';



function App() {
  // Removed useTheme hook as using it here would cause a React Hook "useTheme" cannot be called in a class component error.
  return (
    <ThemeProvider>
      <ThemeHandler>
        <div className="App">
          <Header />
          <Navbar />
            <div className='app-content'>
              <Routes>
                <Route path="*" element={<MainBody />} />
              </Routes>
            </div>
          <Footer />
        </div>
      </ThemeHandler>
    </ThemeProvider>
  );
}

// Component to handle setting data-theme based on the current theme
const ThemeHandler = ({ children }) => {
  const { theme } = useTheme(); // Correct usage of useTheme here

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return <>{children}</>;
};

export default App;
