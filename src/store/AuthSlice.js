// store/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authStart(state) {
      state.loading = true;
      state.error = null;
    },
    authSuccess(state, action) {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    authFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    signOut(state) {
      state.user = null;
      state.error = null;
    },
  },
});

export const { authStart, authSuccess, authFailure, signOut } = authSlice.actions;
export default authSlice.reducer;
