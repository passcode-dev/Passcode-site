import * as React from "react";
import styled from "styled-components";
import PassCode from "../../images/Logo.webp";
import { Button } from "../../Components/Buton"
import { Link } from 'gatsby'
import menu from '../../images/hamburguer.png'

const Cabecalho = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:10px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    background-color: #FFFFFF;
    
    font-family: 'inter';

    @media (max-width:800px){
        flex-direction:column ;
        height: 100px;
    }
`

const ButtonPrinc = styled(Button)`
    @media (max-width:800px) {
        display: flex;
        justify-content: center;
        width: 100%;
    }
 `



const StyledLink = styled(Link)`
    color: #4A5568;
    text-decoration: none;
    font-size: 18px;
`

const Logo = styled.img`
    width: 105px;
    height: 24px;
    gap: 8px;
    margin-left: 70px;

    @media (max-width: 800px){
        margin-left: 0px;
    }
 `



const Menu = styled.img`
    display: none;

    @media (max-width: 800px) {
        display: flex;
        width: 24px;
    }
 `

const DivLinks = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-around;

      @media (max-width: 800px) {
        display: none;
    }
 `

const DivMob=styled.div`
    @media (max-width:800px) {
        display: flex;
        width: 100%;
        justify-content: space-between;
    }
`


export default function Header() {
    return (
        <>
            <Cabecalho>
                <DivMob>
                    <Logo src={PassCode} alt="Logo" />
                    <Menu src={menu} />

                </DivMob>
                

                <DivLinks>
                    <StyledLink to="/">Inicio</StyledLink>
                    <StyledLink to="/">Quem somos</StyledLink>
                    <StyledLink to="/WorkWithUs/WorkWithUs">Trabalhe Conosco</StyledLink>
                </DivLinks>

                <ButtonPrinc>Fale Conosco</ButtonPrinc>
            </Cabecalho>



        </>
    );
}


