import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { SIGNIN_FAILED, SIGNIN_SUCCESS } from "../redux/User";
import { postGetTodoSaga } from "./todoSaga";
import { postUser, verifyUser } from "./userSaga";

const userSignInRequestType = "userReducer/SIGNIN_REQUEST";
const todoPostReadRequestType = "todosReducer/TODOS_REQUEST"; //read
const userVerifySigninRequestType = "userReducer/VERIFY_REQUEST"

function* mySaga() {
  yield takeLatest(userSignInRequestType, postUser);
  yield takeLatest(todoPostReadRequestType, postGetTodoSaga);
  yield  takeLatest(userVerifySigninRequestType,verifyUser)
}

export default mySaga;
