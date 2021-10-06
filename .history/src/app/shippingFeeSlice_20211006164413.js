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
      state.shippingFee = (state.totalBill >= 300000) ?  25000 :
    },
    getOrderOnSite: (state) => {
      state.shippingFee = 0;
    },
    updateBill: (state, amount) => {
      state.totalBill = amount.payload;
    },
  },
});

export const { shippingFeeToHome, getOrderOnSite, updateBill } =
  deliverySlice.actions;

export default deliverySlice.reducer;
