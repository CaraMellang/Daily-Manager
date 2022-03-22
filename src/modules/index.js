import { combineReducers } from "redux";
import userSliceReducer from "./redux/User";
import todosSliceReducer from "./redux/Todos";


const rootReducer = combineReducers({ userSliceReducer, todosSliceReducer });
export default rootReducer