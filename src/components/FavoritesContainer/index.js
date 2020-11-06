import React, { useContext } from "react";
import { FavoritePhoto } from "../FavoritePhoto";
import { PhotoList, Title } from "../../styled-component";
import { StoreContext } from "../../StoreContext";

export const FavoritesContainer = () => {
  const { favorites } = useContext(StoreContext);

  return (
    <>
      {favorites.length > 0 ? (
        <PhotoList>
          {favorites.map((photo) => (
            <FavoritePhoto
              currentPhoto={photo}
              key={photo.id}
              photographer={photo.photographer}
              image={photo.src.large}
              downloadUrl={photo.src.original}
            />
          ))}
        </PhotoList>
      ) : (
        <Title>You don't have favorites.</Title>
      )}
    </>
  );
};
