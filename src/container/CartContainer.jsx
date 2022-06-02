import React, { useEffect } from 'react';
import CartItem from '../components/CartItem.component';
import { clearCart } from '../features/cart/cartSlice';
import { useSelector, useDispatch } from 'react-redux';

function CartContainer() {
  const { cartItems, amount, total, isLoading } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  const onCartClearHandler = () => {
    dispatch(clearCart());
  };

  useEffect(() => {
    console.log(cartItems);
  });
  if (!cartItems.length) {
    return (
      <section className="cart">
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
        <button className="btn clear-btn" onClick={onCartClearHandler}>
          Clear Cart
        </button>
      </footer>
    </section>
  );
}

export default CartContainer;
