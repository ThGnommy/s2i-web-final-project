import React, { useContext } from "react";
import { ButtonSearch, SearchSection } from "../../styled-component";
import { Searchbar } from "../Searchbar";
import { StoreContext } from "./../../StoreContext";
import { PhotoContainer } from "./../Photos/PhotoContainer";
import { SearchSwitch } from "../SearchSwitch";
import { VideoContainer } from "../Videos/VideoContainer";

export const SearchContainer = () => {
  const { input, setQuery, setPage, searchSwitch } = useContext(StoreContext);

  const handleClick = (e) => {
    e.preventDefault();
    setQuery(input);
    setPage(1);
  };

  return (
    <>
      <SearchSection onSubmit={handleClick}>
        <Searchbar />
        <SearchSwitch />
        <ButtonSearch>Search</ButtonSearch>
        {!searchSwitch ? <PhotoContainer /> : <VideoContainer />}
      </SearchSection>
    </>
  );
};
