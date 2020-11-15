import React, { useContext } from "react";
import { PhotoDesktop } from "../PhotoDesktop";
import { PhotoMobile } from "../PhotoMobile";
import { PhotoList } from "../../styled-component";
import { StoreContext } from "../../StoreContext";

export const PhotoContainer = () => {
  const { photos, mediaQuery } = useContext(StoreContext);

  return (
    <>
      {photos.length > 0 ? (
        <PhotoList>
          {photos.map(
            (photo) =>
              (mediaQuery.isDesktop && (
                <PhotoDesktop
                  photoArray={photo}
                  colorStar={photo}
                  id={photo.id}
                  key={photo.id}
                  photographer={photo.photographer}
                  image={photo.src.large}
                  downloadUrl={photo.src.original}
                />
              )) ||
              (mediaQuery.isTablet && (
                <PhotoMobile
                  photoArray={photo}
                  colorStar={photo}
                  key={photo.id}
                  photographer={photo.photographer}
                  image={photo.src.large}
                  downloadUrl={photo.src.original}
                />
              ))
          )}
        </PhotoList>
      ) : null}
    </>
  );
};
