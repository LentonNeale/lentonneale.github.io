import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/H_and_F/Header';
import Navbar from './components/NavBar/NavBar';
import Footer from './components/H_and_F/Footer';
import MainBody from './components/pages/MainBody/MainBody'; // Updated import for MainBody component
import './App.css';


function App() {
  return (
    <Router>
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
    </Router>
  );
};

export default App;
