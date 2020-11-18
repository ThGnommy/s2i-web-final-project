import React, { useContext } from "react";
import { PhotoList, Title } from "../../styled-component";
import { StoreContext } from "../../StoreContext";
import { FavoritePhotoMobile } from "../FavoritePhotoMobile";
import { FavoritePhotoDesktop } from "../FavoritePhotoDesktop";

export const FavoritesContainer = () => {
  const { favorites, mediaQuery } = useContext(StoreContext);

  return (
    <>
      {favorites.length > 0 ? (
        <PhotoList>
          {favorites.map(
            (photo) =>
              (mediaQuery.isDesktop && (
                <FavoritePhotoDesktop
                  currentPhoto={photo}
                  key={photo.id}
                  photographer={photo.photographer}
                  image={photo.src}
                  downloadUrl={photo.downloadUrl}
                />
              )) ||
              (mediaQuery.isTablet && (
                <FavoritePhotoMobile
                  currentPhoto={photo}
                  key={photo.id}
                  photographer={photo.photographer}
                  image={photo.src}
                  downloadUrl={photo.downloadUrl}
                />
              ))
          )}
        </PhotoList>
      ) : (
        <Title>You don't have favorites.</Title>
      )}
    </>
  );
};
