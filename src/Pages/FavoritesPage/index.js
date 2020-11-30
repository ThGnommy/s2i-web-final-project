import React, { useContext, useEffect } from "react";
import {
  Container,
  ContainerSection,
  PhotoVideoSelector,
  Title,
} from "./../../styled-component";
import { Navbar } from "../../components/Navbar";
import { FavoritesPhotoContainer } from "../../components/Favorites/FavoritePhotos/FavoritesPhotoContainer";
import { FavoritesVideoContainer } from "../../components/Favorites/FavoriteVideos/FavoritesVideoContainer";
import { db, auth } from "../../api/firebase/instance";
import { StoreContext } from "../../StoreContext";
import { ThemeContext } from "styled-components";

export const FavoritesPage = () => {
  const {
    setFavoritesPhotos,
    setFavoritesVideos,
    setFavoriteSelector,
    favoriteSelector,
  } = useContext(StoreContext);
  const themeContext = useContext(ThemeContext);

  useEffect(() => {
    const getFavorites = async () => {
      const doc = db.collection("users").doc(auth.currentUser.uid);
      await doc
        .get()
        .then((r) => {
          if (r.exists && r.data().favsPhoto) {
            setFavoritesPhotos(r.data().favsPhoto);
          }
          if (r.exists && r.data().favsVideo) {
            setFavoritesVideos(r.data().favsVideo);
            console.log("wkjfnekrlfnkfejlnljknf");
          }
        })
        .catch((error) => {
          throw Promise.reject(error);
        });
    };

    auth.onAuthStateChanged(function (user) {
      if (user) {
        getFavorites();
      } else {
        return;
      }
    });
  }, [setFavoritesPhotos, setFavoritesVideos]);

  return (
    <>
      <Container>
        <Navbar />
        <ContainerSection>
          <Title>Favorites Photos</Title>
          <PhotoVideoSelector>
            <p
              onClick={() => setFavoriteSelector(false)}
              style={{
                color: !favoriteSelector
                  ? themeContext.textLight
                  : themeContext.textDark,
              }}
            >
              Photos
            </p>
            <span className='divider'>/</span>
            <p
              style={{
                color: favoriteSelector
                  ? themeContext.textLight
                  : themeContext.textDark,
              }}
              onClick={() => setFavoriteSelector(true)}
            >
              Videos
            </p>
          </PhotoVideoSelector>
          {/* <hr style={{ width: "90%", marginBottom: "2rem" }} /> */}
          {!favoriteSelector ? (
            <FavoritesPhotoContainer />
          ) : (
            <FavoritesVideoContainer />
          )}
        </ContainerSection>
      </Container>
    </>
  );
};
