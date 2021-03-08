import React from "react";
import { useDispatch } from "react-redux";
import { SearchInput } from "./../../styled-component";
import { setInput } from "../../redux/actions/searchAction";
export const Searchbar = () => {
  const dispatch = useDispatch();

  const handleInput = (e) => {
    dispatch(setInput(e.target.value));
  };

  return (
    <>
      <SearchInput onChange={handleInput} />
    </>
  );
};
