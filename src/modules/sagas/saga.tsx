import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { SIGNIN_FAILED, SIGNIN_SUCCESS } from "../redux/User";
import { postGetTodoSaga } from "./todoSaga";
import { postUser } from "./userSaga";

const userSignInRequestType = "userReducer/SIGNIN_REQUEST";
const todoPostReadRequestType = "todosReducer/TODOS_REQUEST"; //read

function* mySaga() {
  yield takeLatest(userSignInRequestType, postUser);
  yield takeLatest(todoPostReadRequestType, postGetTodoSaga);
}

export default mySaga;
