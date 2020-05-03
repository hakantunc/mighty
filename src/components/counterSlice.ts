import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: state => state + 1,
    reset: () => 0
  }
});

export const { increment, reset } = counterSlice.actions;
export default counterSlice.reducer;
