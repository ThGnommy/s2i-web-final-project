import React, { useContext } from "react";
import { Photo } from "../Photo";
import { PhotoList } from "./../../styled-component";
import { StoreContext } from "./../../StoreContext";

export const ChannelContainer = () => {
  const { photos, favorites } = useContext(StoreContext);

  // const checkFav = (photo) => {
  //   if (favorites) {
  //     let check = favorites.find((o) => o.id === photo.id);
  //     return check;
  //   } else return;
  // };

  return (
    <>
      {photos.length > 0 ? (
        <PhotoList>
          {photos.map((photo) => (
            <Photo
              photoArray={photo}
              // colorStar={checkFav(photo)}
              key={photo.id}
              photographer={photo.photographer}
              image={photo.src.large}
              downloadUrl={photo.src.original}
            />
          ))}
        </PhotoList>
      ) : null}
    </>
  );
};
