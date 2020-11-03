import React, { useContext, useRef } from "react";
import { ButtonSearch, SearchSection } from "../../styled-component";
import { Searchbar } from "../Searchbar";
import { StoreContext } from "./../../StoreContext";
import { ChannelContainer } from "../ChannelContainer";

export const SearchContainer = () => {
  const { getPhotos } = useContext(StoreContext);
  const query = useRef("");
  const handleClick = (e) => {
    getPhotos(query.current.value);
  };

  return (
    <>
      <SearchSection>
        <Searchbar query={query} />
        <ButtonSearch onClick={handleClick}>Search</ButtonSearch>
        <ChannelContainer />
      </SearchSection>
    </>
  );
};
