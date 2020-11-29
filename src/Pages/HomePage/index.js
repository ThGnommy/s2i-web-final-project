import React from "react";
import { Container, ContainerSection, Title } from "./../../styled-component";
import { SearchContainer } from "../../components/SearchContainer";
import { Navbar } from "../../components/Navbar";

export const HomePage = () => {
  return (
    <>
      <Container>
        <Navbar />
        <ContainerSection>
          <Title>A free stock photos & videos website.</Title>
          <SearchContainer />
        </ContainerSection>
      </Container>
    </>
  );
};
