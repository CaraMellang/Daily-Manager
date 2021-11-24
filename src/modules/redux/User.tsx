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
  // username: "",
  // createdAt: "",
};
const userSlice = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    SIGNIN_REQUEST: (state, action) => {
      console.log("SIGNIN_REQUEST Reducer");
      state.signinLoading = true;
      state.signinLoading = false;
      state.signinError = null;
    },
    SIGNIN_SUCCESS: (state: any, action: any) => {
      console.log("SIGNIN_SUCCESS Reducer");
      console.log(action.payload.data);
      state.signinLoading = false;
      state.signinSucceed = true;
      // state.username = action.payload.username;
      // state.createdAt = action.payload.createdAt;
      //왜 오류났따가 안나는지 모르겠음
      //방법 1
      // state.user.userId = action.payload.userId;
      // state.user.accessToken = action.payload.accessToken;
      // state.user.email = action.payload.email;
      // state.user.username = action.payload.username;
      // state.user.createdAt = action.payload.createdAt;
      state.user.userId = action.payload.data.userId;
      state.user.accessToken = action.payload.data.accessToken;
      state.user.email = action.payload.data.email;
      state.user.username = action.payload.data.username;
      state.user.createdAt = action.payload.data.createdAt;
      //방법 2
      // state.user = action.payload;
      //방법 3
      //그냥 user객체 빼버리고 외부로 풀어버리기
      console.log(action.payload.data.email);
      console.log(state.user.userId);
      console.log(state.user.accessToken);
      console.log(state.user.email);
      console.log(state.user.username);
      console.log(state.user.createdAt);
    },
    SIGNIN_FAILED: (state, action) => {
      console.log("SIGNIN_FAILED Reducer");
      console.log(action);
      state.signinSucceed = false;
      state.signinLoading = false;
      state.signinError = action.payload.error;
    },
    SIGNOUT: (state: any) => {
      console.log("SIGNOUT Reducer");
      // state.signinLoading = false;
      state.signinSucceed = false;
      // state.username = action.payload.username;
      // state.createdAt = action.payload.createdAt;
      //왜 오류났따가 안나는지 모르겠음
      //방법 1
      state.user.accessToken = "";
      state.user.email = "";
      state.user.username = "";
      state.user.createdAt = "";
      //방법 2
      // state.user = action.payload;
      //방법 3
      //그냥 user객체 빼버리고 외부로 풀어버리기
    },
  },
});

const userSliceReducer = userSlice.reducer;

export const { SIGNIN_REQUEST, SIGNIN_SUCCESS, SIGNIN_FAILED, SIGNOUT } =
  userSlice.actions;

export default userSliceReducer;
