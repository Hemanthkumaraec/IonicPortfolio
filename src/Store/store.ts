import { configureStore } from '@reduxjs/toolkit';
import detailReducer from './Slice/detailSlice';
import pageReducer from './Slice/pageSlice';

const store = configureStore({
  reducer: {
    details: detailReducer,
    page: pageReducer,

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
