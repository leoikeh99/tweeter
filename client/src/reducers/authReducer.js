import {
  AUTH,
  SET_AUTH_LOADER,
  SET_ALERT,
  CLEAR_ALERT,
  AUTH_FAIL,
} from "../actions/types";

const initialState = {
  loader: false,
  alert: null,
  token: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        loader: false,
        token: action.payload.token,
      };

    case AUTH_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        loader: false,
        token: null,
      };

    case SET_ALERT:
      return {
        ...state,
        alert: action.payload,
      };

    case CLEAR_ALERT:
      return {
        ...state,
        alert: null,
      };

    case SET_AUTH_LOADER:
      return {
        ...state,
        loader: true,
      };

    default:
      return {
        ...state,
      };
  }
};
