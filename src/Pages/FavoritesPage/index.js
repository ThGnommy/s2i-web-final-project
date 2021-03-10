import React, { useContext } from "react";
import {
  Container,
  ContainerSection,
  PhotoVideoSelector,
  Title,
} from "./../../styled-component";
import { Navbar } from "../../components/Navbar";
import { FavoritesPhotoContainer } from "../../components/Favorites/FavoritePhotos/FavoritesPhotoContainer";
import { FavoritesVideoContainer } from "../../components/Favorites/FavoriteVideos/FavoritesVideoContainer";
import { ThemeContext } from "styled-components";
import { Footer } from "../../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { setFavoritesSelector } from "../../redux/actions/switchSelectorAction";

export const FavoritesPage = () => {
  const themeContext = useContext(ThemeContext);

  const { favoriteSelector } = useSelector((state) => state.switchSelector);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const getFavorites = async () => {
  //     const doc = db.collection("users").doc(auth.currentUser.uid);
  //     await doc
  //       .get()
  //       .then((r) => {
  //         if (r.exists && r.data().favsPhoto) {
  //           dispatch(setFavoritesPhotos(r.data().favsPhoto));
  //         }
  //         if (r.exists && r.data().favsVideo) {
  //           dispatch(setFavoritesVideos(r.data().favsVideo));
  //         }
  //       })
  //       .catch((error) => {
  //         throw Promise.reject(error);
  //       });
  //   };

  //   auth.onAuthStateChanged(function (user) {
  //     if (user) {
  //       getFavorites();
  //     } else {
  //       return;
  //     }
  //   });
  // }, [setFavoritesPhotos, setFavoritesVideos]);

  return (
    <>
      <Container>
        <Navbar />
        <ContainerSection>
          <Title>Favorites</Title>
          <PhotoVideoSelector>
            <p
              onClick={() => dispatch(setFavoritesSelector(false))}
              style={{
                color: !favoriteSelector
                  ? themeContext.textLight
                  : themeContext.textDark,
              }}
            >
              Photos
            </p>
            <span className="divider">/</span>
            <p
              style={{
                color: favoriteSelector
                  ? themeContext.textLight
                  : themeContext.textDark,
              }}
              onClick={() => dispatch(setFavoritesSelector(true))}
            >
              Videos
            </p>
          </PhotoVideoSelector>
          {!favoriteSelector ? (
            <FavoritesPhotoContainer />
          ) : (
            <FavoritesVideoContainer />
          )}
        </ContainerSection>
        <Footer />
      </Container>
    </>
  );
};
