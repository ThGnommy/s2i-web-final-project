import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
import { saveAs } from "file-saver";

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
  const initialState = localStorage.getItem("favorites")
    ? JSON.parse(localStorage.getItem("favorites"))
    : [];

  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  const [photos, setPhotos] = useState([]);
  const [nextPage, setNextPage] = useState(true);
  const [page, setPage] = useState(1);
  const [favorites, setFavorites] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

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

    getPhotos();
  }, [query, page]);

  return (
    <StoreContext.Provider
      value={{
        photos,
        page,
        input,
        setInput,
        setPhotos,
        setQuery,
        setPage,
        query,
        nextPage,
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
