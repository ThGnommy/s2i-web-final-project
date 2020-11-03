import React, { useState, createContext } from "react";
import axios from "axios";

export const StoreContext = createContext();
export const client_id = "lygnd4tsud660cag5g2354e4w2ucyz";

export const StoreContextProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [photos, setPhotos] = useState([]);
  const [checked, setChecked] = useState(false);

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

  return (
    <StoreContext.Provider
      value={{
        photos,
        setPhotos,
        getPhotos,
        query,
        setQuery,
        checked,
        setChecked,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
