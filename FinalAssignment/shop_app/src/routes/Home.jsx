import { RotatingBanner } from '../Banner';
import ProductList from '../ProductList';

const products = require('../productdata.json');

const Home = (props) => {
  console.log(props);
  return (
    <>
      <RotatingBanner />
      <h1 className='first-header'>Ostetuimmat juuri nyt</h1>
      <ProductList products={products}/>
    </>
  )
}

export default Home;