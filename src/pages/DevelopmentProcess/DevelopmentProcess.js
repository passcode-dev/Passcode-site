import * as React from 'react'
import styled from 'styled-components'
import Tropy from "../../images/tropy.webp"


const Page = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 100px;

    hr{
        border: 1px solid red;
        width: 80%;
    }

    @media (max-width:1200px) {
        margin-bottom: 100px;
    }
`
const Title=styled.div`
    display: flex;
    flex-direction: column;
    font-size: 35px;
    align-items: center;
    font-family: 'Inter';
    margin-top: 50px;
    margin-bottom: 50px;

    p, span {
        line-height: 1;
    }

    span{
        font-weight: bold;
    }
`

const Border = styled.div`
  width: 69px;
  height: 5px;
  background: linear-gradient(to right,  #57007B , #F76680);
  margin: 20px auto;
`;

const DivCards = styled.div`
    display: grid;
    margin-right: 150px;
    grid-template-columns: repeat(3, 1fr);
    flex-direction: row;
    justify-content: space-around;

    @media (max-width: 1200px) {
        grid-template-columns: 1fr;
        margin-right: 0px;
        justify-content: center;
        align-items: center;
    }
`

const DivCards2 = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-left: 150px;
    flex-direction: row;
    justify-content: space-around;

    @media (max-width: 1200px) {
        align-items: center;
        justify-content: center;
        grid-template-columns: 1fr;
        margin-left: 0px;
    }
`

const TimelineContainer = styled.div`
  width: 55%;
  height: 2px;
  background: red;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 20px;

  @media (max-width:2000px) {
    width: 75%;
  }

  @media (max-width:1200px) {
    display: none;
  }
`;

const MarkerTop = styled.div`
    width: 2px;
    height: 15px;
    background: #f76680;
    margin-bottom: 15px;
    margin-left: 200px;

    @media (max-width:1200px) {
        margin-bottom: 0px;
        margin-left: 0px;
    }
`;

const Marker = styled.div`
    display: none;
    @media (max-width:1200px) {
        display: flex;
        width: 2px;
        height: 15px;
        background: #f76680;
        margin-left: 50%;
    }
`;

const MarkerBottom = styled.div`
    width: 2px;
    height: 15px;
    background: #f76680;
    margin-top: 15px;
    margin-right: 100px;
`;

const StyleImg=styled.img`
    @media (max-width:1200px) {
        display: none;
  }
`

const StyleImg2=styled.img`
    display: none;
    @media (max-width:1200px) {
        display: flex;
        margin-left: 45%;
  }`


const Cards = styled.div`
    display: flex;
    padding: 20px;
    border: 1px solid #E7DAED;
    font-family: 'Inter';
    border-radius: 8px;
    flex-direction: column;
    max-width: 300px;
    margin: 30px;

    // MOBILE 
    @media (max-width:1200px) {
        margin: 10px;
    }
    
    h2{
        font-size: 18px;
        color: #1A202C;
    }
    span {
        background: linear-gradient(to right, #F76680, #57007B);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: bold;
    }
    p{
        color:#454545 ;
    }
`

const Div=styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`



export default function DevelopmentProcess() {
    return (
        <Page>
            <Title><Border></Border><p>Nosso processo de</p><span>desenvolvimento</span></Title>

            <DivCards>

                <Cards >
                    <h2><span>#1 </span>Montar a Equipe Certa</h2>
                    <p>Cuidamos de toda a seleção e contratação da equipe ideal, sem que você precise se preocupar com isso.</p>
                </Cards>
                <Marker />
                <Cards >
                    <h2><span>#2 </span>Arquitetura Tecnológica</h2>
                    <p>Transformamos apps monolíticos em microserviços, permitindo mais agilidade e escalabilidade.</p>

                </Cards>
                <Marker />
                <Cards >
                    <h2><span>#3 </span>Revisões de Código</h2>
                    <p>Realizamos revisões de código para identificar e corrigir falhas, garantindo qualidade e desempenho.</p>
                </Cards>

            </DivCards>
            <Div>
            <TimelineContainer>

                <MarkerTop />
                <MarkerBottom />

                <MarkerTop />
                <MarkerBottom />

                <MarkerTop />
                <MarkerBottom />

            </TimelineContainer>
            <StyleImg src={Tropy} alt="Imagem de troféu" />

            </Div>
            
            <DivCards2>
                <Marker />
                <Cards >
                    <h2><span>#4 </span>Desenvolvimento Iterativo</h2>
                    <p>Nosso processo é baseado em iterações, permitindo ajustes contínuos e melhorias durante o desenvolvimento.</p>
                </Cards>
                <Marker />
                <Cards >
                    <h2><span>#5 </span>Testes e Validação</h2>
                    <p>Realizamos testes rigorosos durante todo o processo para garantir que o software esteja sempre pronto para ser entregue com qualidade.</p>

                </Cards>
                <Marker />
                <Cards >
                    <h2><span>#6 </span>Segurança e Performance</h2>
                    <p>Garantimos que todos os aspectos de segurança e performance sejam atendidos antes do lançamento, assegurando a confiabilidade do sistema.</p>
                </Cards>
                <Marker />
                <StyleImg2 src={Tropy} alt="Imagem de troféu" />
            </DivCards2>

        </Page>
    )
}