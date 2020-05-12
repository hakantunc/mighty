/* eslint-disable no-param-reassign */
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
    col: 0,
  },
};

const flatTorusSlice = createSlice({
  name: 'flatTorusSlice',
  initialState,
  reducers: {
    goNorth: (state) => {
      state.position.row = (state.position.row + size - 1) % size;
    },
    goSouth: (state) => {
      state.position.row = (state.position.row + size + 1) % size;
    },
    goWest: (state) => {
      state.position.col = (state.position.col + size - 1) % size;
    },
    goEast: (state) => {
      state.position.col = (state.position.col + size + 1) % size;
    },
  },
});

export const {
  goNorth, goSouth, goWest, goEast,
} = flatTorusSlice.actions;

export default flatTorusSlice.reducer;
