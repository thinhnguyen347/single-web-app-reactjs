import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fee: 0,
};

export const shippingFeeSlice = createSlice({
  name: "shippingFee",
  initialState,
  reducers: {
    shippingFeeToHome: (state) => {
      state.fee = 25000;
      console.log("Tăng");
    },
    getOrderOnSite: (state) => {
      state.fee = 0;
      console.log("Giảm");
    },
  },
});

export const { shippingFeeToHome, getOrderOnSite } = shippingFeeSlice.actions;

export default shippingFeeSlice.reducer;
