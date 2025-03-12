import React from "react";
import Header from "../Header/Header";
import styled from "styled-components";
import Footer from "../footer/footer";
import {Button} from "../../Components/Buton"

const Page=styled.div`
  display: flex;
  justify-content: center;
  max-width: 100%;
  align-items: center;
  background-color:rgba(241, 241, 241, 0.2) ;
  padding-bottom: 200px;

  @media (max-width:900px) {
    flex-direction: column;
  }
`

const DivContact = styled.div`
  display: flex;
  width: 60%;
  padding: 30px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-family: 'Inter';

  @media (max-width:900px) {
    flex-direction: column;
  }
`

const StyledContactUs = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  max-height: 500px;
  height: 300px;
  padding: 50px;

  h1{
    font-size: 16px;
    font-weight: bold;
    color: rgb(110, 110, 110);
    margin: 10px;
    margin-bottom: 20px;
  }

  span{
    font-size: 25px;
    max-width: 100px;
  }

  @media (max-width:900px) {
    flex-direction: column;
    margin-bottom: 200px;

    h1{
      margin: 0px;
    }
  }
`

const SpanP = styled.span`
  font-family: "Inter";
  font-weight: bold;
  font-size: 53px;
  line-height: 71px;
  background: linear-gradient(225deg, #f7666f 0%, #406aff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StyledContactUsText = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  
  width: 100%;
  max-height: 500px;
  height: 300px;
  padding: 50px;

  h1{
    font-size: 53px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  span{
    color: rgb(46, 46, 46);
  }

  @media (max-width:900px) {
    padding: 0px;
    height: 100px;

    p{
      display:none;
    }
  }

`

const DivInputs = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width:900px) {
    flex-direction: column;
  }
`

const Matters = styled.div`
  display: flex;
  width: 100%;
  flex-direction:column;
  justify-content: center;

  span{
    margin-top: 30px;
    color: rgb(94, 94, 94);
    font-size: 30px;
  }

  @media (max-width:900px) {
    display: none;
  }
`

const PlaceInput = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
    gap: 5px;
    text-align: start;
    margin: 10px;
    font-weight: bold;


    @media (max-width:900px) {
    margin: 0px;
    margin-top: 15px;
  }

`

const Label = styled.label`
    font-family: Inter;
    font-size: 12px;

`
const Input = styled.input`
    height:40px;
    width: 100%;
    border: 1px solid rgba(35, 49, 82, 0.13);
    font-size: 16px;
    padding-left: 10px;
    box-sizing: border-box;
    
`

const InputM = styled.textarea`
    height: 100px;
    width: 100%;
    border: 1px solid rgba(35, 49, 82, 0.13);
    font-size: 16px;
    padding: 10px;
    box-sizing: border-box;
    resize: none;
    font-family: "inter";
`;


const StyleButton=styled(Button)`
  max-width: 200px;
  margin-top: 30px;
  margin: 10px;

  @media (max-width:900px) {
    max-width: 100%;
    width: 100%;
    margin: 0px;
    margin-top: 20px;
  }
`

export default function ContactUS() {
  return (
    <>
      <Header />
      <Page>
        <DivContact>

          <StyledContactUsText>

            <h1>Fale <SpanP>conosco</SpanP></h1>
            <p>Entre em contato para falar sobre :</p>
            <Matters>
              <span>Novo projeto</span>
              <span>Se juntar ao time</span>
              <span>Consultas gerais</span>
              <span>Suporte</span>
            </Matters>
          </StyledContactUsText>

          <StyledContactUs>
            <h1>Digite o assunto que desja tratar conosco e sua identificação</h1>

            <DivInputs>
              <PlaceInput>
                <Label>Assunto</Label>
                <Input></Input>
              </PlaceInput>
            </DivInputs>

            <DivInputs>
              <PlaceInput>
                <Label>Nome</Label>
                <Input></Input>
              </PlaceInput>

              <PlaceInput>
                <Label>Sobre nome</Label>
                <Input></Input>
              </PlaceInput>

            </DivInputs>


            <DivInputs>
              <PlaceInput>
                <Label>Email</Label>
                <Input></Input>
              </PlaceInput>

              <PlaceInput>
                <Label>Número</Label>
                <Input></Input>
              </PlaceInput>
            </DivInputs>


            <DivInputs>
              <PlaceInput>
                <Label>Mensagem</Label>
                <InputM></InputM>
              </PlaceInput>
            </DivInputs>

          <StyleButton>Entrar em contato</StyleButton>

          </StyledContactUs>


        </DivContact>

      </Page>


      <Footer />
    </>
  );
}
