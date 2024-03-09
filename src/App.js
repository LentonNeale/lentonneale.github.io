// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
import LeftColumn from './components/Columns/LeftColumn';
import RightColumn from './components/Columns/RightColumn';
import Header from './components/H_and_F/Header';
import Footer from './components/H_and_F/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import MyCV from './components/pages/MyCV';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* content-wrap div wraps all content except the header and footer */}
        <Header />
        <Navbar />
        <div className="content-wrap">
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
        <Footer />
      </div>
    </BrowserRouter>
  );
}




  export default App;
