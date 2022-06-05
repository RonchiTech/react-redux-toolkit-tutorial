import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';

import { calculateTotals, getCartItems } from './features/cart/cartSlice';

import CartContainer from './container/CartContainer';

import Navbar from './components/Navbar.component';
import Modal from './components/Modal.component';

import './App.css';

function App() {
  const { cartItems, isLoading } = useSelector((state) => state.cart);
  const { isModalOpen } = useSelector((state) => state.modal);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItems());
  }, []);
  
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <main>
      {isModalOpen &&
        createPortal(<Modal />, document.getElementById('portal'))}
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
