import { combineReducers } from "redux";
import usersReducer from "./users";
import authReducer from "./auth";
import professionReducer from "./prefession";
import specialty from "./specialty";

export default combineReducers({
  usersReducer,
  authReducer,
  profession: professionReducer,
  specialty,
});
