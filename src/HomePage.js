

import React from 'react';
import './HomePage.css'; // Import custom CSS for styling
// import Slider from 'react-slick';
// Import images from the repository
import groceryImage from './assets/grocery.png';
import medicinesImage from './assets/medicines.png';
import vegetablesImage from './assets/vegetables.png';
import drinksImage from './assets/drinks.png';
import bannerImage from './assets/banner.png'; // Assuming a banner image exists
import 'slick-carousel/slick/slick.css'; // Import slick carousel styles
import 'slick-carousel/slick/slick-theme.css';
// import banner1 from './assets/banner1.jpg'; // Example banner images
// import banner2 from './assets/banner2.jpg';
// import banner3 from './assets/banner3.jpg';



const HomePage = () => {



    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 3000,
    //     pauseOnHover: true,
    //     arrows: false, // Can be set to true for next/prev buttons
    // };




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

            Banner Section
      <div className="banner">
        <img
          src={bannerImage} // Use banner image from the repo
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
                        src={groceryImage} // Use image from the repository
                        alt="Grocery"
                    />
                    <p>Grocery</p>
                </div>
                <div className="category-item">
                    <img
                        src={medicinesImage}
                        alt="Medicines"
                    />
                    <p>Medicines</p>
                </div>
                <div className="category-item">
                    <img
                        src={vegetablesImage}
                        alt="Vegetables"
                    />
                    <p>Vegetables</p>
                </div>
                <div className="category-item">
                    <img
                        src={drinksImage}
                        alt="Drinks"
                    />
                    <p>Drinks and Beverages</p>
                </div>
            </div>

            {/* Footer Section */}
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-section about">
                        <h2>About Us</h2>
                        <p>
                            We are committed to delivering the freshest groceries and medicines at your doorstep.
                            Shop with us for convenience and quality.
                        </p>
                    </div>

                    <div className="footer-section links">
                        <h2>Quick Links</h2>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#service">Services</a></li>
                            <li><a href="#contact">Contact Us</a></li>
                        </ul>
                    </div>

                    <div className="footer-section contact">
                        <h2>Contact Us</h2>
                        <p>Email: support@groceryshop.com</p>
                        <p>Phone: +123 456 7890</p>
                        <p>Address: 123 Market Street, City</p>
                    </div>

                    <div className="footer-section social">
                        <h2>Follow Us</h2>
                        <div className="social-icons">
                            <a href="https://facebook.com" className="social-icon facebook" target="_blank" rel="noopener noreferrer">Facebook</a>
                            <a href="https://twitter.com" className="social-icon twitter" target="_blank" rel="noopener noreferrer">Twitter</a>
                            <a href="https://instagram.com" className="social-icon instagram" target="_blank" rel="noopener noreferrer">Instagram</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2024 GroceryShop | All Rights Reserved</p>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;

