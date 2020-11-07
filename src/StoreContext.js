import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
import { saveAs } from "file-saver";

export const StoreContext = createContext();

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
  const initialState = localStorage.getItem("favorites")
    ? JSON.parse(localStorage.getItem("favorites"))
    : [];

  const [query, setQuery] = useState("");
  const [photos, setPhotos] = useState([]);
  const [favorites, setFavorites] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // fetch all the channels
  const getPhotos = async (query) => {
    try {
      await axios
        .get(`https://api.pexels.com/v1/search?query=${query}`, {
          headers: {
            Authorization: process.env.REACT_APP_PEXELS_KEY,
          },
          params: {
            per_page: 50,
          },
        })
        .then((res) => setPhotos(res.data.photos));
    } catch (error) {
      return error;
    }
  };

  return (
    <StoreContext.Provider
      value={{
        photos,
        setPhotos,
        getPhotos,
        query,
        setQuery,
        favorites,
        setFavorites,
        mediaQuery,
        downloadImage,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
