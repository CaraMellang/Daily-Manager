import axios from "axios";
import { call, put } from "redux-saga/effects";
import { backPath } from "../../lib/HttpPath";
import { SIGNIN_FAILED, SIGNIN_SUCCESS } from "../redux/User";


async function postUserData(data: any) {
  console.log("아 gg", data);
  return await axios.post(`${backPath}/auth/signin`, data);
}

export function* postUser(action: any): Generator {
  try {
    const { data }: any = yield call(postUserData, action.payload);
    yield put(SIGNIN_SUCCESS(data));
  } catch (e) {
    console.log("아니", e);
    yield put(SIGNIN_FAILED(e));
  }
}
