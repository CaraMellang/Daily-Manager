import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signinLoading: true,
  signinSucceed: false,
  signinError: null,
  user: {
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
      state.signinLoading = true;
      state.signinLoading = false;
      state.signinError = null;
    },
    SIGNIN_SUCCESS: (state: any, action: any) => {
      console.log("후,,");
      console.log(action.payload.accessToken);
      state.signinLoading = false;
      state.signinSucceed = true;
      // state.username = action.payload.username;
      // state.createdAt = action.payload.createdAt;
      //왜 오류났따가 안나는지 모르겠음
      //방법 1
      state.user.accessToken = action.payload.accessToken;
      state.user.username = action.payload.username;
      state.user.createdAt = action.payload.createdAt;
      //방법 2
      // state.user = action.payload;
      //방법 3
      //그냥 user객체 빼버리고 외부로 풀어버리기
      console.log(state.user.createdAt);
    },
    SIGNIN_FAILED: (state, action) => {
      console.log("zzzzzzzzz");
      console.log(action);
      state.signinSucceed = false;
      state.signinLoading = false;
      state.signinError = action.payload.error;
    },
  },
});

const userSliceReducer = userSlice.reducer;

export const { SIGNIN_REQUEST, SIGNIN_SUCCESS, SIGNIN_FAILED } =
  userSlice.actions;

export default userSliceReducer;
