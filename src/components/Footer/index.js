import React from "react";
import { FooterContainer } from "../../styled-component";
import { useSelector } from "react-redux";
export const Footer = () => {
  const { userIsLogged, avatar, email } = useSelector((state) => state.user);

  return (
    <FooterContainer>
      {userIsLogged && (
        <img referrerPolicy="no-referrer" src={avatar} alt="avatar" />
      )}
      {userIsLogged && <p>{email}</p>}
      {!userIsLogged && (
        <p>Please sign in if you want to save your photos and videos.</p>
      )}
    </FooterContainer>
  );
};
