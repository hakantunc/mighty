import {
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';

import counterSliceReducer from './components/counterSlice';
import flatTorusSliceReducer from './components/flatTorusSlice';

export const store = configureStore({
  reducer: combineReducers({
    counter: counterSliceReducer,
    board: flatTorusSliceReducer,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
