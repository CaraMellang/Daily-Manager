import axios from "axios";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { signin } from "../redux/SignIn";

async function postUserData(data: any) {
  console.log("아 tlqkf", data);
  return await axios.post("http://localhost:5000/auth/signin", data);
}

function* postUser(action: any): Generator {
  try {
    console.log(action.payload);
    const {
      data: { username, createdAt },
    }: any = yield call(postUserData, action.payload);

    console.log("user", username, createdAt);
    // yield put({ type: "signInReducer/signin", user });
    yield put({
      type: "signInReducer/signin",
      payload: { username, createdAt },
    });
  } catch (e) {
    yield console.log("아 에러네", e);
  }
}

function* mySaga() {
  yield takeLatest("signInReducer/signin", postUser);
}

export default mySaga;
