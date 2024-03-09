// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
import LeftColumn from './components/LeftColumn';
import RightColumn from './components/RightColumn';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import MyCV from './components/pages/MyCV';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* content-wrap div wraps all content except the footer */}
        <div className="content-wrap">
          <Header />
          <Navbar />
          <div className="app-body">
            <LeftColumn />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/MyCV" element={<MyCV />} />
              </Routes>
            </main>
            <RightColumn />
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}




  export default App;
