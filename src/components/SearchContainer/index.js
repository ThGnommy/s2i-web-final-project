import React, { useContext } from "react";
import { ButtonSearch, SearchSection } from "../../styled-component";
import { Searchbar } from "../Searchbar";
import { StoreContext } from "./../../StoreContext";
import { PhotoContainer } from "./../Photos/PhotoContainer";
import { SearchSwitch } from "../SearchSwitch";

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
        <SearchSwitch />
        <ButtonSearch onClick={handleClick}>Search</ButtonSearch>
        <PhotoContainer />
      </SearchSection>
    </>
  );
};
