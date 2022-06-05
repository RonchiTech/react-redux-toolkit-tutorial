import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { openModal } from '../modal/modalSlice';
// import cartItems from '../../cartItems';

const CART_URL = 'https://course-api.com/react-useReducer-cart-project';

export const getCartItems = createAsyncThunk(
  'cart/getCartItems',
  (_, thunkAPI) => {
    console.log(thunkAPI);
    //Access other state values
    // console.log('thunkAPI', thunkAPI.getState());

    //can use dispatch (example: opening the modal)
    // thunkAPI.dispatch(openModal());

    async function getItems() {
      try {
        const response = await fetch(CART_URL);
        const data = await response.json();
        // console.log(data);
        return data;
      } catch (error) {
        // console.log(error);
        // throw new Error('Something went wrong...' + error);
        return thunkAPI.rejectWithValue('Something went wrong...')
      }
    }
    return getItems();
    // return fetch(CART_URL)
    //   .then((response) => response.json())
    //   .catch((error) => console.log(error));
  }
);

const initialState = {
  cartItems: [],
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
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, action) => {
      const cartItem = state.cartItems.find((item) => {
        return item.id === action.payload;
      });
      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotals: (state) => {
      let cartCount = 0;
      let totalPrice = 0;
      state.cartItems.forEach((item) => {
        cartCount += item.amount;
        totalPrice += item.amount * item.price;
      });
      state.cartCount = cartCount;
      state.totalPrice = totalPrice;
    },
  },
  extraReducers: {
    [getCartItems.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.cartItems = action.payload;
    },
    [getCartItems.rejected]: (state, action) => {
      console.log(action);
      state.isLoading = false;
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
