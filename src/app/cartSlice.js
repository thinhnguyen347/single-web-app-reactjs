import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateCart: (state) => {
      let cart_current = window.localStorage.getItem("cart");
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

export const { updateCart } = cartSlice.actions;

export default cartSlice.reducer;
