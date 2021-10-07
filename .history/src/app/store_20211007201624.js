import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import deliveryReducer from './shippingFeeSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    delivery: deliveryReducer,
    return
  },
})