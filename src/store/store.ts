import { configureStore } from "@reduxjs/toolkit";
import portfolioReducer from "./dataSlice";
import contactReducer from "./contactSlice";
import aboutReducer from "./aboutSlice";
import skillsReducer from "./skillsSlice"

export const store = configureStore({
  reducer: {
    portfolio: portfolioReducer,
    contact: contactReducer,
    about: aboutReducer,
    skills: skillsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
