import { RotatingBanner } from '../Banner';
import ProductList from '../ProductList';

const { productdata }  = require('../productdata.json');

const popular = productdata
  .sort((a, b) => b.popularity - a.popularity)
  .slice(0, 14);

const Home = (props) => {
  console.log(props);
  return (
    <>
      <RotatingBanner />
      <h1 className='first-header'>Suosituimmat juuri nyt</h1>
      <ProductList products={popular}/>
    </>
  )
}

export default Home;