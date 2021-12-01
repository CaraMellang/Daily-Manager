import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todosLoading: true,
  todosSuccess: false,
  todosError: "",
  todos: [
    {},
    // {
    //   createdAt: new Date(),
    //   creatorId: {
    //     _id: "string",
    //     name: "string",
    //     email: "string",
    //     password: "string",
    //     createdAt: new Date(),
    //   },
    //   success: false,
    //   todo: "string",
    //   updatedAt: new Date(),
    //   _id: "string",
    // },
    // {
    // userId: "기본,,?",
    // email: "",
    // username: "",
    // createdAt: "",
    // accessToken: "",
    // },
  ],
  // username: "",
  // createdAt: "",
};

const todosSlice = createSlice({
  name: "todosReducer",
  initialState,
  reducers: {
    TODOS_REQUEST: (state, action) => {
      console.log("리퀘스트발생!!!!");
      state.todosLoading = true;
      state.todosSuccess = false;
      state.todosError = "";
    },
    TODOS_SUCCESS: (state, action) => {
      console.log("액션", action);

      state.todos = [];
      action.payload.forEach((arr: any) => {
        console.log(arr);
        const data = {
          ...arr,
          // _id: arr._id,
          // createdAt: arr.createdAt,
          // creatorId: {
          //   _id: arr.creatorId._id,
          //   name: arr.creatorId.name,
          //   email: arr.creatorId.email,
          //   password: arr.creatorId.password,
          //   createdAt: arr.creatorId.createdAt,
          // },
          // success: arr.success,
          // todo: arr.todo,
          // updatedAt: arr.updatedAt,
        };
        // const data = {
        //   _id: arr._id,
        //   createdAt: arr.createdAt,
        //   // createdAt: new Date(arr.createdAt.slice(0, 19)),
        //   creatorId: {
        //     _id: arr.creatorId._id,
        //     name: arr.creatorId.name,
        //     email: arr.creatorId.email,
        //     password: arr.creatorId.password,
        //     createdAt: arr.creatorId.createdAt,
        //   },
        //   success: arr.success,
        //   todo: arr.todo,
        //   updatedAt: arr.updatedAt,
        //   //   updatedAt: new Date(arr.updatedAt.slice(0, 19)),
        // };
        state.todos.push(data);
      });
      console.log("버근가?", state.todos);
      state.todosLoading = false;
      state.todosSuccess = true;
      state.todosError = "";
    },
    TODOS_FAILED: (state, action) => {
      console.log("액션", action);
      state.todosLoading = false;
      state.todosSuccess = false;
      state.todosError = ""; //몰?루
      //   state.todosError = action.payload.error;
    },

    // TODOS_CREATE_REQUEST: (state, action) => {},
    // TODOS_CREATE_SUCCESS: (state, action) => {},
    // TODOS_CREATE_FAILED: (state, action) => {},

    // TODOS_DELETE_REQUEST: (state, action) => {},
    // TODOS_DELETE_SUCCESS: (state, action) => {},
    // TODOS_DELETE_FAILED: (state, action) => {},

    // TODOS_UPDATE_REQUEST: (state, action) => {},
    // TODOS_UPDATE_SUCCESS: (state, action) => {},
    // TODOS_UPDATE_FAILED: (state, action) => {},
  },
});

const todosSliceReducer = todosSlice.reducer;

export const {
  TODOS_REQUEST,
  TODOS_SUCCESS,
  TODOS_FAILED,
  // TODOS_CREATE_REQUEST,
  // TODOS_CREATE_SUCCESS,
  // TODOS_CREATE_FAILED,
  // TODOS_DELETE_REQUEST,
  // TODOS_DELETE_SUCCESS,
  // TODOS_DELETE_FAILED,
  // TODOS_UPDATE_REQUEST,
  // TODOS_UPDATE_SUCCESS,
  // TODOS_UPDATE_FAILED,
} = todosSlice.actions;

export default todosSliceReducer;
