import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
};

export const backHomePageSlice = createSlice({
  name: "backHomePage",
  initialState,
  reducers: {
    backHome: (state) => {
      state.status = true;
      
    },
    resetBackHome: (state) => {
      state.status = false;
      console.log(state.status);
    },
  },
});

export const { backHome, resetBackHome } = backHomePageSlice.actions;

export default backHomePageSlice.reducer;
