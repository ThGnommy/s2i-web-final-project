import React, { useContext } from "react";
import { SinglePhoto } from "../../styled-component";
import { StoreContext } from "../../StoreContext";
export const Photo = ({ image, photographer }) => {
  const { favorites } = useContext(StoreContext);

  return (
    <>
      <SinglePhoto backgroundImage={`url(${image})`}></SinglePhoto>
    </>
  );
};
