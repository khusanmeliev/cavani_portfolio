import React from "react";
import {
  AboutWrapper,
  Box,
  Img,
  Text,
  UserDetails,
  UserText,
  UserTitle,
} from "./styles";
import about from "../../assets/about.jpg";

const About = () => {
  return (
    <AboutWrapper>
      <Box>
        <Img src={about} />

        <Text>
          <UserTitle>About Me</UserTitle>
          <UserText>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which dont look even slightly
            believable. If you are going to use a passage of Lorem Ipsum,
          </UserText>
          <UserDetails></UserDetails>
        </Text>
      </Box>
    </AboutWrapper>
  );
};

export default About;
