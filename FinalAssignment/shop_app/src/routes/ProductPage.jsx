import React from 'react';
import { useParams } from 'react-router-dom';
import ErrorElement from './ErrorElement';

import Product from '../Product';

const ProductPage = () => {
  const { productdata } = require('../productdata.json');
  const { productId } = useParams();

  const product = productdata.find((product) => product.id === parseInt(productId))

  if (!product || isNaN(productId)) {
    return (
      <ErrorElement h2='Tuotetta ei löydy :(' />
    )
  } 

  return (
    <div className='container product-page'>
      <Product product={product} showLong />
    </div>
  );
}

export default ProductPage;