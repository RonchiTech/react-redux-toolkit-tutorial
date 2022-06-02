import React, { useEffect } from 'react';
import CartItem from '../components/CartItem.component';

import { useSelector } from 'react-redux';

function CartContainer() {
  const { cartItems, amount, total, isLoading } = useSelector(
    (state) => state.cart
  );
  useEffect(() => {
    console.log(cartItems);
  });
  if (!cartItems.length) {
    return (
      <section>
        <header>
          <h2>Your Bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <h2>Your bag</h2>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button className="btn clear-btn">Clear Cart</button>
      </footer>
    </section>
  );
}

export default CartContainer;
