import axios from "axios";
import {
  GET_USER,
  GET_USER_FAIL,
  SET_LOADER,
  UPDATE_USER,
  UPDATE_USER_FAIL,
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
