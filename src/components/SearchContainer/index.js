import React, { useContext, useRef } from "react";
import { ButtonSearch, SearchSection } from "../../styled-component";
import { Searchbar } from "../Searchbar";
import { StoreContext } from "./../../StoreContext";
import { ChannelContainer } from "../ChannelContainer";
import { SarchSwitch } from "../SearchSwitch";

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
        <SarchSwitch />
        <ButtonSearch onClick={handleClick}>Search</ButtonSearch>
        <ChannelContainer />
      </SearchSection>
    </>
  );
};
