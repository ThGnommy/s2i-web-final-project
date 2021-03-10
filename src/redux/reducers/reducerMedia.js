import {
  GET_PHOTOS,
  GET_VIDEOS,
  SET_CURRENT_PAGE,
  SET_FAVORITES_PHOTOS,
  SET_FAVORITES_VIDEOS,
  SET_NEXT_PAGE,
} from "../types";

const initialState = {
  photos: [],
  videos: [],
  favoritesPhotos: [],
  favoritesVideos: [],
  nextPage: true,
  currentPage: 1,
};

export const reducerMedia = (state = initialState, action) => {
  switch (action.type) {
    case GET_PHOTOS:
      return { ...state, photos: action.payload.photos };
    case GET_VIDEOS:
      return { ...state, videos: action.payload.videos };
    case SET_FAVORITES_PHOTOS:
      return { ...state, favoritesPhotos: action.payload.favoritesPhotos };
    case SET_FAVORITES_VIDEOS:
      return { ...state, favoritesVideos: action.payload.favoritesVideos };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload.currentPage };
    case SET_NEXT_PAGE:
      return { ...state, nextPage: action.payload.nextPage };
    default:
      return { ...state };
  }
};
