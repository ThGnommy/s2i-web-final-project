import React, { useContext } from "react";
import { SearchInput } from "./../../styled-component";
import { StoreContext } from "./../../StoreContext";
export const Searchbar = () => {
  const { fetchChannels, query, setQuery } = useContext(StoreContext);

  const handleSearch = (e) => {
    setQuery(e.target.value);
    fetchChannels();
  };

  return (
    <>
      <SearchInput onChange={handleSearch} />
    </>
  );
};
