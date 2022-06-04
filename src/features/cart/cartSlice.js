import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../cartItems';

const initialState = {
  cartItems: cartItems,
  cartCount: 0,
  totalPrice: 0,
  isLoading: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    //same?
    // clearCart: (state) => {
    //   return { ...state, cartItems: [] };
    // },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => {
        return item.id !== itemId;
      });
    },
    increase: (state, action) => {
      console.log(action);
      const cartItem = state.cartItems.find((item) => {
        return item.id === action.payload;
      });
      cartItem.quantity = cartItem.quantity + 1;
    },
    decrease: (state, action) => {
      const cartItem = state.cartItems.find((item) => {
        return item.id === action.payload;
      });
      cartItem.quantity = cartItem.quantity - 1;
    },
    calculateTotals: (state) => {
      let cartCount = 0;
      let totalPrice = 0;
      state.cartItems.forEach((item) => {
        cartCount += item.quantity;
        totalPrice += item.quantity * item.pricert;
      });
      state.cartCount = cartCount;
      state.totalPrice = totalPrice;
    },
  },
});
console.log(cartSlice);
export const {
  clearCart,
  removeItem,
  increase,
  decrease,
  calculateTotals,
} = cartSlice.actions;
export default cartSlice.reducer;
