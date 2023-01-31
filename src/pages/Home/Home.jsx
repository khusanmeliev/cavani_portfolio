import React from "react";
import { Button, HomeWrapper, Name, Text, TextWrapper } from "./styles";

const Home = () => {
  return (
    <HomeWrapper>
      <TextWrapper>
        <Name>KHUSAN MELIEV</Name>
        <div></div>
        <Text>
          Creative <span>Designer</span>
        </Text>
        <Button>Get in Touch</Button>
      </TextWrapper>
    </HomeWrapper>
  );
};

export default Home;
