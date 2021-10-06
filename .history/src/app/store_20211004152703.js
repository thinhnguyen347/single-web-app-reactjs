import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import shippingFeeReducer from './shippingFeeSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    shippingfee: shippingFeeReducer,
  },
})