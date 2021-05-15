import axios from "axios";
import { GET_USER, GET_USER_FAIL, SET_USER_LOADER } from "./types";
import setAuthToken from "../functions/setAuthToken";

export const getUser = () => async (dispatch) => {
  if (localStorage.getItem("token")) {
    setAuthToken(localStorage.getItem("token"));
  }

  try {
    dispatch({ type: SET_USER_LOADER });
    const res = await axios.get(`/api/user`);
    dispatch({ type: GET_USER, payload: res.data });
  } catch (err) {
    dispatch({ type: GET_USER_FAIL });
  }
};
