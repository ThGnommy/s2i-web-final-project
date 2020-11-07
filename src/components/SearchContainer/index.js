import React, { useContext } from "react";
import { ButtonSearch, SearchSection } from "../../styled-component";
import { Searchbar } from "../Searchbar";
import { StoreContext } from "./../../StoreContext";
import { PhotoContainer } from "../PhotoContainer";

export const SearchContainer = () => {
  const { getPhotos, query } = useContext(StoreContext);

  const handleClick = () => {
    getPhotos();
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
