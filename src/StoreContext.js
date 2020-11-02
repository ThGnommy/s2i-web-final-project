import React, { useState, createContext } from "react";
import axios from "axios";

export const StoreContext = createContext();
export const client_id = "lygnd4tsud660cag5g2354e4w2ucyz";

export const StoreContextProvider = ({ children }) => {
  const [channels, setChannels] = useState([]);
  const [query, setQuery] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [heart, setHeart] = useState(false);

  const [photos, setPhotos] = useState([]);

  // fetch all the channels

  const getPhotos = async (query) => {
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
  };

  const fetchChannels = () => {
    axios
      .get(`https://api.twitch.tv/helix/search/channels?query=${query}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Client-Id": client_id,
        },
      })
      .then((response) => {
        setChannels(response.data.data);
      });
  };

  return (
    <StoreContext.Provider
      value={{
        photos,
        setPhotos,
        getPhotos,
        fetchChannels,
        query,
        setQuery,
        favorites,
        setFavorites,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
