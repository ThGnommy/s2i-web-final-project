import { GET_USER_INFO, USER_LOGOUT, USER_SIGNIN } from "../types";

export const userSignin = () => (dispatch) => {
  dispatch({
    type: USER_SIGNIN,
    payload: {
      userIsLogged: true,
    },
  });
};

export const userLogout = () => (dispatch) => {
  dispatch({
    type: USER_LOGOUT,
    payload: {
      userIsLogged: false,
    },
  });
};

export const getUserInfo = (avatar, email) => (dispatch) => {
  dispatch({
    type: GET_USER_INFO,
    payload: {
      avatar,
      email,
    },
  });
};
