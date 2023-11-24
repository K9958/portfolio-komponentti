import React from 'react';
import "./App.scss"

import Navigation from './Navigation';
import Footer from './Footer';

import { Outlet } from 'react-router-dom';

import ErrorElement from './routes/ErrorElement';


function App(params) {

  return (
    <div>
      <Navigation />
      <Outlet />
      {params.error ? <ErrorElement /> : null}
      <Footer />
    </div>
  );
}

export default App;