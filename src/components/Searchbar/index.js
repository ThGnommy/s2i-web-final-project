import React, { useContext } from "react";
import { StoreContext } from "../../StoreContext";
import { SearchInput } from "./../../styled-component";
export const Searchbar = () => {
  const { setInput } = useContext(StoreContext);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <SearchInput onChange={handleInput} />
    </>
  );
};
