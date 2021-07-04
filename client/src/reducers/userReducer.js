import { v4 as uuidv4 } from "uuid";
import {
  CLEAR_ALERT,
  CLEAR_BANNER,
  FOLLOW,
  GET_PROFILE,
  GET_PROFILE_FAIL,
  GET_USER,
  GET_USER_FAIL,
  SET_LOADER,
  UPDATE_USER,
  UPDATE_USER_FAIL,
} from "../actions/types";

const initialState = {
  loader: { type: null },
  alert: null,
  user: null,
  profile: null,
  alert: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        loader: { ...state.loader, type: null },
        user: action.payload,
      };

    case GET_USER_FAIL:
      return {
        ...state,
        loader: { ...state.loader, type: null },
        user: null,
        alert: action.payload,
      };

    case UPDATE_USER_FAIL:
      return {
        ...state,
        loader: { ...state.loader, type: null },
        alert: action.payload,
      };

    case UPDATE_USER: {
      return {
        ...state,
        loader: { ...state.loader, type: null },
        user: action.payload,
        alert: { id: uuidv4(), type: "success", msg: "Updated successfully" },
        profile: state.profile._id === action.payload._id && {
          ...state.profile,
          ...action.payload,
        },
      };
    }

    case GET_PROFILE:
      return {
        ...state,
        loader: { ...state.loader, type: null },
        profile: action.payload,
      };

    case GET_PROFILE_FAIL:
      return {
        ...state,
        loader: { ...state.loader, type: null },
        profile: null,
      };

    case FOLLOW:
      return {
        ...state,
        loader: { ...state.loader, type: null },
        profile: { ...state.profile, following: true },
      };

    case CLEAR_ALERT:
      return {
        ...state,
        alert: null,
      };

    case SET_LOADER:
      return {
        ...state,
        loader: { ...state.loader, type: action.payload },
      };

    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
