import { createSlice } from "@reduxjs/toolkit";

const authFromStorage = localStorage.getItem("auth");

const initialState = authFromStorage
  ? JSON.parse(authFromStorage)
  : {
      user_id: null,
      username: null,
      access: null,
      refresh: null,
      isAuthenticated: false,
    };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user_id, username, access, refresh } = action.payload;

      state.user_id = user_id;
      state.username = username;
      state.access = access;
      state.refresh = refresh;
      state.isAuthenticated = true;

      localStorage.setItem("auth", JSON.stringify(state));
    },

    logout: (state) => {
      state.user_id = null;
      state.username = null;
      state.access = null;
      state.refresh = null;
      state.isAuthenticated = false;

      localStorage.removeItem("auth");
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;