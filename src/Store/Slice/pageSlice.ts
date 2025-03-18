import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PageState {
  currentPage: string;
}

const initialState: PageState = {
  currentPage: "home",
};

const pageSlice = createSlice({
  name: "priya",
  initialState,
  reducers: {
    goToPortfolio: (state) => {
      state.currentPage = "priya";
    },
    goToAbout: (state) => {
      state.currentPage = "about";
    },
  },
});

export const { goToPortfolio,goToAbout } = pageSlice.actions;
export default pageSlice.reducer;
