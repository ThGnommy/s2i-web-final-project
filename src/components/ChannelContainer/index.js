import React, { useContext, useEffect, useState } from "react";
import { Photo } from "../Photo";
import { PhotoList } from "./../../styled-component";
import { StoreContext } from "./../../StoreContext";

export const ChannelContainer = () => {
  const { photos } = useContext(StoreContext);

  return (
    <>
      {photos.length > 0 ? (
        <PhotoList>
          {photos.map((photo) => (
            <Photo key={photo.id} image={photo.src.medium} />
          ))}
        </PhotoList>
      ) : null}
    </>
  );
};
