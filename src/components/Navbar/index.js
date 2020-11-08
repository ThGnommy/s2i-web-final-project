import React from "react";
import { Menu, StyledLink } from "../../styled-component";
export const Navbar = () => {
  return (
    <>
      <Menu>
        <h1>My Pexels</h1>
        <hr />
        <ul>
          <StyledLink to='/'>Home</StyledLink>
          <StyledLink to='/favorites'>Favorites</StyledLink>
        </ul>
      </Menu>
    </>
  );
};
