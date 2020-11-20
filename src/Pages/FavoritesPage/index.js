import React, { useContext, useEffect } from "react";
import { Container, ContainerSection, Title } from "./../../styled-component";
import { Navbar } from "../../components/Navbar";
import { FavoritesContainer } from "../../components/FavoritesContainer";
import { db, auth } from "../../api/firebase/instance";
import { StoreContext } from "../../StoreContext";

export const FavoritesPage = () => {
  const { setFavorites } = useContext(StoreContext);

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
          <hr style={{ width: "90%", marginBottom: "2rem" }} />
          <FavoritesContainer />
        </ContainerSection>
      </Container>
    </>
  );
};
