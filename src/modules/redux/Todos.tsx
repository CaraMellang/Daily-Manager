import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todosLoading: true,
  todosSuccess: false,
  todosError: "",
  todos: [{}],
};

const todosSlice = createSlice({
  name: "todosReducer",
  initialState,
  reducers: {
    TODOS_REQUEST: (state, action) => {
      state.todosLoading = true;
      state.todosSuccess = false;
      state.todosError = "";
      state.todos = [];
    },
    TODOS_SUCCESS: (state, action) => {
      action.payload.forEach((arr: any) => {
        const data = {
          ...arr,
        };
        state.todos.push(data);
      });
      state.todosLoading = false;
      state.todosSuccess = true;
      state.todosError = "";
    },
    TODOS_FAILED: (state, action) => {
      state.todosLoading = false;
      state.todosSuccess = false;
      state.todosError = ""; 
    },
  },
});

const todosSliceReducer = todosSlice.reducer;

export const { TODOS_REQUEST, TODOS_SUCCESS, TODOS_FAILED } =
  todosSlice.actions;

export default todosSliceReducer;
