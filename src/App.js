// First, organize imports for better readability: library imports first, then components, and finally styles.
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Note adding 'Routes'
import Navbar from './components/NavBar'; // Adjust the file path to follow a standard project structure.
import Home from './components/pages/Home';
import About from './components/pages/About'; // Keeping this import as it's logically placed.
import MyCV from './components/pages/MyCV';
import './App.css';
// import '../App.css'; // Styles typically come last for easier identification.

// App component serves as the root and handles routing and layout.
function App() {
  return (
    // Using BrowserRouter to enable client-side routing.
    <BrowserRouter>
      <div className="App">
        {/* Navbar is presented consistently across all routes */}
        <Navbar />
        {/* Routes container to encapsulate all Route definitions */}
        <Routes>
          {/* Each Route defines a path and the component to render. */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/MyCV" element={<MyCV />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

// Export App component for use in index.js.
export default App;

// Notes:
// 1. Moved the 'Navbar' file inside a 'components' directory for better structure.
// 2. Wrapped the Route component inside a Routes for compliance with react-router v6.
// 3. Ordered imports: React → Other Libraries → Custom Components → Styles.
// 4. Explicitly commented on the purpose of structural blocks: BrowserRouter, Routes.
