import React, { useRef, useContext } from "react";
import { SearchInput } from "./../../styled-component";
import { StoreContext } from "./../../StoreContext";
export const Searchbar = ({ query }) => {
  return (
    <>
      <SearchInput ref={query} />
    </>
  );
};
