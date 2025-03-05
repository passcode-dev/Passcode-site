import * as React from "react";
import styled from "styled-components";
import PassCode from "../images/Logo.png";
import {Button} from "../Components/Buton"
const Cabecalho = styled.nav `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:10px 25px 10px 25px;
    background-color: #FFFFFF;
    height: 72px;
    gap: 10px;
`

 const Logo = styled.img `
    width: 105px;
    height: 24px;
    gap: 8px;
 `

   
export const Header = () => {
    return (
        <>
        <Cabecalho>
            <Logo src={PassCode} alt="Logo" />
      
                <h3>Inicio</h3>
                <h3>Lorem</h3>
                <h3>Trabalhe Conosco</h3>
    
            <Button>Fale Conosco</Button>
        </Cabecalho>
        
        </>
    );
}


