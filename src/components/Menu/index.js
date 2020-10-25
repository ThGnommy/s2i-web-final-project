import React from "react";
import { Navbar, NavItem, NavButton } from "./../../styled-component";
import { Link } from "react-router-dom";
import axios from "axios";

export const Menu = () => {
  const styles = {
    color: "#fff",
    fontSize: "2rem",
    textDecoration: "none",
  };

  const client_id = "lygnd4tsud660cag5g2354e4w2ucyz";
  const token = `${localStorage.getItem("token")}`;

  const parameters = {
    client_id: client_id,
    token: token,
  };

  const queryString = Object.keys(parameters)
    .map((key) => key + "=" + parameters[key])
    .join("&");

  const url_redirect = `https://id.twitch.tv/oauth2/revoke?${queryString}`;

  return (
    <>
      <Navbar>
        <Link style={styles} to="/home">
          Home
        </Link>
        <Link style={styles} to="/favorites">
          Favorites
        </Link>
      </Navbar>
    </>
  );
};
