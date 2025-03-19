import * as React from "react";
import styled from "styled-components";
import Header from "../Header/Header";
import Footer from "../footer/footer";
import Aboutus from "../../images/Aboutus.webp"
import pauta from "../../images/pauta.webp"

const Body = styled.div`
    margin: 0;
    padding: 0;
`
const Conteiner = styled.div`

    max-width: 100%;
    max-height: 100%;
    margin-top: 50px;
    margin-bottom: 50px;
    @media (min-width: 1200px){
        h1{
            background: black;
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        p{
            &:first-child{
                display: none;
            }
        }
    }
`

const ConteinerImg = styled.div`
    position:relative;
    display: flex;
    max-width: 575px;
    max-height: 473px;

    @media (max-width:1200px) {
        order: 1;
        margin-bottom: 50px;
    }
`

export const IMG = styled.img`
    border-radius: 10px;
    z-index: 0;
    width: 100%; /* Faz a imagem ocupar toda a largura do contêiner */
    height: auto; /* Mantém a proporção da imagem */
    max-width: 100%; /* Garante que a imagem não ultrapasse o contêiner */
`

const ContainerTitle = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 100px;

    h1{
        font-family: "Inter";
        font-weight: 600;
        font-size: 40px;
        line-height: 38.09px;
        letter-spacing: 0%;
        text-align: left;   
    }


    @media (max-width:1200px) {
        margin-bottom: 30px;

        h1{
            background: linear-gradient(180deg, #de4396 10%, #a83284 50%, #de4396 90%);
             background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            filter: brightness(1.2);
            text-align: center;
            
        }
    }
    
`
const Conteiner1 = styled.div`
    display:flex;
    align-items: stretch;
    justify-content:space-evenly;
    padding: 20px 40px 20px 40px;
    margin-bottom: 50px;
    @media (max-width:1200px) {
        flex-direction: column;
        align-items: center;
    }
`
const ConteinerText = styled.div`
    max-width: 550px;
    @media (max-width:1200px) {
        padding-top: 15px;
        h3{
            padding-bottom:10px;
            text-align: center !important;
        }
        order: 2;
    }
    h3{
        font-family: "Inter";
        font-weight: 600;
        font-size: 28px;
        line-height: 38.09px;
        letter-spacing: 0;
        text-align: left;
    }

    p{
        font-family: "Inter";
        font-weight: 400;
        font-size: 15px;
        line-height: 30px;
        letter-spacing: 0%;
        text-align: left;
    }
`;


const SpanP = styled.span`
  font-family: "Inter";
  font-weight: bold;
  font-size: 40px;
  line-height: 71px;
  background: linear-gradient(180deg, #de4396 10%, #a83284 50%, #de4396 90%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: brightness(1.2);
`;


export default function AboutUs() {
    return (
        <Body>
            <Header />
            <Conteiner>

                <ContainerTitle>
                    <h1>O que é a <SpanP>Passcode</SpanP> ?</h1>
                </ContainerTitle>

                <Conteiner1>
                    <ConteinerText>
                        <h3>Nosso Principal Objetivo</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </ConteinerText>
                    <ConteinerImg>
                        <IMG src={Aboutus}></IMG>
                    </ConteinerImg>
                </Conteiner1>

                <Conteiner1>
                    <ConteinerImg>
                        <IMG src={pauta}></IMG>
                    </ConteinerImg>
                    <ConteinerText>
                        <h3>Nosso Principal Objetivo</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </ConteinerText>
                </Conteiner1>
            </Conteiner>
            <Footer />
        </Body>
    );
}