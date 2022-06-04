import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';

import { calculateTotals } from './features/cart/cartSlice';

import CartContainer from './container/CartContainer';

import Navbar from './components/Navbar.component';
import Modal from './components/Modal.component';

import './App.css';

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const { isModalOpen } = useSelector((state) => state.modal);
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

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
