import React from "react";
import Header from "../Header/Header";
import styled from "styled-components";
import Footer from "../footer/footer";
import { House, Smartphone, Mail } from "lucide-react";

const Body = styled.div`
  margin: 0;
  padding: 0;
`;

const Container = styled.div`
  max-width: 100%;
  background-color: rgb(237, 243, 255);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ConteinerContact = styled.div`
  width: 1500px;
  height: 90%;
  border-radius: 15px;
  background-color: white;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 2rem;
  padding: 2rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    width: 90%;
    height: auto;
    padding: 1.5rem;
  }
`;

const Contactus = styled.div`
  height: auto;
  width: 630px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  h1 {
    padding-top: 5px;
    font-family: "Inter";
    font-weight: 700;
  }

  p {
    padding: 20px 0;
    font-family: "Inter";
    font-weight: 300;
    font-size: 16px;
    color: #9d9d9d;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const Span = styled.span`
  p {
    font-family: "Inter";
    font-weight: 700;
    font-size: 14px;
    color: rgb(46, 30, 115);
  }
`;

const Information = styled.div`
  width: 500px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 0;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    text-align: center;
  }
`;

const Icon = styled.div`
  height: 77px;
  width: 77px;
  background-color: rgb(46, 30, 115);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

const InformationText = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  padding-left: 30px;

  h3 {
    font-family: "Inter";
    font-weight: 700;
  }

  p {
    padding: 10px 0 0 0;
    font-size: 17px;
    line-height: 20px;
  }

  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

const FormContainer = styled.div`
  background: #3f1d9d;
  padding: 2rem;
  border-radius: 12px;
  width: 380px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 1rem;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 14px;
  border-radius: 8px;
  border: none;
  font-size: 1rem;
  outline: none;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  @media (max-width:768px) {
    padding: 8px;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 14px;
  border-radius: 8px;
  border: none;
  font-size: 1rem;
  outline: none;
  resize: none;
  height: 100px;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  @media (max-width:768px) {
    padding: 8px;
  }
`;

const Button = styled.button`
  background: #ff9ea4;
  color: white;
  font-size: 1rem;
  padding: 14px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  width: 100%;
  transition: 0.3s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background: #ff7b87;
  }
`;

export default function ContactUS() {
    return (
        <Body>
            <Header />
            <Container>
                <ConteinerContact>
                    <Contactus>
                        <Span>
                            <p>Contact Us</p>
                        </Span>
                        <h1>Get In Touch With Us</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <Information>
                            <Icon>
                                <House size={30} color="white" />
                            </Icon>
                            <InformationText>
                                <h3>Our Location</h3>
                                <p>99 S.t Jomblo Park Pekanbaru 28292. Indonesia</p>
                            </InformationText>
                        </Information>
                        <Information>
                            <Icon>
                                <Smartphone size={30} color="white" />
                            </Icon>
                            <InformationText>
                                <h3>Phone Number</h3>
                                <p>(+62) 81 414 257 9980</p>
                            </InformationText>
                        </Information>
                        <Information>
                            <Icon>
                                <Mail size={30} color="white" />
                            </Icon>
                            <InformationText>
                                <h3>Email Address</h3>
                                <p>info@yourdomain.com</p>
                            </InformationText>
                        </Information>
                    </Contactus>
                    <FormContainer>
                        <Input type="text" placeholder="Your Name" />
                        <Input type="email" placeholder="Your Email" />
                        <Input type="tel" placeholder="Your Phone" />
                        <TextArea placeholder="Your Message" />
                        <Button>Send Message</Button>
                    </FormContainer>
                </ConteinerContact>
            </Container>
            <Footer />
        </Body>
    );
}
