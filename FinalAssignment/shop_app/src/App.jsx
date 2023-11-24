import React from 'react';
import "./App.scss"

import ProductList from './ProductList';
import Navigation from './Navigation';
import { RotatingBanner } from './Banner';


function App() {
  return (
    <div>
      <Navigation />
      <RotatingBanner />
      <ProductList />
    </div>
  );
}

export default App;
