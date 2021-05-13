import axios from "axios";
import {
  AUTH,
  SET_AUTH_LOADER,
  SET_ALERT,
  CLEAR_ALERT,
  AUTH_FAIL,
} from "./types";

export const authUser = (type, data) => async (dispatch) => {
  const config = { headers: { "Content-Type": "application/json" } };
  try {
    dispatch({ type: SET_AUTH_LOADER });
    const res = await axios.post(`/api/auth/${type}`, data, config);
    dispatch({ type: AUTH, payload: res.data });
  } catch (err) {
    dispatch({ type: AUTH_FAIL });
    dispatch({
      type: SET_ALERT,
      payload: { type: "error", msg: err.response.data.msg },
    });
  }
};

export const clearAlert = () => {
  return { type: CLEAR_ALERT };
};
