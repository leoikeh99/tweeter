import { combineReducers } from "redux";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import alertReducer from "./alertReducer";

export default combineReducers({
  auth: authReducer,
  userData: userReducer,
  alerts: alertReducer,
});
