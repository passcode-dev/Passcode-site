import * as React from "react"
import styled from 'styled-components';
import Footer from './footer/footer';
import DevelopmentProcess from "../pages/DevelopmentProcess/DevelopmentProcess";

export {Head} from '../Head'

const Body = styled.div`
    padding: 0px;
    margin: 0px;
`

export default function Home() {

  return (

    <>
      
      <Body>
        <DevelopmentProcess/>
        <Footer />
      </Body>
    </>

  )
}
