// redux/Store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice'; // Ensure this path is correct

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
