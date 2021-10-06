import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import shippingFeeReducer from

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    fee: shippingFeeReducer;
  },
})