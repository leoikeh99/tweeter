import axios from "axios";
import {
  CLEAR_ALERT,
  GET_USER,
  GET_USER_FAIL,
  SET_LOADER,
  UPDATE_USER,
  UPDATE_USER_FAIL,
  GET_PROFILE,
  GET_PROFILE_FAIL,
  CLEAR_BANNER,
} from "./types";
import setAuthToken from "../functions/setAuthToken";
import { v4 as uuidv4 } from "uuid";

export const getUser = () => async (dispatch) => {
  if (localStorage.getItem("token")) {
    setAuthToken(localStorage.getItem("token"));
  }

  try {
    dispatch({ type: SET_LOADER, payload: "user" });
    const res = await axios.get(`/api/user`);
    dispatch({ type: GET_USER, payload: res.data });
  } catch (err) {
    dispatch({ type: GET_USER_FAIL });
  }
};

export const updateUser = (data) => async (dispatch) => {
  if (localStorage.getItem("token")) {
    setAuthToken(localStorage.getItem("token"));
  }
  const config = { headers: { "Content-Type": "application/json" } };

  try {
    dispatch({ type: SET_LOADER, payload: "update" });
    const res = await axios.put(`/api/user`, data, config);
    dispatch({ type: UPDATE_USER, payload: res.data });
  } catch (err) {
    dispatch({
      type: UPDATE_USER_FAIL,
      payload: { id: uuidv4(), type: "danger", msg: err.response.data.msg },
    });
  }
};

export const getProfile = (id) => async (dispatch) => {
  if (localStorage.getItem("token")) {
    setAuthToken(localStorage.getItem("token"));
  }

  try {
    dispatch({ type: SET_LOADER, payload: "profile" });
    const res = await axios.get(`/api/user/profile/${id}`);
    dispatch({ type: GET_PROFILE, payload: res.data });
  } catch (err) {
    dispatch({ type: GET_PROFILE_FAIL });
  }
};

export const clearAlert = () => {
  return { type: CLEAR_ALERT };
};
