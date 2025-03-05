import * as React from "react"
import styled from "styled-components"
import { CarouselClients } from "../../Components/CarouselClients"
import { Divider } from "../../Components/Divider"

const Body=styled.div`
    display: flex;
    height: 346px;
    top: 1425px;
    left: 80px;
    align-items: center;
    flex-direction: column;
`
const Titulo=styled.div`
    width: 474px;
    height: 133px;
    gap: 20px;

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

export const Clients=()=>{
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