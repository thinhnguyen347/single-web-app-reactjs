import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import deliveryReducer from './shippingFeeSlice';
import backHomePage

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    delivery: deliveryReducer,
    returnHome: 
  },
})