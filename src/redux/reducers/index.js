import { combineReducers } from "redux";
import user from "./users";
import authReducer from "./auth";
import professionReducer from "./prefession";
import specialty from "./specialty";

export default combineReducers({
  user,
  authReducer,
  profession: professionReducer,
  specialty,
});
