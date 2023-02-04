import React from "react";
import { services } from "../../mock/services";
import {
  Box,
  Card,
  CardBox,
  CardIcon,
  CardText,
  CardTitle,
  ServicesBox,
  ServicesWrapper,
  Text,
  Title,
} from "./styles";

const Services = () => {
  return (
    <ServicesWrapper>
      <Box>
        <Title>My Awesome Service</Title>
        <Text>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </Text>

        <ServicesBox>
          {services.map((service) => (
            <Card key={service.id}>
              <CardBox>
                <CardIcon>{service.icon}</CardIcon>
                <CardTitle>{service.title}</CardTitle>
                <CardText>{service.text}</CardText>
              </CardBox>
            </Card>
          ))}
        </ServicesBox>
      </Box>
    </ServicesWrapper>
  );
};

export default Services;
