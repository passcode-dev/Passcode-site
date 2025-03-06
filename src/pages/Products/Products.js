import * as React from "react";
import styled from "styled-components";
import { Button } from "../../Components/Buton";
import main from "../../images/main.png";

const Conteiner = styled.div`
    margin-top: 150px;
    display: flex;
    justify-content: center;
    height: 546px;
`
const ConteinerText = styled.div`
    width: 531px;
    height: 426px;
    gap: 75px;
`
const HeaderText = styled.div`
   h1{
        font-family: Inter;
        font-weight: 300;
        font-size: 45px;
        line-height: 71px;
        letter-spacing: 0%;
    }
    p{
        font-family: Inter;
        font-weight: 400;
        font-size: 18px;
        line-height: 36px;
        letter-spacing: 0%;
    }
    padding-bottom: 30px;
`
const SpanP = styled.span`
  font-family: "Inter";
    font-weight: bold;
    font-size: 53px;
    line-height: 71px;
    letter-spacing: 0;
    background: linear-gradient(180deg, #DE4396 10%, #A83284 50%, #DE4396 90%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: brightness(1.2); /* Aumenta a intensidade da cor */
`

const SpanG=styled.span`
    font-size: 55px;
    font-weight: bold;

`
const SpanE = styled.span`
    font-family: "Inter";
    font-weight: bold;
    font-size: 53px;
    line-height: 71px;
    letter-spacing: 0%;
    background: linear-gradient(225deg, #F7666F 0%, #406AFF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const ConteinerImage = styled.div`
    width: 614px;
    height: 546px;
    gap: 10px;
`
const Img = styled.img`
    width: 614px;

`
export default function Products  ()  {
    return (
        <>
            <Conteiner>
                <ConteinerText>
                    <HeaderText>
                        <h1>Grandes <SpanP>Produtos</SpanP> são Criados por <SpanG>grandes</SpanG> <SpanE>equipes</SpanE></h1>
                        <p>Montamos e gerenciamos uma equipe de desenvolvedores de alto nível para transformar suas ideias em realidade.</p>
                    </HeaderText>
                    <Button>Vamos Começar</Button>
                </ConteinerText>
                <ConteinerImage>
                    <Img src={main} alt="Banner de apresentação"></Img>
                </ConteinerImage>
            </Conteiner>
        </>
    );
}