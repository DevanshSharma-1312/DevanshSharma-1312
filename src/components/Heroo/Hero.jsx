import React from 'react';
import './Hero.css';
import arrow_icon from '../assets/images/arrow.png';
import hand_icon from '../assets/images/hand_icon.png';
import hero_image from '../assets/images/heroimage.jpg';
// We bring the 
// Store to your door
// Now get 25% off on all itm (in caps)
// shop now (button)
import { NavLink } from 'react-router-dom';
const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>Your Comfort is Our Business</h2>
        <div>
          <div className="hand-icon">
            <p>We Bring the</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>Store to Your Door</p>
          <p className='special-p'>NOW! GET 25% OFF ON ALL ITEMS</p>
        </div>
         {/* <div className="hero-shopnow-btn"> */}
          <NavLink to='/Address_form'>
          <button className="hero-shopnow-btn">Shop Now

          <img src={arrow_icon} alt="" />
          </button>

          </NavLink>
         {/* </div> */}
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  )
}

export default Hero;
