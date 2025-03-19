import * as React from "react";
import styled from 'styled-components';
import  Header  from "./Header/Header";
import  Products  from "./Products/Products";
import  Service  from "./Services/Services";
import Clients from "./Clients/Clients";
import  ExceptionalSoftwares  from "./ExceptionalSoftwares/ExceptionalSoftwares";
import Approach from "./Approach/Approach";
import DevelopmentProcess from "../pages/DevelopmentProcess/DevelopmentProcess";
import Footer from './footer/footer';
import global from '../Css/global.css';
export { Head } from '../Head';

const Body = styled.div`
    padding: 0px;
    margin: 0px;
`

export default function Home() {

  return (

    <>

      <Body>
        <Header />
        <Products />
        <Service />
        {/* <Clients/> */}
        <ExceptionalSoftwares/>
        <Approach/>
        <DevelopmentProcess />
        <Footer />
      </Body>
    </>

  )
}
