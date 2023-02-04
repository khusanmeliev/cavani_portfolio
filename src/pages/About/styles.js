import styled from "styled-components";

export const AboutWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #191919;

  @media (max-width: 360px) {
    height: auto;
  }
`;

export const Box = styled.div`
  width: 90%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 100px 0px;

  @media (max-width: 360px) {
    height: auto;
    flex-direction: column;
    gap: 10px;
    margin: 50px 0px;
  }
`;

export const Img = styled.img`
  width: 40%;
  height: 100%;
  border-radius: 5px;

  @media (max-width: 360px) {
    width: 100%;
  }
`;

export const Text = styled.div`
  width: 55%;
  height: 75%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  color: white;

  @media (max-width: 360px) {
    width: 100%;
    gap: 10px;
  }
`;

export const UserTitle = styled.div`
  width: 100%;
  font-size: 60px;
  font-weight: 700;

  @media (max-width: 360px) {
    font-size: 30px;
  }
`;

export const UserText = styled.div`
  color: #717173;
  font-size: 20px;

  @media (max-width: 360px) {
    font-size: 18px;
    font-weight: 300;
  }
`;

export const UserDetails = styled.div``;
