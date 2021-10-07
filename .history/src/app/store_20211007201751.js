import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import deliveryReducer from './shippingFeeSlice';
import backHomePageReducer from "./backHomePageSlice"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    delivery: deliveryReducer,
    returnHome: ba
  },
})