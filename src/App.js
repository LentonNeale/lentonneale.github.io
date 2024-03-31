import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// Custom Components
import { ThemeProvider, useTheme } from './components/theme/ThemeProvider';
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import NavBar from './components/layout/NavBar';

// Style Sheets
import './App.scss';


function App() {
  const { theme } = useTheme();

  // Verify if the theme and toggle function are accessible

  return (
    <ThemeProvider>
      <Router>
        <div className={`App flex-column ${theme}-theme`}>
          <Header />
          <NavBar />
          <div>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>

          </div>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
