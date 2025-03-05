import * as React from "react";
import styled from 'styled-components';
import { Header } from "./Header/Header";
import DevelopmentProcess from "../pages/DevelopmentProcess/DevelopmentProcess";
import { Service } from "./Services/Services";
import { Produtos } from "./Body/Body";
import {Clients} from "./Clients/Clients"
import Footer from './footer/footer';

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
        <Produtos />
        <Service />
        <Clients/>
        <DevelopmentProcess />
        <Footer />
      </Body>
    </>

  )
}
