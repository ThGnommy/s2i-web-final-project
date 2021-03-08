import { SET_QUERY, SET_INPUT } from "../types";

export const setQuery = (query) => (dispatch) => {
  dispatch({
    type: SET_QUERY,
    payload: {
      query: query,
    },
  });
};

export const setInput = (input) => (dispatch) => {
  dispatch({
    type: SET_INPUT,
    payload: {
      input: input,
    },
  });
};
