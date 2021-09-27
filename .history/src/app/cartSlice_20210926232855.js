import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  quantity: 10,
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
export const { increment, decrement, incrementByAmount } = cartSlice.actions

export default cartSlice.reducer