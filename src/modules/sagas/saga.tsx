import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { SIGNIN_FAILED, SIGNIN_SUCCESS } from "../redux/User";

const userSignInRequestType = "userReducer/SIGNIN_REQUEST";

async function postUserData(data: any) {
  console.log("아 gg", data);
  return await axios.post("http://localhost:5000/auth/signin", data);
}

function* postUser(action: any): Generator {
  try {
    console.log(action.payload);
    const { data }: any = yield call(postUserData, action.payload);
    console.log("user", data);
    // yield put({
    //   type: "signInReducer/SIGNIN_SUCCESS",
    //   payload: data,
    // });
    yield put(SIGNIN_SUCCESS(data));
  } catch (e) {
    console.log("아니", e);
    yield put(SIGNIN_FAILED(e));
    // yield put({ type: "signInReducer/SIGNIN_FAILED", payload: e });
  }
}

function* mySaga() {
  yield takeLatest(userSignInRequestType, postUser);
}

export default mySaga;
