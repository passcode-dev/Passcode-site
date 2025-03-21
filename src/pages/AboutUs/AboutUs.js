import * as React from "react";
import styled from "styled-components";
import Header from "../Header/Header";
import Footer from "../footer/footer";
import Aboutus from "../../images/Aboutus.webp"
import pauta from "../../images/pauta.webp"

const Body = styled.div`
    margin: 0;
    padding: 0;
`
const Conteiner = styled.div`

    max-width: 100%;
    max-height: 100%;
    margin-top: 50px;
    margin-bottom: 50px;
    @media (min-width: 1200px){
        h1{
            background: black;
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        p{
            &:first-child{
                display: none;
            }
        }
    }
`

const ConteinerImg = styled.div`
    position:relative;
    display: flex;
    max-width: 575px;
    max-height: 473px;

    @media (max-width:1200px) {
        order: 1;
        margin-bottom: 50px;
    }
`

export const IMG = styled.img`
    border-radius: 10px;
    z-index: 0;
    width: 100%; /* Faz a imagem ocupar toda a largura do contêiner */
    height: auto; /* Mantém a proporção da imagem */
    max-width: 100%; /* Garante que a imagem não ultrapasse o contêiner */
`

const ContainerTitle = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 100px;

    h1{
        font-family: "Inter";
        font-weight: 600;
        font-size: 40px;
        line-height: 38.09px;
        letter-spacing: 0%;
        text-align: left;   
    }


    @media (max-width:1200px) {
        margin-bottom: 30px;

        h1{
            background: linear-gradient(180deg, #de4396 10%, #a83284 50%, #de4396 90%);
             background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            filter: brightness(1.2);
            text-align: center;
            
        }
    }
    
`
const Conteiner1 = styled.div`
    display:flex;
    align-items: stretch;
    justify-content:space-evenly;
    padding: 20px 40px 20px 40px;
    margin-bottom: 50px;
    @media (max-width:1200px) {
        flex-direction: column;
        align-items: center;
    }
`
const ConteinerText = styled.div`
    max-width: 550px;
    @media (max-width:1200px) {
        padding-top: 15px;
        h3{
            padding-bottom:10px;
            text-align: center !important;
        }
        order: 2;
    }
    h3{
        font-family: "Inter";
        font-weight: 600;
        font-size: 28px;
        line-height: 38.09px;
        letter-spacing: 0;
        text-align: left;
    }

    p{
        font-family: "Inter";
        font-weight: 400;
        font-size: 15px;
        line-height: 30px;
        letter-spacing: 0%;
        text-align: left;
    }
`;


const SpanP = styled.span`
  font-family: "Inter";
  font-weight: bold;
  font-size: 40px;
  line-height: 71px;
  background: linear-gradient(180deg, #de4396 10%, #a83284 50%, #de4396 90%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: brightness(1.2);
`;


export default function AboutUs() {
    return (
        <Body>
            <Header />
            <Conteiner>

                <ContainerTitle>
                    <h1>O que é a <SpanP>Passcode</SpanP> ?</h1>
                </ContainerTitle>

                <Conteiner1>
                    <ConteinerText>
                        <h3>Nosso Principal Objetivo</h3>
                        <p>A Passcode é uma empresa especializada no desenvolvimento de soluções digitais inovadoras para o mercado atual. Desde sua fundação, nossa missão tem sido fornecer tecnologias avançadas que ajudam empresas de diferentes setores a superar desafios complexos de forma eficiente e segura. Com um foco claro em inovação, procuramos não apenas entender as necessidades de nossos clientes, mas também antecipar as mudanças do mercado e proporcionar soluções que atendam às demandas de um mundo digital em constante evolução. Estamos comprometidos com a excelência em cada etapa do desenvolvimento, garantindo produtos de alta qualidade que ajudam as empresas a alcançar novos patamares de sucesso.</p>
                    </ConteinerText>
                    <ConteinerImg>
                        <IMG src={Aboutus}></IMG>
                    </ConteinerImg>
                </Conteiner1>

                <Conteiner1>
                    <ConteinerImg>
                        <IMG src={pauta}></IMG>
                    </ConteinerImg>
                    <ConteinerText>
                        <h3>Nossa Visão e Valores</h3>
                        <p>Ao longo dos anos, a Passcode se consolidou como uma referência em desenvolvimento de software. Nossa visão é ser reconhecida como uma empresa líder em soluções digitais, focada em melhorar a eficiência, segurança e escalabilidade das operações de nossos clientes. Acreditamos que a verdadeira inovação só é alcançada quando existe uma profunda colaboração entre nossa equipe e nossos parceiros. Nossos valores estão enraizados no compromisso com a transparência, ética e qualidade, trabalhando sempre para entregar resultados que superem as expectativas e gerem impactos positivos no mercado. Em tudo o que fazemos, buscamos sempre a excelência e a evolução constante, com uma forte ênfase em criar soluções que sejam sustentáveis e adaptáveis ao futuro.</p>
                    </ConteinerText>
                </Conteiner1>
            </Conteiner>
            <Footer />
        </Body>
    );
}