import React from "react";
import {
  Button,
  ContactBox,
  ContactDetails,
  ContactImg,
  ContactText,
  ContactWrapper,
  Form,
  Input,
  Text,
  TextArea,
  Title,
} from "./styles";

import contact from "../../assets/contact.jpg";

const Contact = () => {
  return (
    <ContactWrapper>
      <ContactBox>
        <ContactDetails>
          <ContactText>
            <Title>Contact Us.</Title>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto cupiditate aperiam neque
            </Text>
          </ContactText>

          <Form>
            <Input
              type="text"
              placeholder="Your Name *"
              required
              min={3}
              max={50}
            />
            <Input type="email" placeholder="Your Email *" required />
            <Input type="text" placeholder="Write a subject " required />

            <TextArea
              name="message"
              cols="30"
              rows="10"
              placeholder="Your Message "
              required
            ></TextArea>

            <Button>SUBMIT</Button>
          </Form>
        </ContactDetails>

        <ContactImg src={contact} />
      </ContactBox>
    </ContactWrapper>
  );
};

export default Contact;
