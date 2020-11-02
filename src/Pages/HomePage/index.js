import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  PhotoList,
  Container,
  ContainerSection,
  Title,
} from "./../../styled-component";
import { SearchContainer } from "../../components/SearchContainer";
import { Navbar } from "../../components/Navbar";

export const HomePage = () => {
  return (
    <>
      <Container>
        <Navbar />
        <ContainerSection>
          <Title>A free stock videos and photos website.</Title>
          <SearchContainer />
          <PhotoList />
        </ContainerSection>
      </Container>
    </>
  );
};
