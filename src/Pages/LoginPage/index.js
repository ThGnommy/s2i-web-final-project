import React from "react";
import axios from "axios";
import { Container, LoginContainer, Title, Button } from "./../styles";
import twitchIcon from "./../../assets/img/twitch-brands.svg";

export const LoginPage = () => {
  const client_id = "lygnd4tsud660cag5g2354e4w2ucyz";
  const redirect_uri = "http://localhost:3000/favorites";
  const response_type = "token";
  const scope = "channel:read:subscriptions";

  const parameters = {
    client_id: client_id,
    redirect_uri: redirect_uri,
    response_type: response_type,
    scope: scope,
  };

  const queryString = Object.keys(parameters)
    .map((key) => key + "=" + parameters[key])
    .join("&");

  const url_redirect = `https://id.twitch.tv/oauth2/authorize?${queryString}`;

  const getTokenFromHash = () => {
    const hash = window.location.hash.substr(1);
    const split1 = hash.split("=");
    const split2 = split1[1].split("&");
    const hash_value = split2[0];
    localStorage.setItem("token", hash_value);
  };

  const fetchTwitch = (e) => {
    e.preventDefault();
    if (window.location.hash !== "") getTokenFromHash();
    else return;
    axios
      .get(`https://api.twitch.tv/helix/search/channels`, {
        headers: {
          "Client-id": client_id,
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        params: {
          query: "kurolily",
        },
      })
      .then((response) => console.log(response));
  };

  return (
    <>
      <Container>
        <LoginContainer>
          <img src={twitchIcon} alt="twitch logo" width="200" height="200" />
          <Title>LOGIN WITH TWITCH</Title>
          <Button href={url_redirect}>LOGIN</Button>
        </LoginContainer>
      </Container>
    </>
  );
};
