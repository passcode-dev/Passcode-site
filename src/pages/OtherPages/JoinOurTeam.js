import * as React from "react";
import styled from 'styled-components'
import back from '../../images/JoinOurTeam.png'
import {Button} from '../../Components/Buton'
import Header from '../Header/Header'
import Footer from '../footer/footer'

const Page = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${back});
    background-repeat: no-repeat;
    background-size: auto; /* Ajusta a imagem para cobrir o elemento */
    background-position: center; /* Centraliza a imagem */

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: 'inter';
    
`;

const DivCenter = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 580px;
    align-items: center;

    h1{
        margin: 50px;
        font-size: 48px;
    }

    span{
        font-size: 24px;
        text-align: center;
    }
`;

const StyledButton = styled(Button)`
    margin: 50px;
    margin-bottom: 300px;
`;



export default function JoinOurTeam() {
    return (
        <>
            <Header/>
            <Page>
                <DivCenter>
                    <h1>JOIN OUR TEAM</h1>

                    <span>We love what we do and we do it with passion.We value the experimentation of the message and smart incentives.</span>

                    <StyledButton>
                        See Current Openings
                    </StyledButton>

                </DivCenter>
            </Page>
            <Footer/>
        </>
        
    );
}
