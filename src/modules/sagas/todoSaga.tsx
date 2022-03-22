import axios from "axios";
import dayjs from "dayjs";
import { call, put } from "redux-saga/effects";
import { backPath } from "../../lib/HttpPath";
import { TODOS_FAILED, TODOS_SUCCESS } from "../redux/Todos";

async function postGetTodoData(data: any) {
  return await axios.post(`${backPath}/todo/read`, {userId:data.userId},{headers:{authorization:`bearer ${data.accessToken}`}});
}

export function* postGetTodoSaga(action: any): Generator {
  try {
    const {
      data: { data },
    }: any = yield call(postGetTodoData, action.payload);
    const result = data.map((arr: any) => {
      const createdAt = dayjs(new Date(arr.createdAt))
        .add(-9, "hour")
        .format("YYYY-MM-DDTHH:mm:ss");
      const updatedAt = dayjs(new Date(arr.updatedAt))
        .add(-9, "hour")
        .format("YYYY-MM-DDTHH:mm:ss");
      return {
        ...arr,
        createdAt: new Date(createdAt),
        updatedAt: new Date(updatedAt),
      };
    });
    yield put(TODOS_SUCCESS(result));
  } catch (e) {
    yield put(TODOS_FAILED(e));
  }
}
