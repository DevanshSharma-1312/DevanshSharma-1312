import React from 'react';
import './News.css';
import { NavLink } from 'react-router-dom';

const News = () => {
  return (
    <div className='news'>
      <h1>Get Exclusive Offers On Your Email </h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div>
        <input type="email" placeholder='Your Email id' />
        <NavLink to='/Adderess_form'>
          <button>Subscribe</button>
          
          </NavLink>
      </div>
    </div>
  )
}

export default News;
