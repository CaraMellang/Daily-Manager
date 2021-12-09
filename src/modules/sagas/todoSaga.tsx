import axios from "axios";
import dayjs from "dayjs";
import { call, put } from "redux-saga/effects";
import { backPath } from "../../lib/HttpPath";
import { TODOS_FAILED, TODOS_SUCCESS } from "../redux/Todos";

async function postGetTodoData(data: any) {
  console.log("포스트 투두 사가실행확인");
  return await axios.post(`${backPath}/todo/read`, data);
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
    console.log("왜이래임마", e);
    yield put(TODOS_FAILED(e));
  }
}

// async function postCreateTodoData(data:any) {
//   console.log("이잉 gg",data)
// }

// function* postCreateTodoSaga(action:any):Generator{
//   try{
//     const {data:{data}}:any = yield call(postCreateTodoData,action.payload)

//     console.log("createTOdo",data)
//     yield put
//   }catch(e){
//     console.log(e)
//   }
// }
