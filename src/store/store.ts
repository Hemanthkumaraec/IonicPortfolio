import { configureStore } from "@reduxjs/toolkit";
import portfolioReducer from "./dataSlice";
import contactReducer from "./contactSlice";

export const store = configureStore({
  reducer: {
    portfolio: portfolioReducer,
    contact: contactReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
