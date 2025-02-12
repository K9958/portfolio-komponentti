import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ErrorElement from './ErrorElement';

import Product from '../Product';

const ProductPage = () => {
  const { productdata } = require('../productdata.json');
  const { productId } = useParams();
  const navigate = useNavigate();

  const product = productdata.find((product) => product.id === parseInt(productId))

  if (!product || isNaN(productId)) {
    return (
      <ErrorElement h2='Tuotetta ei löydy :(' />
    )
  } 

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className='container product-page'>
      <p onClick={goBack} className='return-back' >← Palaa takaisin</p>
      <Product product={product} showLong />
    </div>
  );
}

export default ProductPage;