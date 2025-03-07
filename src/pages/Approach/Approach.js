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

    @media (max-width: 800px) {
        grid-template-columns: 1fr;
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
    }
`

const RocketImg = styled.img`

    width: 40px;
    height: 40px;
    background: linear-gradient(to bottom left,  #29272E , #27272E) ;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 40px;
`
const CodeImg = styled.img`

    width: 40px;
    height: 40px;
    background: linear-gradient(to bottom left,  #68DBF2 , #509CF5) ;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 40px;

`
const HeartImg = styled.img`

    width: 40px;
    height: 40px;
    background: linear-gradient(to bottom left,  #FF92AE , #FF3D9A) ;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 40px;

`
const ShieldImg = styled.img`

    width: 40px;
    height: 40px;
    background: linear-gradient(to bottom left,  #67E9F1 , #24E795) ;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 40px;

`
const SuccessImg = styled.img`

    width: 40px;
    height: 40px;
    background: linear-gradient(to bottom left,  #FFEF5E , #F7936F) ;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 40px;

`
const PadlockinImg = styled.img`

    width: 40px;
    height: 40px;
    background: linear-gradient(to bottom left,  #F76680 , #57007B) ;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 40px;

`

export default function Approach() {
    return (
        <Page>
            <Title><Border></Border><span>Nossa abordagem de design e desenvolvimento</span></Title>

            <DivCards>
                <Cards>
                    <RocketImg src={rocket} alt="Imagem de foguete"></RocketImg>
                    <span><h2>UX Driven Engineering</h2>Unlike other companies, we are a <span class="text-blue-500">UX first</span> development company. Projects are driven by designers and they make sure design and experiences translate to code.</span>
                </Cards>
                <Cards>
                    <CodeImg src={code} alt="Imagem de código"></CodeImg>
                    <span><h2>Developing Shared Understanding</h2>Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.</span>
                </Cards>
                <Cards>
                    <HeartImg src={heart} alt="Imagem de coração"></HeartImg>
                    <span><h2>Proven Experience and Expertise</h2>Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.</span>
                </Cards>
                <Cards>
                    <ShieldImg src={shield} alt="Imagem de escudo"></ShieldImg>
                    <span><h2>Security & Intellectual Property (IP)</h2>Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.</span>
                </Cards>
                <Cards>
                    <SuccessImg src={success} alt="Imagem de sucesso"></SuccessImg>
                    <span><h2>Code Reviews</h2>Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.</span>
                </Cards>
                <Cards>
                    <PadlockinImg src={padlock} alt="Imagem de cadeado"></PadlockinImg>
                    <span><h2>Quality Assurance & Testing</h2>Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.</span>
                </Cards>

            </DivCards>


        </Page>
    )
}