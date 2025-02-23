// import React,{useContext} from 'react';
// import { ShopContext } from '../../Context/ShopContext';
// import './Popular.css';
// import data_product from '../assets/images/data';
// import Item from '../Items/Item';

// const Popular = () => {
//   const { addToCart } = useContext(ShopContext);
//   return (
//     <div className='popular'>
//       <h1>POPULAR PRODUCTS</h1>
//       <hr />
//       <div className="popular-item">
        
//         {data_product.map((item, i) => (
//           <div>

//           <Item
//             key={i}
//             id={item.id}
//             add= {onClick={ addToCart(item.id)}
//             image={item.image}
//             name={item.name}
//             new_price={item.new_price}
//             old_price={item.old_price}
//             />
//             </div>
//         ))}
//       </div>
//     </div>
//   );
// };


import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import './Popular.css';
import data_product from '../assets/images/data';
import Item from '../Items/Item';

const Popular = () => {
  const { addToCart } = useContext(ShopContext);

  return (
    <div className='popular'>
      <h1>POPULAR PRODUCTS</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item, i) => (
          <div key={i}>
            <Item
              id={item.id}
              image={item.image}
              name={item.name}
              new_price={item.new_price}
              old_price={item.old_price}
              add={() => addToCart(item.id)} // Pass addToCart function as a prop
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;

// export default Popular;

// import React, { useContext } from 'react';
// import './Popular.css';

// const Item = ({ id, image, name, new_price, old_price }) => {

//   return (
//     <div className="item">
//       <div className="item-image-wrapper">
//         <img src={image} alt={name} className="item-image" />
//         {/* Add-to-cart button that appears on hover */}
// <div>
// <button className="add-to-cart-btn" onClick={() => addToCart(id)}>
//           +
//         </button>
//       </div>
//       <div className="item-details">
//         <h3>{name}</h3>
//         <div className="item-prices">
//           <span className="item-old-price">₹{old_price}</span>
//           <span className="item-new-price">₹{new_price}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Item;
