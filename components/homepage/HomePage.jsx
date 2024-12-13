import React from 'react';
import './HomePage.css'; // Importing custom CSS for styling

const HomePage = () => {
  return (
    <div className="homepage-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#service">Service</a>
          <a href="#contact">Contact Us</a>
        </div>
        <div className="auth-buttons">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </nav>

      {/* Banner Section */}
      <div className="banner">
        <img
          src="https://example.com/market.jpg" // Replace with actual banner image URL
          alt="Market"
          className="banner-image"
        />
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
        />
        <button className="search-btn">🔍</button>
      </div>

      {/* Category Section */}
      <div className="category-container">
        <div className="category-item">
          <img
            src="https://example.com/grocery.png" // Replace with actual category image
            alt="Grocery"
          />
          <p>Grocery</p>
        </div>
        <div className="category-item">
          <img
            src="https://example.com/medicines.png"
            alt="Medicines"
          />
          <p>Medicines</p>
        </div>
        <div className="category-item">
          <img
            src="https://example.com/vegetables.png"
            alt="Vegetables"
          />
          <p>Vegetables</p>
        </div>
        <div className="category-item">
          <img
            src="https://example.com/drinks.png"
            alt="Drinks"
          />
          <p>Drinks and Beverages</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
