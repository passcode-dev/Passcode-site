import * as React from "react";
import styled from "styled-components";
import PassCode from "../../images/Logo.png";
import {Button} from "../../Components/Buton"
import {Link} from 'gatsby'

const Cabecalho = styled.nav `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:10px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    background-color: #FFFFFF;
    height: 50px;
    gap: 10px;
    font-family: 'inter';
`

const StyledLink=styled(Link)`
    color: #4A5568;
    text-decoration: none;
    font-size: 18px;
`

 const Logo = styled.img `
    width: 105px;
    height: 24px;
    gap: 8px;
    margin-left: 70px;
 `

   
export const Header = () => {
    return (
        <>
        <Cabecalho>
            <Logo src={PassCode} alt="Logo" />
      
                <StyledLink to="/">Inicio</StyledLink>
                <StyledLink to="/">Lorem</StyledLink>
                <StyledLink to="/">Trabalhe Conosco</StyledLink>
    
            <Button>Fale Conosco</Button>
        </Cabecalho>
        
        </>
    );
}


