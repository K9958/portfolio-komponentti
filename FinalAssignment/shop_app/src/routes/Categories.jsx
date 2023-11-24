import { useParams } from 'react-router-dom';

import ProductList from '../ProductList';

// import dummy data
const productdata = require('../productdata.json');


const Categories = () => {
  const { category } = useParams();
  

  // filter products by category
  const filteredProducts = productdata.filter((product) => product.category === category)

  return (
    <div>
      <h1 className='first-header'>Categories: {category}</h1>
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default Categories;