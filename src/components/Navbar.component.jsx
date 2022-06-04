import React from 'react';
import { useSelector } from 'react-redux';

import { CartIcon } from '../icons';

function Navbar() {
  const { cartCount } = useSelector((state) => state.cart);
  return (
    <header>
      <nav className="nav-center">
        <h3>Redux Toolkit</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{cartCount}</p>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
