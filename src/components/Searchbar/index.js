import React from "react";
import { SearchInput } from "./../../styled-component";
export const Searchbar = ({ query }) => {
  return (
    <>
      <SearchInput ref={query} />
    </>
  );
};
