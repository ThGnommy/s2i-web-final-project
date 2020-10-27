import styled from "styled-components";
/* ***LAYOUT*** */

export const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
  background: ${(props) => props.theme.bgDark};
`;

export const ContainerSection = styled(Container)`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  width: 100%;
  flex-direction: row;
  background: ${(props) => props.theme.bgDark};
  margin-top: 2rem;
`;

export const LoginContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  min-width: 40vw;
  height: 90vh;
  margin: auto;
  background-color: ${(props) => props.theme.bgLight};
  border-radius: 25px;
  box-shadow: 0px 6px 24px -6px rgba(0, 0, 0, 0.5);
`;

export const SearchSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 40vh;
  width: 70vh;
`;

export const FavoritesSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 40vh;
  width: 30vh;
`;

/* ***COMPONENTS*** */

export const Title = styled.h1`
  display: flex;
  color: #fff;
`;

export const Image = styled.img`
  width: 20vw;
  height: 20vw;
`;

export const TitleName = styled(Title)`
  margin-top: 2rem;
  justify-content: center;
  font-size: 3rem;
`;

export const Button = styled.a`
  background: ${(props) => props.theme.button.green};
  cursor: pointer;
  color: #fff;
  border-radius: 20px;
  padding: 10px 40px;
  box-shadow: 0px 6px 24px -6px rgba(0, 0, 0, 0.5);
  user-select: none;
  text-decoration: none;

  &:active {
    transform: scale(0.9);
  }
`;

export const ButtonSearch = styled(Button)`
  margin: 2rem 0;
`;

export const SearchInput = styled.input.attrs({
  type: "text",
  placeholder: "Cerca...",
})`
  width: 300px;
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

export const ChannelList = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 60vh;
  overflow-y: scroll;
  width: 100%;
  background-color: ${(props) => props.theme.bgLight};
  box-shadow: 0px 6px 24px -6px rgba(0, 0, 0, 0.5);
  color: ${(props) => props.theme.textLight};
  /* &::-webkit-scrollbar {
    display: none;
  } */

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    padding: 1rem;
  }
  &::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.button.green};
    border-radius: 50px;
  }
  &::-webkit-scrollbar-track {
    background: ${(props) => props.theme.bgLight};
    border-radius: 50px;
  }
`;

export const SingleChannel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.bgDark};
  border-radius: 5px;
  margin: 2rem 0;
  padding: 1rem;
  width: 30vw;
  text-align: center;
  font-size: 2vw;
  box-shadow: 0px 6px 24px -6px rgba(0, 0, 0, 0.5);

  & > * {
    margin: 0.5rem;
  }
  & > h3 {
    font-size: 3vw;
  }
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

export const IsLive = styled.div`
  display: ${(props) => props.show || "block"};
  background-color: green;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 0.5rem;
`;

export const IsNotLive = styled.div`
  background-color: red;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 0.5rem;
`;
