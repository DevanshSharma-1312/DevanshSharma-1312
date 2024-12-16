// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; // Import your general styles (optional)
import HomePage from './HomePage.js'; // Import the HomePage component
// import HomePage1 from './homepage1.js';
import AuthPage from './AuthPage.js';
function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="auth" element={<AuthPage/>}/>
        </Routes>
    </Router>
  );
}

export default App;