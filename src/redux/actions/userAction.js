import { GET_USER_INFO, SET_USER_IS_LOGGED } from "../types";

export const setUserState = () => {
  return {
    type: SET_USER_IS_LOGGED,
    payload: {
      userLogged: true,
    },
  };
};

export const getUserInfo = (avatar, email) => {
  return {
    type: GET_USER_INFO,
    payload: {
      userInfo: {
        avatar,
        email,
      },
    },
  };
};
