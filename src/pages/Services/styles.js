import styled from "styled-components";

export const ServicesWrapper = styled.div`
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

export const ServicesBox = styled.div`
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
  width: 350px;
  height: 350px;
  background-color: #191919;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  &:hover {
    margin-top: -15px;
    transition: 0.5s;
    cursor: pointer;
    background-color: white;
  }
`;

export const CardBox = styled.div`
  width: 80%;
  height: 60%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
`;

export const CardIcon = styled.div`
  font-size: 40px;
  color: white;
`;

export const CardTitle = styled.div`
  width: 100%;
  font-size: 25px;
  font-weight: 700;
`;

export const CardText = styled.div`
  font-size: 18px;
`;
