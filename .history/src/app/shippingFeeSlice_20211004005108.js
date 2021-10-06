import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fee: 25000,
};

export const shippingFeeSlice = createSlice({
  name: "shippingFee",
  initialState,
  reducers: {
    updateFee: (state) => {
      let cart_current = localStorage.getItem("cart");
      let amount;
      if (cart_current.length > 0) {
        let cart_obj = JSON.parse(cart_current);
        amount = cart_obj.length;
      } else {
        amount = 0;
      }
      state.quantity = amount;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateCart } = cartSlice.actions;

export default cartSlice.reducer;
