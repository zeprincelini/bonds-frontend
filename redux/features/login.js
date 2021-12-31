import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  user: null,
  id: null,
  loading: false,
  error: null,
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
      // localStorage.setItem("user", JSON.stringify(state.user));
      // localStorage.setItem("token", JSON.stringify(state.token));
    },
    loginFail: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      console.log(state.error);
    },
  },
});

export const { loginStart, loginSuccess, loginFail } = loginSlice.actions;
export default loginSlice.reducer;
