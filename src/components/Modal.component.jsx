import React from 'react';
import { useDispatch } from 'react-redux';
import { clearCart } from '../features/cart/cartSlice';
import { closeModal } from '../features/modal/modalSlice';

const Modal = () => {
  const dispatch = useDispatch();
  const onClearModal = () => {
    dispatch(clearCart());
    dispatch(closeModal());
  };
  const onCloseModal = () => {
    dispatch(closeModal());
  };
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Remove all items from your shopping cart?</h4>
        <div className="btn-container">
          <button className="btn confirm-btn" onClick={onClearModal}>
            Confirm
          </button>
          <button className="btn clear-btn" onClick={onCloseModal}>
            Cancel
          </button>
        </div>
      </div>
    </aside>
  );
};

// const Modal = () => {
//   return createPortal(<ModalOverlay />, document.getElementById('portal'));
// };

export default Modal;
