import React, { useContext, useRef } from "react";
import { ButtonSearch, SearchSection } from "../../styled-component";
import { Searchbar } from "../Searchbar";
import { StoreContext } from "./../../StoreContext";
import { PhotoContainer } from "../PhotoContainer";

export const SearchContainer = () => {
  const { getPhotos } = useContext(StoreContext);
  const query = useRef("");

  const handleClick = () => {
    let value = query.current.value.trim();

    if (value === "") return;

    getPhotos(value);
  };

  return (
    <>
      <SearchSection>
        <Searchbar query={query} />
        <ButtonSearch onClick={handleClick}>Search</ButtonSearch>
        <PhotoContainer />
      </SearchSection>
    </>
  );
};
