import { combineReducers } from "redux";
import usersReducer from "./users";
// import auth from "./auth";

export default combineReducers({
  users: usersReducer,
//   auth
});