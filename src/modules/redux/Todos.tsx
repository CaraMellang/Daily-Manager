import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todosLoading: true,
  todosSucceed: false,
  todosError: null,
  todos: [
    {
      // userId: "기본,,?",
      // email: "",
      // username: "",
      // createdAt: "",
      // accessToken: "",
    },
  ],
  // username: "",
  // createdAt: "",
};

const todosSlice = createSlice({
  name: "todosReducer",
  initialState,
  reducers: {
    TODOS_REQUEST: (state, action) => {
      state.todosLoading = true;
      state.todosSucceed = false;
      state.todosError = null;
    },
    TODOS_SUCCESS: (state, action) => {
      console.log("액션", action);

      console.log("아니어레이", action.payload[1]);
      state.todos = [];
      action.payload.forEach((arr: any) => {
        const data = {
          _id: arr._id,
          createdAt: new Date(arr.createdAt.slice(0, 19)),
          creatorId: {
            _id: arr.creatorId._id,
            name: arr.creatorId.name,
            email: arr.creatorId.email,
            password: arr.creatorId.password,
            createdAt: arr.creatorId.createdAt,
          },
          success: arr.success,
          todo: arr.todo,
          updatedAt: arr.updatedAt
            ? new Date(arr.updatedAt.slice(0, 19))
            : null,
          //   updatedAt: new Date(arr.updatedAt.slice(0, 19)),
        };
        console.log(data);
        state.todos.push(data);
      });
      state.todosLoading = false;
      state.todosSucceed = true;
      state.todosError = null;
    },
    TODOS_FAILED: (state, action) => {
      console.log("액션", action);
      state.todosLoading = false;
      state.todosSucceed = false;
      state.todosError = null; //몰?루
      //   state.todosError = action.payload.error;
    },
  },
});

const todosSliceReducer = todosSlice.reducer;

export const { TODOS_REQUEST, TODOS_SUCCESS, TODOS_FAILED } =
  todosSlice.actions;

export default todosSliceReducer;
