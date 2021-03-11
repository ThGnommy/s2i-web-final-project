import React from "react";
import { PhotoDesktop } from "../PhotoDesktop";
import { PhotoMobile } from "../PhotoMobile";
import { PhotoList } from "../../../styled-component";
import { Pagination } from "../../Pagination";
import { useSelector } from "react-redux";
import { mediaQuery } from "../../../utils";

export const PhotoContainer = () => {
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
