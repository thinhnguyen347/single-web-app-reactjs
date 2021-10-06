import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fee: 25000,
};

export const shippingFeeSlice = createSlice({
  name: "shippingFee",
  initialState,
  reducers: {
    updateFee: (state) => {
     
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateCart } = shippingFeeSlice.actions;

export default cartSlice.reducer;
