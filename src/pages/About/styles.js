import styled from "styled-components";

export const AboutWrapper = styled.div`
  width: 95%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 150px;
`;

export const AboutText = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 50px;
`;

export const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 5px;

  hr {
    width: 75%;
    height: 3px;
    border-width: 0;
    color: #7d7789;
    background-color: #7d7789;
  }
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const Text = styled.div`
  width: 45%;
  color: #7d7789;

  span {
    font-weight: 700;
  }
`;

export const Address = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  color: #7d7789;
  gap: 10px;

  li {
    list-style-type: none;
    font-weight: 700;

    span {
      font-weight: 200;
    }
  }
`;
