import * as React from "react";
import styled from 'styled-components';
import { Header } from "./Header/Header";
import DevelopmentProcess from "../pages/DevelopmentProcess/DevelopmentProcess";
import { Service } from "./Services/Services";
import { Products } from "./Products/Products";
import {Clients} from "./Clients/Clients"
import Footer from './footer/footer';
import Approach from "./Approach/Approach";

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
        <Clients/>
        <Approach/>
        <DevelopmentProcess />
        <Footer />
      </Body>
    </>

  )
}
