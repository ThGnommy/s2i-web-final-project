import React, { useContext } from "react";
import { ButtonSearch, SearchSection } from "../../styled-component";
import { Searchbar } from "../Searchbar";
import { StoreContext } from "./../../StoreContext";
import { ChannelContainer } from "../ChannelContainer";

export const SearchContainer = () => {
  const { fetchChannels } = useContext(StoreContext);

  const handleClick = (e) => {
    fetchChannels();
  };

  return (
    <>
      <SearchSection>
        <Searchbar />
        <ButtonSearch onClick={handleClick}>Search</ButtonSearch>
        <ChannelContainer />
      </SearchSection>
    </>
  );
};
