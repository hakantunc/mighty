import { configureStore } from '@reduxjs/toolkit';
import counterSliceReducer from './components/counterSlice';

export const store = configureStore({
  reducer: counterSliceReducer
});

export type RootState = ReturnType<typeof store.getState>;
