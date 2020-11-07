import React, { useContext } from "react";
import { StoreContext } from "../../StoreContext";
import { SearchInput } from "./../../styled-component";
export const Searchbar = () => {
  const { setQuery } = useContext(StoreContext);

  const handleInput = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <SearchInput onChange={handleInput} />
    </>
  );
};
