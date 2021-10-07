import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  backHomePage: false,
};

export const backHomePageSlice = createSlice({
  name: "backHomePage",
  initialState,
  reducers: {
    backHome: (state) => {      
      state.backHomePage = true;
    },
    backHome: (state) => {      
        state.backHomePage = true;
      },
    
  },
});

export const { updateCart } = cartSlice.actions;

export default cartSlice.reducer;
