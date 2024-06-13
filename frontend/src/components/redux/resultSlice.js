import { createSlice } from '@reduxjs/toolkit';

const resultSlice = createSlice({
  name: 'result',
  initialState: {
    results: []
  },
  reducers: {
    saveResult: (state, action) => {
      state.results.push(action.payload);
    },
    deleteResult: (state, action) => {
      state.results.splice(action.payload, 1);
    }
  }
});

export const { saveResult, deleteResult } = resultSlice.actions;

export default resultSlice.reducer;
