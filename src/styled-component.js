import { Link } from "react-router-dom";
import styled from "styled-components";

/* ***LAYOUT*** */

export const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
  background: ${(props) => props.theme.bgDark};
  font-family: -apple-system, BlinkMacSystemFont, segoe ui, roboto, oxygen,
    cantarell, helvetica neue, ubuntu, sans-serif;
`;

export const ContainerSection = styled(Container)`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

export const SearchSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

/* ***COMPONENTS*** */

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: #000;
  color: #fff;
  width: 100%;
  height: 100%;

  & hr {
    display: none;
  }

  & h1 {
    color: #fff;
    font-size: 2rem;
    cursor: default;
    transition: color 300ms ease-in-out;
  }

  & h1:hover {
    color: #2ca1c0;
  }

  & ul {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  @media (max-width: 470px) {
    flex-direction: column;
    justify-content: center;

    & ul {
      flex-direction: column;
      text-align: center;
    }

    & hr {
      display: flex;
      width: 90%;
    }
  }
`;

export const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  cursor: pointer;
  margin: 0 1rem;
  transition: color 300ms ease-in-out;

  &:hover {
    color: #2ca1c0;
  }
`;

export const Title = styled.h1`
  display: flex;
  font-size: 2rem;
  color: #fff;
  margin-bottom: 2rem;
`;

export const SmallTitle = styled.h2`
  display: flex;
  font-size: 1.5rem;
  color: #fff;
  margin: 0;
`;

export const Image = styled.img`
  width: 20vw;
  height: 20vw;
`;

export const ButtonSearch = styled.button`
  margin: 2rem 0;
  background: ${(props) => props.theme.button.green};
  cursor: pointer;
  color: #fff;
  border-radius: 20px;
  padding: 10px 40px;
  box-shadow: 0px 6px 24px -6px rgba(0, 0, 0, 0.5);
  user-select: none;
  text-decoration: none;
  outline: none;
  border-style: none;

  &:active {
    transform: scale(0.9);
  }
`;

export const SearchInput = styled.input.attrs({
  type: "text",
  placeholder: "Search for free photos...",
})`
  width: 80vw;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.3rem;
  background-color: ${(props) => props.theme.bgLight};
  color: ${(props) => props.theme.textLight};
  font-weight: bold;
  font-size: 1.2rem;

  &::placeholder {
    color: ${(props) => props.theme.textDark};
    font-weight: bold;
    font-size: 1.2rem;
  }

  &:focus {
    outline: none;
  }
`;

export const PhotoList = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 90vw;
`;

export const SinglePhoto = styled.div`
  display: flex;
  align-items: center;
  background-image: ${(props) => props.backgroundImage};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 5px;
  margin: 1rem;
  width: 400px;
  height: 500px;
  text-align: center;
  font-size: 2vw;
  box-shadow: 0px 6px 24px -6px rgba(0, 0, 0, 0.5);
  transition: filter 250ms ease-in;
  align-items: flex-end;
  justify-content: space-evenly;

  & div {
    width: 100%;
  }

  @media (max-width: 959px) {
    width: 90vw;
  }
`;

export const PhotoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background-color: #000;
  opacity: 0.5;
`;

export const TextPhoto = styled.p`
  color: #fff;
  font-size: 1rem;
  font-style: italic;
  margin: 0 0.5rem;
`;

export const ChannelImage = styled.img`
  border-radius: 25%;
  height: 15vw;
  width: 15vw;
  box-shadow: 0px 6px 24px -6px rgba(0, 0, 0, 0.5);
`;

// Is live component

export const LiveContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;

export const OnlineText = styled.p`
  color: "green";
`;
export const OfflineText = styled.p`
  color: "red";
`;

export const AddToFavorite = styled(ButtonSearch)`
  font-size: 1rem;

  &:disabled {
    background: ${(props) => props.theme.bgLight};
  }
`;
