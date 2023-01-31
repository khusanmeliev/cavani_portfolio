import React from "react";
import { Box, ImgWrapper, Left, Right, Wrapper } from "./styles";
import homeImg from "../../assets/home.jpg";
import About from "../About/About";

const Main = () => {
  return (
    <Wrapper>
      <Box>
        <Left>
          <ImgWrapper>
            <img src={homeImg} alt="pic" />
          </ImgWrapper>
        </Left>
        <Right>
          <About />
        </Right>
      </Box>
    </Wrapper>
  );
};

export default Main;
