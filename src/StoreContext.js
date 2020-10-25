import React, { useState, createContext } from "react";
import axios from "axios";

export const StoreContext = createContext();

export const StoreContextProvider = ({ children }) => {
  const [channels, setChannels] = useState([]);
  const [query, setQuery] = useState("");

  const client_id = "lygnd4tsud660cag5g2354e4w2ucyz";

  // fetch all the channls
  const fetchChannels = () => {
    axios
      .get(`https://api.twitch.tv/helix/users?login=${query}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Client-Id": client_id,
        },
      })
      .then((response) => {
        setChannels(response);
      });
  };

  return (
    <StoreContext.Provider value={{ channels, fetchChannels, query, setQuery }}>
      {children}
    </StoreContext.Provider>
  );
};
