import React from "react";
import {Carousel} from "../../Components/Carousel";
import styled from "styled-components";

const Page=styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 600px;
    background: #F9F9FF; 
    width: 100%;
`

const Titulo=styled.div`

        font-family: "Inter";
        font-weight: bold;
        font-size: 24px;
        color: #1A202C;
        margin-top: 50px;
`
export default function Service  () {
    return(
        <Page>
            <Titulo>
                 <h1>Nossos serviços</h1>
            </Titulo>
            <Carousel/>
        </Page>
        );
}
    

