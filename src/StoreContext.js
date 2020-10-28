import React, { useState, createContext } from "react";
import axios from "axios";

export const StoreContext = createContext();
export const client_id = "lygnd4tsud660cag5g2354e4w2ucyz";

export const StoreContextProvider = ({ children }) => {
  const [channels, setChannels] = useState([]);
  const [query, setQuery] = useState("");
  const [favorites, setFavorites] = useState([]);

  // fetch all the channels
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
      value={{ channels, setChannels, fetchChannels, query, setQuery }}
    >
      {children}
    </StoreContext.Provider>
  );
};
