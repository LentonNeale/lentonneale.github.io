import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// Custom Components
import { ThemeProvider, useTheme } from './components/theme/ThemeProvider';
import ThemeHandler from './components/theme/ThemeHandler';
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';

// Style Sheets
import './App.scss';


function App() {
  const { theme } = useTheme();

  return (
    <ThemeProvider>
      <ThemeHandler>
        <div className="App flex-column" data-bs-theme={theme}>
          <Header />
          <div>
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Router>
          </div>
          <Footer />
        </div>
      </ThemeHandler>
    </ThemeProvider>
  );
}

export default App;
