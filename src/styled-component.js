import styled from "styled-components";
/* ***LAYOUT*** */

export const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
  background: #303236;
`;

export const LoginContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  width: 500px;
  height: 1000px;
  margin: auto;
  background-color: #3d3f43;
  border-radius: 25px;
  box-shadow: 0px 6px 24px -6px rgba(0, 0, 0, 0.5);
`;

/* ***COMPONENTS*** */

export const Title = styled.h1`
  display: flex;
  color: #fff;
`;

export const TitleName = styled(Title)`
  margin-top: 2rem;
  justify-content: center;
  font-size: 3rem;
`;

export const Button = styled.a`
  background: linear-gradient(
    90deg,
    rgba(44, 161, 192, 1) 0%,
    rgba(41, 145, 162, 1) 150%
  );
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

export const SearchInput = styled.input.attrs({
  type: "text",
  placeholder: "Cerca...",
})`
  width: 300px;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.3rem;
  background-color: #3d3f43;
  color: #6d6f72;
  font-weight: bold;
  font-size: 1.2rem;

  &::placeholder {
    color: #6d6f72;
    font-weight: bold;
    font-size: 1.2rem;
  }

  &:focus {
    outline: none;
  }
`;

/* NAVBAR */

export const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 90%;
  height: 100px;
  background-color: #3d3f43;
  margin-top: 1rem;
`;

export const NavItem = styled.li`
  color: #6d6f72;
  font-size: 1.2rem;
  list-style-type: none;
`;

export const NavButton = styled(Button)`
  box-shadow: none;
`;
