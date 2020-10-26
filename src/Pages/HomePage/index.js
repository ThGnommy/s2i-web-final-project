import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  ContainerSection,
  TitleName,
} from "./../../styled-component";
import { SearchContainer } from "../../components/SearchContainer";
import { FavoritesContainer } from "../../components/FavoritesContainer";

export const HomePage = () => {
  const [name, setName] = useState("");

  const client_id = "lygnd4tsud660cag5g2354e4w2ucyz";

  const getTokenFromHash = () => {
    const hash = window.location.hash.substr(1);
    const split1 = hash.split("=");
    const split2 = split1[1].split("&");
    const hash_value = split2[0];
    localStorage.setItem("token", hash_value);
  };

  useEffect(() => {
    if (window.location.hash !== "") getTokenFromHash();
    else return;

    axios
      .get(`https://api.twitch.tv/helix/users`, {
        headers: {
          "Client-id": client_id,
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setName(response.data.data[0].display_name);
      });
  }, []);

  return (
    <>
      <Container>
        <TitleName>Ciao {name}!</TitleName>
        <p>Here you can find and save your favorites streamers!</p>
        <ContainerSection>
          <SearchContainer />
          <FavoritesContainer />
        </ContainerSection>
      </Container>
    </>
  );
};
