import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout_components/header/Header';
import Navbar from './components/layout_components/navigation/NavBar';
import Footer from './components/layout_components/footer/Footer';
import MainBody from './components/layout_components/mainbody/MainBody'; // Updated import for MainBody component
import './App.css';
import PageNotFound from './components/PageNotFound';


function App() {
  return (
      <div className="App">
        <Header />
        <Navbar /> 
        <div className='app-content'>
          <Routes>
            <Route path="*" element={<MainBody />} />
            <Route path= "404" component={PageNotFound} />
          </Routes>
          </div>
       <Footer />
      </div>
  );
};

export default App;