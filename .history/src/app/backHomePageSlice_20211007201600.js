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
    resetBackHome: (state) => {      
        state.backHomePage = false;
      },
    
  },
});

export const { backHome } = backHomePageSlice.actions;

export default backHomePageSlice.reducer;
