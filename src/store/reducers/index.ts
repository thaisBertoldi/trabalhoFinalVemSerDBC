import { combineReducers } from "redux";
import authReducer from "./authReducer";
import purshaceReducer from "./purshaceReducer";

export default combineReducers({
  authReducer, purshaceReducer
});