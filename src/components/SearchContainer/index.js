import React, { useContext } from "react";
import { ButtonSearch, SearchSection } from "../../styled-component";
import { Searchbar } from "../Searchbar";
import { StoreContext } from "./../../StoreContext";
import { PhotoContainer } from "./../Photos/PhotoContainer";
import { SearchSwitch } from "../SearchSwitch";
import { VideoContainer } from "../Videos/VideoContainer";
import { setQuery } from "../../redux/actions/searchAction";
import { useDispatch, useSelector } from "react-redux";
export const SearchContainer = () => {
  const { setPage } = useContext(StoreContext);

  const { input } = useSelector((state) => state.search);
  const { switchType } = useSelector((state) => state.switchSelector);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(setQuery(input));
    setPage(1);
  };

  return (
    <>
      <SearchSection onSubmit={handleClick}>
        <Searchbar />
        <SearchSwitch />
        <ButtonSearch>Search</ButtonSearch>
        {!switchType ? <PhotoContainer /> : <VideoContainer />}
      </SearchSection>
    </>
  );
};
