import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 360px) {
    height: 70vh;
  }
`;

export const Box = styled.div`
  width: 80%;
  height: 65%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  color: white;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 360px) {
    width: 90%;
  }
`;

export const Text = styled.div`
  width: 100%;
  letter-spacing: 2px;
  color: rgba(198, 201, 216, 0.75);
  font-weight: 500;
`;

export const Name = styled.div`
  width: 75%;
  font-size: 80px;
  font-weight: 800;

  @media (max-width: 400px) {
    width: 100%;
    font-size: 30px;
  }
`;
