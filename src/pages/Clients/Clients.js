import * as React from "react"
import styled from "styled-components"
import { CarouselClients } from "../../Components/CarouselClients"
import { Divider } from "../../Components/Divider"

const Body=styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 100px;
    margin-bottom: 200px;

    @media (max-width:950px) {
        margin-bottom: 100px;

    }
`
const Titulo=styled.div`
    max-width: 500px;
    height: 133px;
    gap: 20px;
    margin-bottom: 100px;
    h2{
        font-family: Inter;
        font-weight: 400px;
        font-size: 35px;
        line-height: 55px;
        letter-spacing: 0%;
        text-align: center;
    }

`
const Span=styled.span`
    font-family: Inter;
    font-weight: 700px;
    font-size: 35px;
    line-height: 55px;
    letter-spacing: 0%;
    text-align: center;
    
`

export default function Clients(){
    return(
        <Body>
            <Divider/>
            <Titulo>
                <h2>Por que os clientes adoram <Span>trabalhar conosco</Span></h2>
            </Titulo>
            <CarouselClients/>
        </Body>
    );
}