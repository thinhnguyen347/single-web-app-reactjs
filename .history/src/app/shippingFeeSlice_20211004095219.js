import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fee: 25000,
};

export const shippingFeeSlice = createSlice({
  name: "shippingFee",
  initialState,
  reducers: {
    shippingFeeToHome: (state) => {
     state.fee= 25000
    },
    getOrderOnSite: (state) => {
        state.fee= 0
       },
  },
});

// Action creators are generated for each case reducer function
export const { shippingFeeToHome,getOrderOnSite } = shippingFeeSlice.actions;

export default shippingFeeSlice.reducer;
