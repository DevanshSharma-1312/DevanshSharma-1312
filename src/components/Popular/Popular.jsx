import React from 'react';
import './Popular.css';
import data_product from '../assets/images/data'; 
import Item from '../Items/Item';

const Popular = () => {
  return (
    <div className='popular'>
      <h1>POPULAR PRODUCTS</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item, i) => (
          <Item
            key={i}
            id={item.id} 
            image={item.image} 
            name={item.name}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;