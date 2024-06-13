import { createSlice } from '@reduxjs/toolkit';

const resultSlice = createSlice({
  name: 'result',
  initialState: {
    results: []
  },
  reducers: {
    saveResult: (state, action) => {
      state.results.push(action.payload);
    }
  }
});

export const { saveResult } = resultSlice.actions;

export default resultSlice.reducer;
