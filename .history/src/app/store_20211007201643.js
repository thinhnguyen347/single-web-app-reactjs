import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import deliveryReducer from './shippingFeeSlice';
im

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    delivery: deliveryReducer,
    returnHome: 
  },
})