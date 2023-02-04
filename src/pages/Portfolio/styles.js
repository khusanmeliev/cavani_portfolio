import styled from "styled-components";

export const PortfolioWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #101010;
  color: white;
`;

export const Box = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
  margin: 80px 0px;
`;

export const Title = styled.div`
  width: 100%;
  font-size: 60px;
  font-weight: 700;
  text-align: center;

  @media (max-width: 360px) {
    font-size: 40px;
  }
`;

export const Text = styled.div`
  width: 50%;
  font-size: 20px;
  text-align: center;
  color: rgba(198, 201, 216, 0.75);

  @media (max-width: 360px) {
    width: 100%;
    font-size: 18px;
  }
`;

export const PortfolioBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin: 50px 0px;
`;

export const Card = styled.li`
  width: 380px;
  height: 500px;
  background-color: #191919;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 10px 12px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
  }

  &:hover {
    margin-top: -15px;
    transition: 0.5s;
    cursor: pointer;
  }
`;

export const CardBox = styled.div`
  width: 80%;
  height: 35%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 250px;
`;

export const CardTitle = styled.div`
  width: 100%;
  font-size: 15px;
`;

export const CardText = styled.div`
  font-size: 25px;
  font-weight: 700;
`;

export const CardButton = styled.button`
  width: 130px;
  height: 40px;
  border: 1px solid white;
  border-radius: 5px;
  background-color: inherit;
  color: white;
  font-weight: 600;

  a {
    text-decoration: none;
    color: inherit;
  }

  :hover {
    cursor: pointer;
    transition: 0.3s;
    background-color: #f9004d;
    border: none;
  }
`;

export const BoxButton = styled.button`
  width: 180px;
  height: 50px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background-color: #f9004d;
  color: white;
  font-weight: 500;

  :hover {
    background-color: inherit;
    border: 2px solid #f9004d;
    color: #f9004d;
  }
`;
