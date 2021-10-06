import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import 

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    fee: shippingFeeReducer;
  },
})