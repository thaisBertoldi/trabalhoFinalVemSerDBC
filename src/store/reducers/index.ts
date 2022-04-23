import { combineReducers } from "redux";
import authReducer from "./authReducer";
import purchaseReducer from "./purchaseReducer";

export default combineReducers({
  authReducer, purchaseReducer
});