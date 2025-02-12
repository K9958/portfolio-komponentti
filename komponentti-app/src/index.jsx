import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Home from './routes/Home';
import Cart from './routes/Cart';
import ProductPage from './routes/ProductPage';
import Categories from './routes/Categories';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";


// redux
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import storeReducer from './storeSlice'
import Aboutus from './routes/Aboutus';

const localStorageKey = 'shoppingCart';

const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(localStorageKey, serializedState);
  } catch(e) {
    console.warn(e);
  }
}

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem(localStorageKey);
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch(e) {
    console.warn(e);
    return undefined;
  }
}

const store = configureStore({
  reducer: {
    cart: storeReducer,
  },
    preloadedState: loadFromLocalStorage(),
})

store.subscribe(() => {
  saveToLocalStorage({
    cart: store.getState().cart,
  });
});

// react router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<App error={true}/>}>
      <Route element={<Home />} index="true" />
      <Route path="/product/:productId" element={<ProductPage />} />
      <Route path="categories/:category" element={<Categories />} />
      <Route path="aboutus" element={<Aboutus />} />
      <Route
        path="cart"
        element={<Cart />} />
    </Route>
  ),
);

// render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
