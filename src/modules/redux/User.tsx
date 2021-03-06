import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signinLoading: true,
  signinSucceed: false,
  signinError: null,
  user: {
    userId: "기본,,?",
    email: "",
    username: "",
    createdAt: "",
    accessToken: "",
  },
};
const userSlice = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    SIGNIN_REQUEST: (state, action) => {
      state.signinLoading = true;
      state.signinLoading = false;
      state.signinError = null;
    },
    SIGNIN_SUCCESS: (state: any, action: any) => {
      state.signinLoading = false;
      state.signinSucceed = true;
      state.user.userId = action.payload.data.userId;
      state.user.accessToken = action.payload.data.accessToken;
      state.user.email = action.payload.data.email;
      state.user.username = action.payload.data.username;
      state.user.createdAt = action.payload.data.createdAt;
    },
    SIGNIN_FAILED: (state, action) => {
      state.signinSucceed = false;
      state.signinLoading = false;
      state.signinError = action.payload.error;
    },
    SIGNOUT: (state: any) => {
      state.signinSucceed = false;
      state.user.accessToken = "";
      state.user.email = "";
      state.user.username = "";
      state.user.createdAt = "";
    },
    VERIFY_REQUEST: (state: any, action: any) => {
      state.signinLoading = true;
      state.signinLoading = false;
      state.signinError = null;
    },

    VERIFY_SUCCESS: (state: any, action: any) => {
      state.signinLoading = false;
      state.signinSucceed = true;
      state.user.userId = action.payload.userId;
      state.user.email = action.payload.email;
      state.user.username = action.payload.username;
      state.user.createdAt = action.payload.createdAt;
    },
    VERIFY_FAILED: (state: any, action: any) => {
      console.log(action);
      state.signinSucceed = false;
      state.signinLoading = false;
      state.signinError = action.payload.response.data;
    },
  },
});

const userSliceReducer = userSlice.reducer;

export const {
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNIN_FAILED,
  SIGNOUT,
  VERIFY_REQUEST,
  VERIFY_SUCCESS,
  VERIFY_FAILED,
} = userSlice.actions;

export default userSliceReducer;
