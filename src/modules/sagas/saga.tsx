import { takeLatest } from "redux-saga/effects";
import { postGetTodoSaga } from "./todoSaga";
import { postUser, verifyUser } from "./userSaga";

const userSignInRequestType = "userReducer/SIGNIN_REQUEST";
const todoPostReadRequestType = "todosReducer/TODOS_REQUEST";
const userVerifySigninRequestType = "userReducer/VERIFY_REQUEST"

function* mySaga() {
  yield takeLatest(userSignInRequestType, postUser);
  yield takeLatest(todoPostReadRequestType, postGetTodoSaga);
  yield  takeLatest(userVerifySigninRequestType,verifyUser)
}

export default mySaga;
