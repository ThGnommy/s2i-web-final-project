import React, { createContext, useEffect } from "react";
import axios from "axios";
import { saveAs } from "file-saver";
import { db, auth } from "./api/firebase/instance";
import { useDispatch, useSelector } from "react-redux";
import {
  getPhotos,
  getVideos,
  setFavoritesPhotos,
  setFavoritesVideos,
  setNextPage,
} from "./redux/actions/mediaAction";
export const StoreContext = createContext();

// Breakpoints
export const mediaQuery = {
  isMobile: window.matchMedia("(max-width: 600px)").matches,
  isTablet: window.matchMedia("(max-width: 960px)").matches,
  isDesktop: window.matchMedia("(min-width: 961px)").matches,
  isLargeScreen: window.matchMedia("(max-width: 1920px)").matches,
};

export const downloadImage = (url) => {
  return saveAs(`${url}`, "photo.png");
};

export const downloadVideo = (url) => {
  return saveAs(`${url}`, "video.mp4");
};

export const StoreContextProvider = ({ children }) => {
  const { query } = useSelector((state) => state.search);
  // false = photos - true = videos
  const { switchType } = useSelector((state) => state.switchSelector);

  const { currentPage } = useSelector((state) => state.media);
  const dispatch = useDispatch();

  useEffect(() => {
    const getFavoritesPhoto = () => {
      const doc = db.collection("users").doc(auth.currentUser.uid);
      doc
        .get()
        .then((r) => {
          if (r.exists && r.data().favsPhoto) {
            dispatch(setFavoritesPhotos(r.data().favsPhoto));
          }
        })
        .catch((error) => {
          throw Promise.reject(error);
        });
    };

    auth.onAuthStateChanged((user) => {
      if (user) {
        getFavoritesPhoto();
      } else {
        return;
      }
    });
  }, [dispatch]);

  useEffect(() => {
    const getFavoritesVideo = async () => {
      const doc = db.collection("users").doc(auth.currentUser.uid);
      await doc
        .get()
        .then((r) => {
          if (r.exists && r.data().favsVideo) {
            dispatch(setFavoritesVideos(r.data().favsVideo));
          }
        })
        .catch((error) => {
          throw Promise.reject(error);
        });
    };

    auth.onAuthStateChanged((user) => {
      if (user) {
        getFavoritesVideo();
      } else {
        return;
      }
    });
  }, [dispatch]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        await axios
          .get(`https://api.pexels.com/v1/search?query=${query}`, {
            headers: {
              Authorization: process.env.REACT_APP_PEXELS_KEY,
            },
            params: {
              total_results: 10000,
              per_page: 10,
              page: currentPage,
            },
          })
          .then((res) => {
            console.log(res.data.total_results);

            let total_results = res.data.total_results;
            let total_pages = total_results / 10;
            total_pages = Math.floor(total_pages);

            if (currentPage === total_pages + 1) {
              dispatch(setNextPage(false));
            } else if (total_pages > currentPage) {
              dispatch(setNextPage(true));
            }

            if (!res) return;

            dispatch(getPhotos(res.data.photos));
          });
      } catch (error) {
        return error;
      }
    };

    const fetchVideos = async () => {
      try {
        await axios
          .get(
            `https://api.pexels.com/videos/search?query=${query}&orientation=portrait&size=small`,
            {
              headers: {
                Authorization: process.env.REACT_APP_PEXELS_KEY,
              },
              params: {
                total_results: 10000,
                per_page: 10,
                page: currentPage,
              },
            }
          )
          .then((res) => {
            // Check if next page exist
            let total_results = res.data.total_results;
            let total_pages = total_results / 10;
            total_pages = Math.floor(total_pages);

            if (currentPage === total_pages + 1) {
              dispatch(setNextPage(false));
            } else if (total_pages >= currentPage) {
              dispatch(setNextPage(true));
            }
            if (!res) return;

            dispatch(getVideos(res.data.videos));
          });
      } catch (error) {
        return error;
      }
    };

    !switchType ? fetchPhotos() : fetchVideos();
  }, [query, currentPage, switchType, dispatch]);

  return (
    <StoreContext.Provider
      value={{
        mediaQuery,
        downloadImage,
        downloadVideo,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
