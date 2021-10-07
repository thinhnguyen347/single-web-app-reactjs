import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
};

export const backHomePageSlice = createSlice({
  name: "backHomePage",
  initialState,
  reducers: {
    backHome: (state) => {      
      state.backHomePage = true;
    },
    resetBackHome: (state) => {      
        state.backHomePage = false;
      },
    
  },
});

export const { backHome, resetBackHome } = backHomePageSlice.actions;

export default backHomePageSlice.reducer;
