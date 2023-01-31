import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const TextWrapper = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin: 0px 40px;

  div {
    width: 60px;
    height: 4px;
    background-color: black;
  }
`;

export const Name = styled.h1`
  font-size: 50px;
  color: #333;
`;

export const Text = styled.p`
  font-size: 25px;
  color: grey;

  span {
    color: black;
    font-weight: 700;
  }
`;

export const Button = styled.button`
  width: 160px;
  height: 50px;
  background-color: #333;
  color: white;
  border: none;
  cursor: pointer;

  :hover {
    background-color: white;
    color: #333;
    border: 2px solid black;
  }
`;
