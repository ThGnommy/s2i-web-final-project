import React, { useContext } from "react";
import { StoreContext } from "../../StoreContext";
import { Menu, NavButton, StyledLink } from "../../styled-component";
import { auth, instance } from "./../../api/firebase";
export const Navbar = () => {
  const { userIsLogged } = useContext(StoreContext);

  const handleRegister = () => {
    instance.auth.onAuthStateChanged((currentUser) => {
      console.log(currentUser);
      if (!currentUser) {
        auth.signInWithGoogle();
      } else return;
    });
  };

  const handleLogout = () => {
    instance.auth.onAuthStateChanged((currentUser) => {
      console.log(currentUser);
      if (currentUser) {
        auth.signOutWithGoogle();
      }
    });
  };

  const registerButton = <NavButton onClick={handleRegister}>Signin</NavButton>;

  const logoutButton = (
    <StyledLink onClick={handleLogout} to='/'>
      Signout
    </StyledLink>
  );

  return (
    <>
      <Menu>
        <h1>My Pexels</h1>
        <hr />
        <ul>
          <StyledLink to='/'>Home</StyledLink>
          {userIsLogged ? (
            <StyledLink to='/favorites'>Favorites</StyledLink>
          ) : null}
          {!userIsLogged ? registerButton : logoutButton}
        </ul>
      </Menu>
    </>
  );
};
