import React, { useContext } from 'react';
import {ShopContext} from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/Breadcrums/Breadcrum';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import Description from '../components/DescriptionBox/Description';
import RelatedProduct from '../components/RelatedProducts/RelatedProduct';
import New from '../components/New/New';
const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id ===Number(productId));
  return (
    <div>
      <New/>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <Description />
      <RelatedProduct/>
    </div>
  )
}

export default Product
