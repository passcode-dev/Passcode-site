import * as React from "react";
import styled, { keyframes } from "styled-components";
import PassCode from "../../images/Logo.webp";
import PassCodeWhite from "../../images/logo_white.webp";

import { Button } from "../../Components/Buton"
import { Link } from 'gatsby'
import menu from '../../images/hamburguer.png'
import { X, Upload } from 'lucide-react'



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

const Logo2 = styled.img`
    width: auto;
    gap: 8px;
    margin-left: 70px;
    margin-bottom: 30px;

    @media (max-width: 800px){
        margin-left: 0px;
    }
 `



const Menu = styled.img`
    display: none;
    cursor: pointer;


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

const DivMob = styled.div`
    @media (max-width:800px) {
        display: flex;
        width: 100%;
        justify-content: space-between;
    }
`






const slideIn = keyframes`
    from {
        transform: translateX(100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
`;

const Overlay = styled.div`
    z-index: 9999;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(8px);
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const Modal = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
    width: 80%;
    height: 100%;
    background-color: #0f1729;
    text-align: center;
    line-height: 20px;
    padding: 20px 20px 60px 30px;
    color: white;
    opacity: 0;
    animation: ${slideIn} 0.4s ease-out forwards; 

`;

const JoinUs = styled.div`
    display: flex;
    padding: 15px 10px 0 0;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
        font-family: Inter;
        font-weight: 700;
        font-size: 40px;
        line-height: 20px;
    }
`;


const Conteinerinput = styled.div`
    display: flex;
    padding: 0;
    width: 100%;
    gap: 30px;
    align-items: flex-start;
    flex-direction: column;
    p {
        padding-top: 10px;
        text-align: start;
        font-family: Inter;
        font-weight: 200;
        font-size: 15px;
        color: lightgray;
        margin: 0;
    }
`;

const PlaceText = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 5px;
    text-align: start;
`;


const Head = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
`;

const StyledLink2 = styled(Link)`
    color:rgb(255, 255, 255);
    text-decoration: none;
    font-size: 18px;
`

const Sair = styled(X)`
    color: white;
    text-align: center;
    cursor: pointer;
`;

export default function Header() {

    const [open, setOpen] = React.useState(false);



    return (
        <>
            <Cabecalho>
                {open === true && (
                    <Overlay onClick={() => setOpen(false)}>
                        <Modal onClick={(e) => e.stopPropagation()}>
                            <Head>
                                <Sair size={25} onClick={() => setOpen(false)} />
                            </Head>
                            <JoinUs>

                                <Conteinerinput> 
                                    <Logo2 src={PassCodeWhite} alt="Logo" />

                                    <PlaceText>
                                        <StyledLink2 href="#first-last-name">Inicio</StyledLink2>
                                    </PlaceText>

                                    <PlaceText>
                                        <StyledLink2 href="#email-address">Quem somos</StyledLink2>
                                    </PlaceText>

                                    <PlaceText>
                                        <StyledLink2 href="#email-address">Trabelhe Conosco</StyledLink2>
                                    </PlaceText>

                                    <PlaceText>
                                        <StyledLink2 href="#email-address">Fale Conosco</StyledLink2>
                                    </PlaceText>
                                    
                                    <PlaceText>
                                        <StyledLink2 href="#email-address">Suporte</StyledLink2>
                                    </PlaceText>

                                </Conteinerinput>
                            </JoinUs>
                        </Modal>
                    </Overlay>
                )
                }

                <DivMob>
                    <Logo src={PassCode} alt="Logo" />
                    <Menu onClick={() => setOpen(true)} src={menu} />
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


