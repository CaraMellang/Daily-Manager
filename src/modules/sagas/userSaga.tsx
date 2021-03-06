import axios from "axios";
import { call, put } from "redux-saga/effects";
import { backPath } from "../../lib/HttpPath";
import {
  SIGNIN_FAILED,
  SIGNIN_SUCCESS,
  VERIFY_FAILED,
  VERIFY_SUCCESS,
} from "../redux/User";

async function postUserData(data: any) {
  return await axios.post(`${backPath}/auth/signin`, data);
}

export function* postUser(action: any): Generator {
  try {
    const { data }: any = yield call(postUserData, action.payload);
    yield put(SIGNIN_SUCCESS(data));
  } catch (e) {
    yield put(SIGNIN_FAILED(e));
  }
}

async function verifyUserData(data: any) {
  return await axios.post(`${backPath}/auth/verify`, ".", {
    headers: { Authorization: `bearer ${data}` },
  });
}

export function* verifyUser(action: any): Generator {
  try {
    const { data }: any = yield call(verifyUserData, action.payload);
    yield put(VERIFY_SUCCESS(data));
  } catch (err) {
    yield put(VERIFY_FAILED(err));
  }
}
