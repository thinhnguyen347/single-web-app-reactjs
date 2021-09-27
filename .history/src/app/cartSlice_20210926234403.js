import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  quantity: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    
    updateCart: (state, action) => {
        let cart_current = localStorage.getItem("cart");
      if (cart_current.length > 0) {
        let cart_obj = JSON.parse(cart_current);
        
      } else {
        localStorage.setItem("cart", JSON.stringify(addedItems.current));
      }
      state.quantity = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateCart } = cartSlice.actions

export default cartSlice.reducer