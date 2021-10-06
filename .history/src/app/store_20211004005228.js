import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
impo

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    fee: shippingFeeReducer;
  },
})