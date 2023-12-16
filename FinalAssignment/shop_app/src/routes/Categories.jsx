import { useParams } from 'react-router-dom';

import ProductList from '../ProductList';
import ErrorElement from './ErrorElement';

// import dummy data
const { productdata, categories } = require('../productdata.json');

const Categories = () => {
  const { category } = useParams();


  // filter products by category
  const filteredProducts = productdata.filter((product) => product.category === category)

  const categoryExists = categories.some((cat) => cat.id === category)
  

  let categoryName = ''

  if (categoryExists) {
    const { name_fi } = categories.find((cat) => cat.id === category)
    categoryName = name_fi
  }
  


  return (
    <div>
      {!categoryExists ? <ErrorElement h2='Tuoteryhmää ei löydy :(' /> :
        <div>
          <h1 className='first-header'>Tuotekategoria: {categoryName}</h1>
          <ProductList products={filteredProducts} />
        </div>
      }
    </div>
  );
}

export default Categories;