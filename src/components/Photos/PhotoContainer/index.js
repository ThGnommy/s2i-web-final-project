import React, { useContext } from "react";
import { PhotoDesktop } from "../PhotoDesktop";
import { PhotoMobile } from "../PhotoMobile";
import { PhotoList } from "../../../styled-component";
import { StoreContext } from "../../../StoreContext";
import { Pagination } from "../../Pagination";
import { useSelector } from "react-redux";

export const PhotoContainer = () => {
  const { mediaQuery } = useContext(StoreContext);

  const { photos } = useSelector((state) => state.media);

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
                  id={photo.id}
                  key={photo.id}
                  photographer={photo.photographer}
                  image={photo.src.large}
                  downloadUrl={photo.src.original}
                />
              ))
          )}
        </PhotoList>
      ) : null}
      <Pagination />
    </>
  );
};
