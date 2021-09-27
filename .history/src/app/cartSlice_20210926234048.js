import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  quantity: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    
    incrementByAmount: (state, action) => {
      state.quantity += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { incrementByAmount } = cartSlice.actions

export default cartSlice.reducer