import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { SinglePhoto } from "../../styled-component";
import { StoreContext } from "../../StoreContext";
export const Photo = ({ image, photographer }) => {
  const { favorites } = useContext(StoreContext);

  return (
    <>
      <SinglePhoto backgroundImage={image}></SinglePhoto>
    </>
  );
};
