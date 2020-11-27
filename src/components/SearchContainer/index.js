import React, { useContext } from "react";
import { ButtonSearch, SearchSection } from "../../styled-component";
import { Searchbar } from "../Searchbar";
import { StoreContext } from "./../../StoreContext";
import { PhotoContainer } from "./../Photos/PhotoContainer";
import { SearchSwitch } from "../SearchSwitch";
import { VideoContainer } from "../Videos/VideoContainer";

export const SearchContainer = () => {
  const { input, setQuery, setPage, searchSwitch } = useContext(StoreContext);

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
        {!searchSwitch ? <PhotoContainer /> : <VideoContainer />}
      </SearchSection>
    </>
  );
};
