import React from "react";
import { portfolios } from "../../mock/portfolio";
import {
  Box,
  Card,
  CardBox,
  CardButton,
  CardText,
  CardTitle,
  PortfolioBox,
  PortfolioWrapper,
  Text,
  Title,
} from "./styles";

const Portfolio = () => {
  return (
    <PortfolioWrapper>
      <Box>
        <Title>My Latest Project</Title>
        <Text>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </Text>

        <PortfolioBox>
          {portfolios.map((portfolio) => (
            <Card key={portfolio.id}>
              {/* <img src={portfolio.backgroundImage} alt="pic" /> */}
              <CardBox>
                <CardTitle>{portfolio.title}</CardTitle>
                <CardText>{portfolio.text}</CardText>
                <CardButton>
                  <a
                    href={portfolio.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {portfolio.button}
                  </a>
                </CardButton>
              </CardBox>{" "}
            </Card>
          ))}
        </PortfolioBox>
      </Box>
    </PortfolioWrapper>
  );
};

export default Portfolio;
