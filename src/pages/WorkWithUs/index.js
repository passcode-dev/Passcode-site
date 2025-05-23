import * as React from "react";
import styled, { keyframes } from "styled-components";
import Header from "../Header/Header"
import Footer from '../footer/footer'
import { Button } from "../../Components/Buton";
import grupo from "../../images/grupo.png"
import { useState } from "react";
import { X, Upload } from 'lucide-react'

const Body = styled.div`
    padding: 0px;
    margin: 0px;
    display: flex;
    justify-content: center;
    flex-direction: column;

`
const ButtonMod = styled(Button)`
`

const ButtonEnviar = styled(Button)`
    width: 100%;
    margin: 0;
`
const Conteiner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 100%;
    margin-bottom: 200px;
    margin-top: 100px;

    @media (max-width:900px) {
        margin-top: 10px;
        margin-bottom: 100px;
    }
    
`
const ConteinerText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 18px;
    h1{
        margin:0;
        font-family: "Inter";
        font-weight: 300;
        font-size: 45px;
        line-height: 71px;
    }
    p{
        max-width: 600px;
        text-align: center;
        font-family: Inter;
        font-weight: 400;
        font-size: 18px;
        line-height: 36px;
        margin-bottom: 50px;
    }

    @media (max-width:900px) {

        margin: 30px;
        h1{
            text-align: center;
        }
    }
`
const SpanP = styled.span`
  font-family: "Inter";
  font-weight: bold;
  font-size: 45px;
  line-height: 71px;
  background: linear-gradient(180deg, #de4396 10%, #a83284 50%, #de4396 90%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: brightness(1.2);
`;


const IMG = styled.img`
    max-width: 80%;
    @media (max-width:900px) {
        max-width: 100%;
    }
`

const JoinUs = styled.form`
    display: flex;
    padding: 15px 10px 0 0;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1{
        font-family: Inter;
        font-weight: 700;
        font-size: 40px;
        line-height: 20px;
    }

    @media (max-width:900px) {
        h1{
            font-size: 36px;
            margin-bottom: 15px;
        }
    }
`
const Label = styled.label`
    font-family: Inter;
    font-size: 13px;
    color:lightgray;
`
const Input = styled.input`
    height:40px;
    width: 100%;
    border: 1px solid rgb(35, 49, 82);
    color:white;
    font-size: 16px;
    padding-left: 10px;
    background-color: #0f1729;
    box-sizing: border-box;
`
const FileInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const FileLabel = styled.label`
  height: 50px;
  width: 100%;
  border: 1px solid rgb(55, 63, 82);
  color: lightgray;
  background-color: #0f1729;
  font-family: Inter;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding-left: 10px;
  box-sizing: border-box;

`;

const HiddenInput = styled.input`
  display: none;
`;

const PlaceholderText = styled.span`
    width:100%;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
`;

const Conteinerinput = styled.div`
    display: flex;

    padding: 0;
    width: 100%;
    gap: 30px;
    align-items: flex-start;
    flex-direction: column;
    p{
        padding-top: 10px;
        text-align: start;
        font-family: Inter;
        font-weight: 200;
        font-size: 15px;
        color:lightgray;
        margin: 0;
    }
    @media (max-width:900px) {
        p{
            text-align: center;
        }
    }
`
const PlaceInput = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
    gap: 5px;
    text-align: start;
`

const slideDown = keyframes`
    from {
    transform: translate(-50%, -60%);
    opacity: 0;
  }
  to {
    transform: translate(-50%, -50%);
    opacity: 1;
  }
`;


const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2); /* Leve escurecimento para destaque */
  backdrop-filter: blur(8px); /* Aplica o efeito de desfoque */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;


const Modal = styled.div`
    position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 380px;
    width: 100%;
    background-color: #0f1729;
    text-align: center;
    line-height: 20px;
    padding: 20px 20px 60px 30px;
    color: white;
    opacity: 0;
    animation: ${slideDown} 0.4s ease-out forwards; // Aplica a animação

    @media (max-width:800px) {
        width: 80%;
        
    }
`

const Head = styled.div`
    display: flex;
    justify-content:flex-end;
    width: 100%;
`
const Sair = styled(X)` 
    color: white;
    text-align: center;
    cursor:pointer;
`
export default function WorkWithUs() {
    const [open, setOpen] = useState(false)
    const [fileName, setFileName] = useState("");

    const handleFileChange = (event) => {
        if (event.target.files.length > 0) {
            setFileName(event.target.files[0].name);
        } else {
            setFileName("");
        }
    };
    console.log(open)

    return (
        <>
            {open == true && (
                <Overlay onClick={() => setOpen(false)}>
                    <Modal onClick={(e) => e.stopPropagation()}>
                        <Head>
                            <Sair size={25} onClick={() => setOpen(false)} />
                        </Head>
                        <JoinUs>
                            <h1>Junte-se a Nós</h1>
                            <Conteinerinput>
                                <p>Preencha o formulário abaixo para se candidatar:</p>
                                
                                <PlaceInput>
                                    <Label>Nome Completo</Label>
                                    <Input type="text" required placeholder="Ex: Leonardo Ribeiro"></Input>
                                </PlaceInput>
                                
                                <PlaceInput>
                                    <Label>Endereço de E-mail</Label>
                                    <Input type="email" required placeholder="Ex: leonardo@gmail.com"></Input>
                                </PlaceInput>

                                {/* Input de Arquivo */}
                                <FileInputWrapper>
                                    <HiddenInput id="fileUpload" required type="file" onChange={handleFileChange} />
                                    <FileLabel htmlFor="fileUpload">
                                        <PlaceholderText>
                                            {fileName ? fileName : <>Coloque seu currículo aqui <Upload style={{ marginRight: "10px" }} /></>}
                                        </PlaceholderText>
                                    </FileLabel>
                                </FileInputWrapper>

                                <ButtonEnviar>ENVIAR</ButtonEnviar>
                            </Conteinerinput>
                        </JoinUs>

                    </Modal>
                </Overlay>
            )
            }

            <Body>
                <Header />
                <Conteiner>
                    <ConteinerText>
                        <h1>Junte-se ao nosso <SpanP>Grupo</SpanP></h1>
                        <p>Valorizamos a experimentação criativa e incentivamos ideias inovadoras. Se você é movido por desafios e busca um ambiente estimulante, venha fazer parte do nosso time e crescer junto conosco. Aqui, as possibilidades são infinitas!</p>
                        <ButtonMod onClick={() => setOpen(true)}>Junte-se a nós</ButtonMod>
                    </ConteinerText>
                    <IMG src={grupo}></IMG>
                </Conteiner>
                <Footer/>
            </Body>


        </>

    );
}
