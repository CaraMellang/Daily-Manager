import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { TODOS_FAILED, TODOS_SUCCESS } from "../redux/Todos";

async function postTodoData(data: any) {
  console.log("아 gg", data);
  return await axios.post("http://localhost:5000/todo/read", data);
}

export function* postTodoSaga(action: any): Generator {
  console.log(action);
  try {
    const { data:{data} }: any = yield call(postTodoData, action.payload);
    console.log("todos", data);
    yield put(TODOS_SUCCESS(data));
  } catch (e) {
    console.log("왜이래임마", e);
    yield put(TODOS_FAILED(e));
  }
}
