import React from "react";
import { ButtonSearch, SearchSection } from "../../styled-component";
import { Searchbar } from "../Searchbar";
import { PhotoContainer } from "./../Photos/PhotoContainer";
import { SearchSwitch } from "../SearchSwitch";
import { VideoContainer } from "../Videos/VideoContainer";
import { setQuery } from "../../redux/actions/searchAction";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../redux/actions/mediaAction";
export const SearchContainer = () => {
  const { input } = useSelector((state) => state.search);
  const { switchType } = useSelector((state) => state.switchSelector);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    dispatch(setQuery(input));
    dispatch(setCurrentPage(1));
  };

  return (
    <>
      <SearchSection>
        <Searchbar />
        <SearchSwitch />
        <ButtonSearch onClick={handleClick}>Search</ButtonSearch>
        {!switchType ? <PhotoContainer /> : <VideoContainer />}
      </SearchSection>
    </>
  );
};
