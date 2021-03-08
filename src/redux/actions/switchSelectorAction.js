import { SET_SWITCH, SHOW_FAVORITES } from "../types";

export const setSwitchType = (bool) => (dispatch) => {
  dispatch({
    type: SET_SWITCH,
    payload: {
      switchType: bool,
    },
  });
};

export const setFavoritesSelector = (bool) => (dispatch) => {
  dispatch({
    type: SHOW_FAVORITES,
    payload: {
      favoriteSelector: bool,
    },
  });
};
