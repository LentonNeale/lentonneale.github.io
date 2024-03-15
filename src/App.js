import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout_components/header/Header';
import Navbar from './components/layout_components/navigation/NavBar';
import Footer from './components/layout_components/footer/Footer';
import MainBody from './components/layout_components/mainbody/MainBody';
import { ThemeProvider, useTheme } from './components/layout_components/theme/ThemeContext'; // Import ThemeProvider
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <Navbar />
        <Router>
          <div className='app-content'>
            <Routes>
              <Route path="*" element={<MainBody />} />
            </Routes>
          </div>
        </Router>
        <Footer />
      </div>

    </ThemeProvider>
  );
}


export default App;