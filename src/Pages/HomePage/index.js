import React from "react";
import {
  PhotoList,
  Container,
  ContainerSection,
  Title,
} from "./../../styled-component";
import { SearchContainer } from "../../components/SearchContainer";
import { Navbar } from "../../components/Navbar";
import { Pagination } from "../../components/Pagination";
import { useContext } from "react";
import { StoreContext } from "../../StoreContext";

export const HomePage = () => {
  const { searchSwitch } = useContext(StoreContext);

  return (
    <>
      <Container>
        <Navbar />
        <ContainerSection>
          <Title>A free stock photos website.</Title>
          <SearchContainer />
          <PhotoList />
          {/* <Pagination /> */}
        </ContainerSection>
      </Container>
    </>
  );
};
