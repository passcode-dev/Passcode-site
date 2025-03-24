import * as React from 'react';
import styled from 'styled-components'
import rocket from '../../images/rocket.webp'
import code from '../../images/code.webp'
import heart from '../../images/heart.webp'
import shield from '../../images/shield.webp'
import success from '../../images/success.webp'
import padlock from '../../images/padlock.png'





const Page = styled.div`
    font-family: 'inter';
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F7F7FA;
`

const Title = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 35px;
    align-items: center;
    text-align: center;
    font-family: 'Inter';
    margin-top: 50px;
    margin-bottom: 100px;
    max-width: 500px;
    
    p {
        line-height: 1;
        margin: 2px, 0;
    }

    @media (max-width: 800px) {
        align-items: center;
    }
`;

const Border = styled.div`
  width: 69px;
  height: 5px;
  background: linear-gradient(to right,  #57007B , #F76680);
  margin: 20px auto;
`;

const DivCards = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px; 
    margin-bottom: 100px;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
        margin-bottom: 50px;
    }
`;


const Cards = styled.div`
    display: flex;
    border: 1px solid #E7DAED;
    background: #FAFAFA;
    padding: 25px;
    gap: 25px;
    justify-content: center;
    align-items: center;
    max-width:600px ;
    height: 237px;
    margin: 10px;
    font-size: 15px;
    line-height: 162%;
    color:rgb(74, 80, 94);

    h2{
        color: #1A202C;
        font-size: 22px;
        margin-bottom: 20px;
    }

    @media (max-width:500px) {
        height: auto;
        flex-direction: column;
    }
`

const RocketImg = styled.img`

    width: 40px;
    height: 40px;
    background: linear-gradient(to bottom left,  #29272E , #27272E) ;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 40px;

    @media (max-width:500px) {
        margin-bottom: 0px;
    }
`
const CodeImg = styled.img`

    width: 40px;
    height: 40px;
    background: linear-gradient(to bottom left,  #68DBF2 , #509CF5) ;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 40px;

    @media (max-width:500px) {
        margin-bottom: 0px;
    }

`
const HeartImg = styled.img`

    width: 40px;
    height: 40px;
    background: linear-gradient(to bottom left,  #FF92AE , #FF3D9A) ;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 40px;

    @media (max-width:500px) {
        margin-bottom: 0px;
    }

`
const ShieldImg = styled.img`

    width: 40px;
    height: 40px;
    background: linear-gradient(to bottom left,  #67E9F1 , #24E795) ;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 40px;

    @media (max-width:500px) {
        margin-bottom: 0px;
    }

`
const SuccessImg = styled.img`

    width: 40px;
    height: 40px;
    background: linear-gradient(to bottom left,  #FFEF5E , #F7936F) ;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 40px;

    @media (max-width:500px) {
        margin-bottom: 0px;
    }

`
const PadlockinImg = styled.img`

    width: 40px;
    height: 40px;
    background: linear-gradient(to bottom left,  #F76680 , #57007B) ;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 40px;

    @media (max-width:500px) {
        margin-bottom: 0px;
    }

`

export default function Approach() {
    return (
        <Page>
            <Title><Border></Border><span>Nossa abordagem de design e desenvolvimento</span></Title>

            <DivCards>
                <Cards>
                    <RocketImg src={rocket} alt="Imagem de foguete"></RocketImg>
                    <span><h2>Engenharia Orientada ao UX</h2>Ao contrário de outras empresas, somos uma companhia focada no design de experiência do usuário desde o início. Nossos projetos são guiados por designers especializados, garantindo que o design e a experiência se traduzam de maneira perfeita para o código.</span>
                </Cards>
                <Cards>
                    <CodeImg src={code} alt="Imagem de código"></CodeImg>
                    <span><h2>Desenvolvendo um Entendimento Compartilhado</h2>Nosso processo começa com uma colaboração intensa entre equipes de design e desenvolvimento, criando um entendimento claro e compartilhado do que precisa ser alcançado. Isso nos permite traduzir a visão do cliente de forma eficiente e eficaz.</span>
                </Cards>
                <Cards>
                    <HeartImg src={heart} alt="Imagem de coração"></HeartImg>
                    <span><h2>Experiência e Expertise Comprovadas</h2>Contamos com uma equipe experiente e qualificada para lidar com as complexidades do design e desenvolvimento, sempre mantendo o foco na experiência do usuário. Nosso compromisso é oferecer soluções que não apenas atendem, mas superam as expectativas dos nossos clientes.</span>
                </Cards>
                <Cards>
                    <ShieldImg src={shield} alt="Imagem de escudo"></ShieldImg>
                    <span><h2>Segurança e Propriedade Intelectual (IP)</h2>A proteção dos dados e da propriedade intelectual é uma prioridade para nós. Garantimos que todas as soluções sejam desenvolvidas com as melhores práticas de segurança, mantendo a integridade das informações e respeitando os direitos de propriedade intelectual dos nossos clientes.</span>
                </Cards>
                <Cards>
                    <SuccessImg src={success} alt="Imagem de sucesso"></SuccessImg>
                    <span><h2>Revisões de Código</h2>As revisões de código são uma parte fundamental do nosso processo. Elas garantem que todos os aspectos técnicos do projeto sejam cuidadosamente analisados e validados, promovendo a qualidade do produto final e a eficiência do código.</span>
                </Cards>
                <Cards>
                    <PadlockinImg src={padlock} alt="Imagem de cadeado"></PadlockinImg>
                    <span><h2>Garantia de Qualidade e Testes</h2>Acreditamos que a qualidade deve ser assegurada em cada etapa do desenvolvimento. Nosso time realiza testes rigorosos para identificar e corrigir problemas antes do lançamento, garantindo que o software entregue seja estável, seguro e funcional.</span>
                </Cards>
            </DivCards>

        </Page>
    )
}