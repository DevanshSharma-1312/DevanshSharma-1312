import React, { useState,useContext } from 'react';
import './ProductDisplay.css';
import star_icon from '../assets/images/star_icon.png';
import stardull_icon from '../assets/images/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';


const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

 
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div 
          className="productdisplay-img-list" 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div 
          className="productdisplay-img"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
            <img src={product.image} alt="" className="productdisplay-main-img" />
            
            {/* Display '+' button when hovered */}
            {isHovered && (
              <button 
                className="add-to-cart-btn" 
                onClick={() => addToCart(product.id)}
              >
                +
              </button>
            )}
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={stardull_icon} alt="" />
            <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">₹{product.old_price}</div>
            <div className="productdisplay-right-price-new">₹{product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, autem? Provident eius nesciunt voluptatem, est officia a? Cupiditate amet iure doloribus facilis tenetur laboriosam maiores ullam. Hic, maiores. Rem reprehenderit quod eius!
        </div>
        <div className="productdisplay-right-size">
            <h1>Select Quantity</h1>
            <div className="productdisplay-right-sizes">
                <div>250g</div>
                <div>500g</div>
                <div>1kg</div>
                <div>2kg</div>
                <div>3kg</div>
                <div>4kg</div>
                <div>5kg</div>
            </div>
        </div>
        {/* Add to cart button */}
        <button onClick={() => addToCart(product.id)}>ADD TO CART</button>
        <p className='productdisplay-right-category'>
          <span>About the product :</span>Fresh product, In-budget, From local Market
        </p>
        <p className='productdisplay-right-category'>
          <span>Other Info :</span>Product ID: {product.id}
        </p>
      </div>
    </div>
  )
}

export default ProductDisplay;
