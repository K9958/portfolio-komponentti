import React, { useState } from 'react';
import "./App.scss"

import Navigation from './Navigation';
import Footer from './Footer';

import { Outlet } from 'react-router-dom';

import ErrorElement from './routes/ErrorElement';


function App(params) {
  const [cartItemIds, setCartItemIds] = useState([]);

  return (
    <div>
      <Navigation />
      <Outlet cartItemIds={cartItemIds}/>
      {params.error ? <ErrorElement /> : null}
      <Footer />
    </div>
  );
}

export default App;