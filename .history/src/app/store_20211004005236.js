import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import 
import 

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    fee: shippingFeeReducer;
  },
})