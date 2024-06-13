import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import resultReducer from './resultSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    result: resultReducer
  }
});
