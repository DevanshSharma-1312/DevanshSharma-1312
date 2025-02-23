import React from 'react'
import './Offer.css'
import offer_img from '../assets/images/offer_image.png'
import { NavLink } from 'react-router-dom'
const Offer = () => {
  return (
    <div className='offer'>
      <div className="offer-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <NavLink to='/Address_form'>
          <button>Check Now</button>
          
          </NavLink>
      </div>
      <div className="offer-right">
        <img src={offer_img} alt="" />
      </div>
    </div>
  )
}

export default Offer;
