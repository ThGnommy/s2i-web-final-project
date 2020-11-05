import React, { useContext } from "react";
import { Photo } from "../Photo";
import { PhotoList } from "../../styled-component";
import { StoreContext } from "../../StoreContext";

export const PhotoContainer = () => {
  const { photos } = useContext(StoreContext);

  return (
    <>
      {photos.length > 0 ? (
        <PhotoList>
          {photos.map((photo) => (
            <Photo
              photoArray={photo}
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
