import { SET_SWITCH, SHOW_FAVORITES } from "../types";

const initialState = {
  switchType: false,
  favoriteSelector: false,
};

export const reducerSwitch = (state = initialState, action) => {
  switch (action.type) {
    case SET_SWITCH:
      return { ...state, switchType: action.payload.switchType };
    case SHOW_FAVORITES:
      return { ...state, favoriteSelector: action.payload.favoriteSelector };
    default:
      return { ...state };
  }
};
