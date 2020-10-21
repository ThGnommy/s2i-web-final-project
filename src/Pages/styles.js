import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-center: center;
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

export const Title = styled.h1`
  color: #fff;
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
