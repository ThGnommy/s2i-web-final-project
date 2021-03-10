import {
  SET_CURRENT_PAGE,
  SET_FAVORITES_PHOTOS,
  SET_FAVORITES_VIDEOS,
  SET_NEXT_PAGE,
  GET_PHOTOS,
  GET_VIDEOS,
} from "../types";

export const getPhotos = (array) => (dispatch) => {
  dispatch({
    type: GET_PHOTOS,
    payload: {
      photos: array,
    },
  });
};
export const getVideos = (array) => (dispatch) => {
  dispatch({
    type: GET_VIDEOS,
    payload: {
      videos: array,
    },
  });
};

export const setFavoritesPhotos = (favs) => (dispatch) => {
  dispatch({
    type: SET_FAVORITES_PHOTOS,
    payload: {
      favoritesPhotos: favs,
    },
  });
};

export const setFavoritesVideos = (favs) => (dispatch) => {
  dispatch({
    type: SET_FAVORITES_VIDEOS,
    payload: {
      favoritesVideos: favs,
    },
  });
};

export const setNextPage = (bool) => (dispatch) => {
  dispatch({
    type: SET_NEXT_PAGE,
    payload: {
      nextPage: bool,
    },
  });
};

export const setCurrentPage = (num) => (dispatch) => {
  dispatch({
    type: SET_CURRENT_PAGE,
    payload: {
      currentPage: num,
    },
  });
};
