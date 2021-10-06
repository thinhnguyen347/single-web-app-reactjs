import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shippingFee: 25000,
  totalBill: 0,
};

export const deliverySlice = createSlice({
  name: "shippingFee",
  initialState,
  reducers: {
    shippingFeeToHome: (state) => {
      state.shippingFee = 25000;
    },
    getOrderOnSite: (state) => {
      state.shippingFee = 0;
    },
  },
});

export const { shippingFeeToHome, getOrderOnSite } = deliverySlice.actions;

export default deliverySlice.reducer;
