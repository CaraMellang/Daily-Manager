import axios from "axios";
import dayjs from "dayjs";
import { call, put } from "redux-saga/effects";
import { TODOS_FAILED, TODOS_SUCCESS } from "../redux/Todos";

async function postGetTodoData(data: any) {
  // console.log("아 gg", data);
  return await axios.post("http://localhost:5000/todo/read", data);
}

export function* postGetTodoSaga(action: any): Generator {
  console.log(action);
  try {
    const {
      data: { data },
    }: any = yield call(postGetTodoData, action.payload);
    console.log("todos", data);
    const result = data.map((arr: any) => {
      console.log("아니", typeof arr.createdAt);
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
    console.log("리절트임ㅎㅇ", result);
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
