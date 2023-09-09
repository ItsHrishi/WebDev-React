import React, { useState } from 'react';

import ProductDate from './ProductDate';
import Card from './Card';
import './ProductItem.css';

const ProductItem = (props) => {

  // syntax of useSate:
  const [title, setTitle] = useState(props.title);


  function clickHandler() {
    //title = "Popcorn";
    setTitle("Popcorn");//functio used by the usestate hook
    console.log("button clicked");
  }
  

  return (
    <Card className='product-item'>
      <ProductDate date={props.date} />
      <div className='product-item__description'>
        <h2>{title}</h2>
      </div>
      <button onClick={clickHandler}>Add to Cart</button>
    </Card>
  );
}

export default ProductItem;