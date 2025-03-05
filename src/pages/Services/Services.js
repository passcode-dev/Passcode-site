import React from "react";
import {Carousel} from "../../Components/Carousel";
import styled from "styled-components";

const Main=styled.div`
    display:flex;
    align-items: center;
    flex-direction: column;
    height: 602px;
    top: 823.34px;
    left: -10px;

    
`
const Titulo=styled.div`
    h1{
        font-family: Inter;
        font-weight: 700;
        font-size: 35px;
        line-height: 55px;
        letter-spacing: 0%;
    }
`
export const Service = () => {
    return(
        <Main>
            <Titulo>
                 <h1>Nossos serviços</h1>
            </Titulo>
            <Carousel/>
        </Main>
        );
}
    

