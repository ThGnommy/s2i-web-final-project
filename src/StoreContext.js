import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
import { saveAs } from "file-saver";
import { db, auth } from "./api/firebase/instance";
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

export const StoreContextProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");

  // Photo States
  const [photos, setPhotos] = useState([]);
  const [favorites, setFavorites] = useState([]);

  // Video States
  const [videos, setVideos] = useState([]);
  const [favoritesVideos, setFavoriteVideos] = useState([]);

  const [nextPage, setNextPage] = useState(true);
  const [page, setPage] = useState(1);
  // false = photos - true = videos
  const [searchSwitch, setSearchSwitch] = useState(false);
  const [favoriteSelector, setFavoriteSelector] = useState(false);

  const [userIsLogged, setUserIsLogged] = useState(false);

  useEffect(() => {
    const getFavorites = async () => {
      const doc = db.collection("users").doc(auth.currentUser.uid);
      await doc
        .get()
        .then((r) => {
          if (r.exists) {
            setFavorites(r.data().favs);
          }
        })
        .catch((error) => {
          throw Promise.reject(error);
        });
    };

    auth.onAuthStateChanged(function (user) {
      if (user) {
        getFavorites();
      } else {
        return;
      }
    });
  }, []);

  useEffect(() => {
    const getPhotos = async () => {
      try {
        await axios
          .get(`https://api.pexels.com/v1/search?query=${query}`, {
            headers: {
              Authorization: process.env.REACT_APP_PEXELS_KEY,
            },
            params: {
              total_results: 10000,
              per_page: 10,
              page: page,
            },
          })
          .then((res) => {
            // Check if next page exist
            if (!res.data.next_page) {
              setNextPage(false);
            } else {
              setNextPage(true);
            }

            if (!res) return;

            setPhotos(res.data.photos);
          });
      } catch (error) {
        return error;
      }
    };

    const getVideos = async () => {
      try {
        await axios
          .get(`https://api.pexels.com/videos/search?query=${query}`, {
            headers: {
              Authorization: process.env.REACT_APP_PEXELS_KEY,
            },
            params: {
              total_results: 10000,
              per_page: 10,
              page: page,
            },
          })
          .then((res) => {
            // Check if next page exist
            if (!res.data.next_page) {
              setNextPage(false);
            } else {
              setNextPage(true);
            }
            if (!res) return;
            setVideos(res.data.videos);
          });
      } catch (error) {
        return error;
      }
    };
    !searchSwitch ? getPhotos() : getVideos();
  }, [query, page, searchSwitch]);

  return (
    <StoreContext.Provider
      value={{
        photos,
        videos,
        page,
        input,
        setInput,
        setPhotos,
        setVideos,
        setQuery,
        setPage,
        query,
        nextPage,
        favorites,
        setFavorites,
        mediaQuery,
        downloadImage,
        setUserIsLogged,
        userIsLogged,
        searchSwitch,
        setSearchSwitch,
        favoriteSelector,
        setFavoriteSelector,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
