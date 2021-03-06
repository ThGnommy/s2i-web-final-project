import React from "react";
import { useSelector } from "react-redux";
import { Menu, NavButton, StyledLink } from "../../styled-component";
import { auth, instance } from "./../../api/firebase";
export const Navbar = () => {
  const { userIsLogged } = useSelector((state) => state.user);

  const handleRegister = () => {
    instance.auth.onAuthStateChanged((currentUser) => {
      if (!currentUser) {
        auth.signInWithGoogle();
      } else return;
    });
  };

  const handleLogout = () => {
    if (window.confirm("Are you sure?")) {
      instance.auth.onAuthStateChanged((currentUser) => {
        if (currentUser) {
          auth.signOutWithGoogle();
        }
      });
    } else return;
  };

  const registerButton = <NavButton onClick={handleRegister}>Signin</NavButton>;

  const logoutButton = (
    <StyledLink onClick={handleLogout} to="/">
      Signout
    </StyledLink>
  );

  return (
    <>
      <Menu>
        <h1>My Pexels</h1>
        <hr />
        <ul>
          <StyledLink to="/">Home</StyledLink>
          {userIsLogged ? (
            <StyledLink to="/favorites">Favorites</StyledLink>
          ) : null}
          {!userIsLogged ? registerButton : logoutButton}
        </ul>
      </Menu>
    </>
  );
};
