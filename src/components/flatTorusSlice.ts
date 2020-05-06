import { createSlice } from '@reduxjs/toolkit';

interface FlatTorus {
  width: number,
  height: number,
  position: {
    row: number,
    col: number
  }
}

const size = 11;

const initialState: FlatTorus = {
  width: size,
  height: size,
  position: {
    row: 0,
    col: 0
  }
}

const flatTorusSlice = createSlice({
  name: 'flatTorusSlice',
  initialState: initialState,
  reducers: {
  }
});

export default flatTorusSlice.reducer;
