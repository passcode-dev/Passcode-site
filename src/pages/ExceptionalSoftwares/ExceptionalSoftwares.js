import * as React from "react"
import styled from "styled-components"
import { Divider,Dividervertical } from "../../Components/Divider"
import timeBoard from "../../images/timeBoard.webp"
import ceo1 from "../../images/ceo1.webp"
import ceo2 from "../../images/ceo2.webp"
import equipepc from "../../images/equipepc.webp"
import DemiMoore from "../../images/DemiMoore.webp"
import reuniao from "../../images/reuniao.webp"
import { BolaRosaEmbaixo,BolaAmarelaDiagSup,BolaRosaDiagSup,BolaAmarelaEmbaixo,BolaRosaEmcima,BolaAmarelaDiagInf } from "../../Components/Balls"

export const Title = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-bottom: 30px;
    margin-top: 50px;
`
export const TitleBox = styled.div`
    max-width:475px;
    h2{
        font-family: "Inter";
        font-weight: 400;
        font-size: 35px;
        line-height: 55px;
        letter-spacing: 0%;
        text-align: center;
        color: #1A202C;
    }
`
export const Conteiner = styled.div`
    display:flex;
    gap: 95px;
    align-content: center;
    flex-direction: column;

    @media (max-width:1200px) {
        justify-content: center;
        align-items: center;
    }
`
export const Conteiner1 = styled.div`
    display:flex;
    align-items: stretch;
    justify-content:space-evenly;
    padding-left: 40px;
    padding-right: 40px;

    @media (max-width:1200px) {
        flex-direction: column;
    }
`
export const ConteinerText = styled.div`
    max-width: 524px;
    
    @media (max-width:1200px) {
        order: 2;
    }
    h3{
        font-family: "Inter";
        font-weight: 600;
        font-size: 28px;
        line-height: 38.09px;
        letter-spacing: 0%;
        text-align: left;
        margin-top: 20px;
    }

    p{
        font-family: "Inter";
        font-weight: 400;
        font-size: 18px;
        line-height: 30px;
        letter-spacing: 0%;

    }
`

export const P1 = styled.p`
    font-family: "Inter";
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    letter-spacing: 0%;
`
export const Span = styled.span`
    font-family: "Inter";
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    letter-spacing: 0%;
    background: linear-gradient(225deg, #F76680 0%, #57007B 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`
export const Citation = styled.div`
    max-width: 453px;
    gap: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    p{
        font-family: "Inter";
        font-weight: 300;
        font-style: italic;
        font-size: 16px;
        margin:0;
        line-height: 30px;
        letter-spacing: 0%;
        background: linear-gradient(225deg, #F76680 0%, #57007B 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`

export const CEO = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 200px;
    gap: 10px;
    margin-top: 20px;
`

export const CeoTxt = styled.div`
    width: 200px;
    display: flex;
    flex-direction: column;
`

export const P2 = styled.p`
    font-family: "Inter";
    font-weight: 400;
    font-size: 16px;
    margin:0;
    letter-spacing: 0%;
`
export const P3 = styled.p`
    font-family: "Inter";
    font-weight: 400;
    font-size: 13px;
    letter-spacing: 0%;
    margin:0;
    color: #718096;
`
export const ImgCeo = styled.img`
    width: 41px;
    height: 41px;
    border-radius: 50px;
`
export const ConteinerImg=styled.div`
    position:relative;
    display: flex;
    max-width: 575px;
    max-height: 473px;

    @media (max-width:1200px) {
        order: 1;
    }
    
`
export const IMG = styled.img`
    border-radius: 10px;
    z-index: 0;
    width: 100%; /* Faz a imagem ocupar toda a largura do contêiner */
    height: auto; /* Mantém a proporção da imagem */
    max-width: 100%; /* Garante que a imagem não ultrapasse o contêiner */
`


export default function ExceptionalSoftwares  () {
    return (
        <>

            <Title>
                <Divider />
                <TitleBox>
                    <h2>Como desenvolvemos softwares excepcionais</h2>
                </TitleBox>
            </Title>

            <Conteiner>
                <Conteiner1>
                    <ConteinerText>
                        <h3>Montando a Equipe Ideal para o Crescimento</h3>
                        <p>
                            Encontrar os profissionais certos para o seu projeto é essencial. Ajudamos você a selecionar talentos que não só atendem às suas necessidades, mas também se adaptam aos seus processos e permanecem com você ao longo de todo o ciclo de vida do projeto — diferentemente de freelancers temporários.
                            <br/>
                            Nosso modelo de entrega é pensado para otimizar custos e garantir que o projeto seja entregue dentro do orçamento, sem comprometer a qualidade.
                        </p>
                        <Citation>
                            <Dividervertical />
                            <p>"A Passcode identificou rapidamente problemas maiores no software, o que nos levou a expandir o escopo do projeto para desenvolver novos módulos."</p>
                        </Citation>
                    </ConteinerText>

                    <ConteinerImg>
                        <IMG src={timeBoard} alt="Imagem exemplo reunião"></IMG>
                        <BolaAmarelaDiagSup/>
                        <BolaRosaEmbaixo/>
                    </ConteinerImg>
                </Conteiner1>

                <Conteiner1> 
                    <ConteinerImg>
                        <IMG src={equipepc} alt="Imagem exemplo trabalho"></IMG>
                        <BolaAmarelaEmbaixo/>
                        <BolaRosaDiagSup/>
                    </ConteinerImg>

                    <ConteinerText>
                        <h3>A Equipe Certa para Impulsionar Seu Projeto</h3>
                        <p>
                            Reunir uma equipe talentosa e alinhada com as suas necessidades é fundamental para o sucesso do projeto. Nós auxiliamos você na seleção dos profissionais que entendem seus processos e estão prontos para contribuir a longo prazo, sem as incertezas associadas aos freelancers.
                            <br/>
                            Nossa metodologia de entrega permite que você corte custos enquanto garante a entrega dentro do prazo e orçamento.
                        </p>
                        <Citation>
                            <Dividervertical />
                            <p>"A Passcode foi eficaz em identificar questões cruciais no nosso software, o que nos levou a revisar o escopo e criar novos módulos."</p>
                        </Citation>
                    </ConteinerText>
                </Conteiner1>

                <Conteiner1>

                    <ConteinerText>
                        <h3>Estruturando a Equipe para Escalar com Sucesso</h3>
                        <p>
                            Encontrar e manter os talentos certos para o seu projeto pode ser desafiador. Trabalhamos com você para recrutar profissionais que se ajustam perfeitamente às suas necessidades, compreendem seus processos e têm compromisso com o sucesso do projeto a longo prazo — o que não acontece com freelancers.
                            <br/>
                            Nosso modelo de entrega focado em resultados ajuda a reduzir custos e garantir que seu projeto seja entregue de forma eficiente, dentro do orçamento planejado.
                        </p>

                        <Citation>
                            <Dividervertical />
                            <p>"A Passcode rapidamente identificou problemas maiores em nosso software, o que nos levou a ampliar a visão do projeto e incluir novos módulos."</p>
                        </Citation>
                    </ConteinerText>

                    <ConteinerImg>
                        <IMG src={reuniao} alt="Imagem exemplo palestra"></IMG>
                        <BolaAmarelaDiagInf/>
                        <BolaRosaEmcima/>
                    </ConteinerImg>
                </Conteiner1>

            </Conteiner>

        </>
    );
}
