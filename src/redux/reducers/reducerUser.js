import { GET_USER_INFO, SET_USER_IS_LOGGED } from "../types";

const initialState = {
  userLogged: false,
  userInfo: {},
};

export const reducerUser = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_INFO:
      return { ...state, userInfo: action.payload.userInfo };
    case SET_USER_IS_LOGGED:
      return { ...state, userLogged: action.payload.userLogged };
    default:
      return { ...state };
  }
};
