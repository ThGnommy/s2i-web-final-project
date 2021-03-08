import {
  GET_PHOTOS,
  GET_VIDEOS,
  SET_CURRENT_PAGE,
  SET_NEXT_PAGE,
} from "../types";

const initialState = {
  photos: [],
  videos: [],
  nextPage: true,
  currentPage: 1,
};

export const reducerMedia = (state = initialState, action) => {
  switch (action.type) {
    case GET_PHOTOS:
      return { ...state, photos: action.payload.photos };
    case GET_VIDEOS:
      return { ...state, videos: action.payload.videos };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload.currentPage };
    case SET_NEXT_PAGE:
      return { ...state, nextPage: action.payload.nextPage };
    default:
      return { ...state };
  }
};
