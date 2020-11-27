import React, { useContext, useEffect } from "react";
import {
  Container,
  ContainerSection,
  PhotoVideoSelector,
  Title,
} from "./../../styled-component";
import { Navbar } from "../../components/Navbar";
import { FavoritesContainer } from "./../../components/Favorites/FavoritesContainer";
import { db, auth } from "../../api/firebase/instance";
import { StoreContext } from "../../StoreContext";
import { ThemeContext } from "styled-components";

export const FavoritesPage = () => {
  const { setFavorites, setFavoriteSelector, favoriteSelector } = useContext(
    StoreContext
  );
  const themeContext = useContext(ThemeContext);

  useEffect(() => {
    const getFavorites = async () => {
      const doc = db.collection("users").doc(auth.currentUser.uid);
      await doc
        .get()
        .then((r) => {
          if (r.exists) {
            setFavorites(r.data().favs);
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
  }, [setFavorites]);

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
                textDecoration: !favoriteSelector ? "underline" : "none",
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
                textDecoration: favoriteSelector ? "underline" : "none",
              }}
              onClick={() => setFavoriteSelector(true)}
            >
              Videos
            </p>
          </PhotoVideoSelector>
          {/* <hr style={{ width: "90%", marginBottom: "2rem" }} /> */}
          <FavoritesContainer />
        </ContainerSection>
      </Container>
    </>
  );
};
