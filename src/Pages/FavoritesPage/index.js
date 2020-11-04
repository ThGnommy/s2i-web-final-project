import React from "react";
import {
  PhotoList,
  Container,
  ContainerSection,
  Title,
} from "./../../styled-component";
import { SearchContainer } from "../../components/SearchContainer";
import { Navbar } from "../../components/Navbar";

export const FavoritesPage = () => {
  return (
    <>
      <Container>
        <Navbar />
        <ContainerSection>
          <Title>Favorites Photos</Title>
        </ContainerSection>
      </Container>
    </>
  );
};
