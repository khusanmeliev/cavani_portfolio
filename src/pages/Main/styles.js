import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
`;

export const Left = styled.div`
  width: 35%;
  height: 100%;
`;

export const ImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  img {
    width: 100%;
  }
`;

export const Right = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
