import { SET_ALERT2, REMOVE_ALERT2 } from "../actions/types";

const initialState = [];

const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALERT2:
      return [...state, action.payload];

    case REMOVE_ALERT2:
      return state.filter((val) => val.id !== action.payload);

    default:
      return state;
  }
};

export default alertReducer;
