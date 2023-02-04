import styled from "styled-components";

export const ContactWrapper = styled.div`
  width: 100%;
  background-color: #191919;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContactBox = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 360px) {
    flex-direction: column;
  }
`;

export const ContactDetails = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 100px 0px;

  @media (max-width: 360px) {
    width: 100%;
  }
`;

export const ContactImg = styled.img`
  width: 40%;
  display: flex;

  @media (max-width: 360px) {
    display: none;
  }
`;

export const ContactText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 60px;
  color: white;

  @media (max-width: 360px) {
    font-size: 40px;
  }
`;

export const Text = styled.div`
  width: 80%;
  font-size: 20px;
  color: rgba(198, 201, 216, 0.75);

  @media (max-width: 360px) {
    width: 100%;
    font-size: 18px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Input = styled.input`
  width: 80%;
  height: 40px;
  border: none;
  outline: none;
  border: 2px solid hsla(0, 0%, 100%, 0.2);
  background-color: inherit;
  color: rgba(198, 201, 216, 0.75);
  text-indent: 10px;
  border-radius: 5px;

  @media (max-width: 360px) {
    width: 100%;
  }
`;

export const TextArea = styled.textarea`
  width: 80%;
  height: 100px;
  border: 2px solid hsla(0, 0%, 100%, 0.2);
  color: rgba(198, 201, 216, 0.75);
  background-color: inherit;
  text-indent: 10px;
  border-radius: 5px;

  @media (max-width: 360px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  width: 150px;
  height: 50px;
  border-radius: 5px;
  border: none;
  color: white;
  background-color: #f9004d;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 1px;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
    transform: translateY(-0.4em);
    transition: 0.3s;
    background-color: inherit;
    border: 2px solid #f9004d;
    color: #f9004d;
  }
`;
