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
    shippingFeeToHome: (state) => {
        state.fee= 25000
       },
  },
});

// Action creators are generated for each case reducer function
export const { updateShippingFee } = shippingFeeSlice.actions;

export default shippingFeeSlice.reducer;
