import { combineReducers, configureStore } from '@reduxjs/toolkit';
import globals from './reducers/globals';

export const store = configureStore({
  reducer: combineReducers({
    globals,
  }),
});
