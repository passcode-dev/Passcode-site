import * as React from 'react'
import styled from 'styled-components'
import Tropy from '../../images/tropy.png'
import { StaticImage } from 'gatsby-plugin-image'


const Page = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-bottom: 300px;

    hr{
        border: 1px solid red;
        width: 80%;
    }
`
const Title=styled.div`
    display: flex;
    flex-direction: column;
    font-size: 35px;
    align-items: center;
    font-family: 'Inter';
    margin-top: 100px;
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
    display: flex;
    margin-right: 150px;
    flex-direction: row;
    justify-content: space-around;
`

const DivCards2 = styled.div`
    display: flex;
    margin-left: 150px;
    flex-direction: row;
    justify-content: space-around;
`

const TimelineContainer = styled.div`
  width: 75%;
  height: 2px;
  background: red;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 20px;
`;

const MarkerTop = styled.div`
    width: 2px;
    height: 15px;
    background: #f76680;
    margin-bottom: 15px;
    margin-left: 200px;
`;

const MarkerBottom = styled.div`
    width: 2px;
    height: 15px;
    background: #f76680;
    margin-top: 15px;
    margin-right: 100px;
`;


const Cards = styled.div`
    display: flex;
    padding: 20px;
    margin: 20px;
    border: 1px solid #E7DAED;
    font-family: 'Inter';
    border-radius: 8px;
    flex-direction: column;
    max-width: 300px;
    margin: 30px;
    
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
        color:#718096 ;
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

                <Cards>
                    <h2><span>#1 </span> Assemble the rigth team</h2>
                    <p>We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do.</p>
                </Cards>

                <Cards>
                    <h2><span>#3 </span>Tech architecture</h2>
                    <p>We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently</p>

                </Cards>

                <Cards>
                    <h2><span>#5 </span>Code reviews</h2>
                    <p>Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells</p>
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
            <StaticImage src="../../images/tropy.png" alt="Imagem de troféu" />

            </Div>
            
            <DivCards2>
                <Cards>
                    <h2><span>#1 </span> Assemble the rigth team</h2>
                    <p>We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do.</p>
                </Cards>

                <Cards>
                    <h2><span>#3 </span>Tech architecture</h2>
                    <p>We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently</p>

                </Cards>

                <Cards>
                    <h2><span>#5 </span>Code reviews</h2>
                    <p>Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells</p>
                </Cards>
            </DivCards2>

        </Page>
    )
}