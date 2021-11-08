import { createAction, handleActions } from "redux-actions";

//타입지정
const SIGNINREQUEST = "SignIn/SIGNINREQUEST";
//액션함수
export const signIn = (value: any) => ({ type: SIGNINREQUEST, value });
//초기상태
const initialState = {
  email: "",
  password: "",
};
