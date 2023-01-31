import React from "react";
import { AboutText, AboutWrapper, Address, Bottom, Text, Top } from "./styles";

const About = () => {
  return (
    <AboutWrapper>
      <AboutText>
        <Top>
          ABOUT ME <hr />
        </Top>

        <Bottom>
          <Text>
            <p>
              ABOUT ME Hello there! My name is <span>Khusan Meliev.</span> I am
              a graphic designer, and I'm very passionate and dedicated to my
              work.
            </p>
            <p>
              With 20 years experience as a professional a graphic designer, I
              have acquired the skills and knowledge necessary to make your
              project a success.
            </p>
          </Text>
          <Address>
            <li>
              Name: <span>Khusan Meliev</span>
            </li>
            <li>
              Address: <span>Samarkand, Urgut</span>
            </li>
            <li>
              Study:
              <span>School of 93 number</span>
            </li>
            <li>
              Degree: <span>Master of Sciense</span>
            </li>
            <li>
              Mail: <span>khusanmeliev@gmail.com.com</span>
            </li>
            <li>
              Phone: <span>990956949</span>
            </li>
          </Address>
        </Bottom>
      </AboutText>
    </AboutWrapper>
  );
};

export default About;
