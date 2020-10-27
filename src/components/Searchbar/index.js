import React, { useContext } from "react";
import { SearchInput } from "./../../styled-component";
import { StoreContext } from "./../../StoreContext";
export const Searchbar = () => {
  const { query, setQuery } = useContext(StoreContext);

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <SearchInput value={query} onChange={handleSearch} />
    </>
  );
};
