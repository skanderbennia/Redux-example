import { combineReducers } from "redux";
import users from "./userReducer";
import auth from "./auth";

export default combineReducers({
  users,
  auth,
});
