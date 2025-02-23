import React, { useContext } from 'react';
import './New.css';
import new_collections from '../assets/images/new_collections';
import Item from '../Items/Item'
import { ShopContext } from '../../Context/ShopContext';
const New = () => {
  const {addToCart} = useContext(ShopContext);
  return (
    <div className='new'>
      <h1>NEW PRODUCTS</h1>
      <hr />
      <div className="collections">
        {new_collections.map((item,i)=>{
            return <Item  
            key={i}
            id={item.id} 
            image={item.image} 
            name={item.name}
            new_price={item.new_price}
            old_price={item.old_price}
            add={() => addToCart(item.id)}/>
        })}
      </div>
    </div>
  )
}

export default New
