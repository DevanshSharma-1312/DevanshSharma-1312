

// import React,{useContext, useState} from 'react';
// import './Item.css';
// import { Link } from 'react-router-dom';
// import { ShopContext } from '../../Context/ShopContext';
// const Item = (props) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const addToCart= useContext(ShopContext)
//   return (
//     <div className='item'
//     onMouseEnter={() => setIsHovered(true)}
//     onMouseLeave={() => setIsHovered(false)}
//     >
//       <Link to={`/product/${props.id}`}>
//         <img 
//           onClick={() => window.scrollTo(0, 0)} 
//           src={props.image} 
//           alt={props.name} 
//         />
//       </Link>
//       <p>{props.name}</p>
//       <div className="item-prices">
//         <div className="item-price-new">
         
//           {isHovered && (
//               <button 
//                 className="add-to-cart-btn" 
//                 onClick={() => addToCart(props.id)}
//               >
//                 +
//               </button>
//             )}
//           ₹{props.new_price}
//         </div>
//         <div className="item-price-old">
//           ₹{props.old_price}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Item;

// import React, { useContext, useState } from 'react';
// import './Item.css';
// import { Link } from 'react-router-dom';
// import { ShopContext } from '../../Context/ShopContext';

// const Item = (props) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const addToCart = useContext(ShopContext);

//   return (
//     <div
//       className="item"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <Link to={`/product/${props.id}`}>
//         <img
//           onClick={() => window.scrollTo(0, 0)}
//           src={props.image}
//           alt={props.name}
//         />
//       </Link>
//       <p>{props.name}</p>
//       <div className="item-prices">
//         <div className="item-price-new">
//           {isHovered && (
//             <button
//               className="add-to-cart-btn"
//               onClick={() => addToCart(props.id)}
//             >
//               +
//             </button>
//           )}
//           ₹{props.new_price}
//         </div>
//         <div className="item-price-old">₹{props.old_price}</div>
//       </div>
//     </div>
//   );
// };

// export default Item;


import React, { useContext, useState } from 'react';
import './Item.css';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Item = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const addToCart = useContext(ShopContext);

  return (
    <div
      className="item"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${props.id}`}>
        <img
          onClick={() => window.scrollTo(0, 0)}
          src={props.image}
          alt={props.name}
        />
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">
          <button
            className={`add-to-cart-btn ${isHovered ? 'show' : ''}`}
            onClick={() => addToCart(props.id)}
          >
            +
          </button>
          ₹{props.new_price}
        </div>
        <div className="item-price-old">₹{props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
