import React from 'react';
import { useSelector } from 'react-redux';

import { CartIcon } from '../icons';

function Navbar() {
  const { amount } = useSelector((state) => state.cart);
  console.log(amount);
  return (
    <header>
      <nav className="nav-center">
        <h3>Redux Toolkit</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
