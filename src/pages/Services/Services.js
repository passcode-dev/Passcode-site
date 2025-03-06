import React from "react";
import {Carousel} from "../../Components/Carousel";
import styled from "styled-components";

const Page=styled.div`
    display:flex;
    align-items: center;
    flex-direction: column;
    height: 600px;
    background: #F9F9FF;

    
`
const Titulo=styled.div`

        font-family: "Inter";
        font-weight: bold;
        font-size: 24px;
        color: #1A202C;
        margin-top: 50px;
`
export const Service = () => {
    return(
        <Page>
            <Titulo>
                 <h1>Nossos serviços</h1>
            </Titulo>
            <Carousel/>
        </Page>
        );
}
    

