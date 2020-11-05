import React from "react";
import { Container, ContainerSection, Title } from "./../../styled-component";
import { Navbar } from "../../components/Navbar";
import { FavoritesContainer } from "../../components/FavoritesContainer";

export const FavoritesPage = () => {
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
