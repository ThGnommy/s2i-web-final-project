import { SET_INPUT, SET_QUERY } from "../types";

const initialState = {
  input: "",
  query: "",
};

export const reducerSearch = (state = initialState, action) => {
  switch (action.type) {
    case SET_INPUT:
      return { ...state, input: action.payload.input };
    case SET_QUERY:
      return { ...state, query: action.payload.query };
    default:
      return { ...state };
  }
};
