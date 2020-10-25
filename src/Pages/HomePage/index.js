import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, TitleName } from "./../../styled-component";
import { Searchbar } from "../../components/Searchbar";
import { Menu } from "../../components/Menu";

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

  // const fetchTwitch = (e) => {
  //   e.preventDefault();
  //   if (window.location.hash !== "") getTokenFromHash();
  //   else return;
  //   axios
  //     .get(`https://api.twitch.tv/helix/users`, {
  //       headers: {
  //         "Client-id": client_id,
  //         Authorization: `Bearer ${localStorage.getItem("token")}`,
  //       },
  //     })
  //     .then((response) => console.log(response));
  // };

  return (
    <>
      <Container>
        <Menu />
        <TitleName>Ciao {name}!</TitleName>
        <Searchbar />
      </Container>
    </>
  );
};
