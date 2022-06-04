import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, increase, decrease } from '../features/cart/cartSlice';
import { ChevronDown, ChevronUp } from '../icons';

function CartItem({ id, title, price, img, quantity }) {

  const dispatch = useDispatch();

  const onRemoveHandler = () => {
    dispatch(removeItem(id));
  };

  const onIncreaseHandler = () => {
    dispatch(increase(id));
  };

  const onDecreaseHandler = () => {
    if (quantity === 1) {
      return dispatch(removeItem(id));
    }
    dispatch(decrease(id));
  };

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button className="remove-btn" onClick={onRemoveHandler}>
          Remove
        </button>
      </div>
      <div>
        <button className="amount-btn" onClick={onIncreaseHandler}>
          <ChevronUp />
        </button>
        <p className="amount">{quantity}</p>
        <button className="amount-btn" onClick={onDecreaseHandler}>
          <ChevronDown />
        </button>
      </div>
    </article>
  );
}

export default CartItem;
