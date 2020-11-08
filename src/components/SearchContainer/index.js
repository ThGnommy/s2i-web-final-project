import React, { useContext } from "react";
import { ButtonSearch, SearchSection } from "../../styled-component";
import { Searchbar } from "../Searchbar";
import { StoreContext } from "./../../StoreContext";
import { PhotoContainer } from "../PhotoContainer";

export const SearchContainer = () => {
  const { input, setQuery, setPage } = useContext(StoreContext);

  const handleClick = () => {
    setQuery(input);
    setPage(1);
  };

  return (
    <>
      <SearchSection>
        <Searchbar />
        <ButtonSearch onClick={handleClick}>Search</ButtonSearch>
        <PhotoContainer />
      </SearchSection>
    </>
  );
};
