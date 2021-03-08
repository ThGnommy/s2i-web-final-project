import { SET_CURRENT_PAGE, SET_NEXT_PAGE } from "../types";

export const setNextPage = (bool) => (dispatch) => {
  dispatch({
    type: SET_NEXT_PAGE,
    payload: {
      nextPage: bool,
    },
  });
};

export const setCurrentPage = (num) => (dispatch) => {
  dispatch({
    type: SET_CURRENT_PAGE,
    payload: {
      setCurrentPage: num,
    },
  });
};
