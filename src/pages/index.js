import * as React from "react"
import {Header} from "../Header/Header"
import {Body} from "../Body/Body"
import {Service} from "../Services/Services"
import "../Css/global.css"

const IndexPage = () => {
  return (
    <>
     <Header />
    <Body/>
    <Service/>
    </>
  )
}

export default IndexPage

export const Head = () => <title>PASSCODE</title>
