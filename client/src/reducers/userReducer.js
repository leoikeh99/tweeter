import { GET_USER, GET_USER_FAIL, SET_USER_LOADER } from "../actions/types";

const initialState = {
  loader: false,
  alert: null,
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        loader: false,
        user: action.payload,
      };

    case GET_USER_FAIL:
      return {
        ...state,
        loader: false,
        user: null,
      };

    // case SET_ALERT:
    //   return {
    //     ...state,
    //     alert: action.payload,
    //   };

    // case CLEAR_ALERT:
    //   return {
    //     ...state,
    //     alert: null,
    //   };

    case SET_USER_LOADER:
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

export default userReducer;
