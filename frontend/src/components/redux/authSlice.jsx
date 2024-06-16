import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuthenticated: false,
    error: null,
    loading: false, // Add loading state
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.error = null; // Clear any previous errors
      state.loading = false; // Reset loading state
    },
    clearUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null; // Clear any previous errors
      state.loading = false; // Reset loading state
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false; // Reset loading state on error
    },
    setLoading: (state, action) => {
      state.loading = action.payload; // Manage loading state
    }
  }
});

export const { setUser, clearUser, setError, setLoading } = authSlice.actions;

export default authSlice.reducer;
