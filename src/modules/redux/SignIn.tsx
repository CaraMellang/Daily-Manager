import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginLoading: true,
  loginSucceed: false,
  loginError: null,
  user: { username: "", createdAt: "" },
};
const userSlice = createSlice({
  name: "signInReducer",
  initialState,
  reducers: {
    signin: (state, action) => {
      //   state.push({
      //     email: action.payload.email,
      //     password: action.payload.password,
      //   });
      console.log(action);
      const username = action.payload.username;
      const createdAt = action.payload.createdAt;
      state.user.username = username;
      state.user.createdAt = createdAt;
    },
  },
});

const userSliceReducer = userSlice.reducer;

export const { signin } = userSlice.actions;

export default userSliceReducer;
