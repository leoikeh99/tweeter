import { REMOVE_ALERT2, SET_ALERT2 } from "./types";

export const setAlert =
  ({ id, type, msg }) =>
  (dispatch) => {
    dispatch({ type: SET_ALERT2, payload: { id, type, msg } });

    setTimeout(() => dispatch({ type: REMOVE_ALERT2, payload: id }), 4000);
  };
