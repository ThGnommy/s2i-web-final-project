import { GET_USER_INFO, USER_LOGOUT, USER_SIGNIN } from "../types";

const initialState = {
  userIsLogged: false,
  avatar: "",
  email: "",
};

export const reducerUser = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_INFO:
      return {
        ...state,
        avatar: action.payload.avatar,
        email: action.payload.email,
      };
    case USER_SIGNIN:
      return { ...state, userIsLogged: action.payload.userIsLogged };
    case USER_LOGOUT:
      return { ...state, userIsLogged: action.payload.userIsLogged };
    default:
      return { ...state };
  }
};
