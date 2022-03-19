import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  user: null,
  id: null,
  loading: false,
  // error: null,
  // errorStatus: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      const { accessToken } = state.user;
      const { id } = state.user;
      state.token = accessToken;
      state.id = id;
    },
    loginFail: (state) => {
      // state.errorStatus = true;
      // state.error = action.payload;
      state.loading = false;
    },
    logOut: () => initialState,
  },
});

export const { loginStart, loginSuccess, loginFail, logOut } =
  loginSlice.actions;
export default loginSlice.reducer;
