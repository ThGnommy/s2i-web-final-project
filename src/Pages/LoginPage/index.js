import React from "react";
import {
  Container,
  LoginContainer,
  Title,
  Button,
} from "./../../styled-component";
import twitchIcon from "./../../assets/img/twitch-brands.svg";

export const LoginPage = () => {
  const client_id = "lygnd4tsud660cag5g2354e4w2ucyz";
  const redirect_uri = "http://localhost:3000/home";
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

  return (
    <>
      <Container>
        <LoginContainer>
          <Title>TWITCH LOGIN</Title>
          <Button href={url_redirect}>LOGIN</Button>
          <img src={twitchIcon} alt="twitch logo" width="200" height="200" />
        </LoginContainer>
      </Container>
    </>
  );
};
