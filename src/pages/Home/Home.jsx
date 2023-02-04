import React from "react";
import { Box, HomeWrapper, Name, Text } from "./styles";

const Home = () => {
  return (
    <HomeWrapper>
      <Box>
        <Text>FREELANCE DIGITAL DESIGNER</Text>
        <Name>
          Hello, I’m <span>Khusan</span> Welcome to my World.
        </Name>
      </Box>
    </HomeWrapper>
  );
};

export default Home;
