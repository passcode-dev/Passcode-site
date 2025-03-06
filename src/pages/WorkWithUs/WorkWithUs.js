import * as React from "react";
import styled from "styled-components";
import Header from "../Header/Header"
import { Button } from "../../Components/Buton";
import grupo from "../../images/grupo.png"
import { useState } from "react";
import {StethoscopeIcon, X} from 'lucide-react'

const Body = styled.div`
    padding: 0px;
    margin: 0px;
`
const Button2 = styled.button`
    width: 60px;
    height: 60px;
    border-radius: 50px;
    background-color:white;
    &:hover{
        background-color: red;
    }
`
const Conteiner = styled.div`
    margin-top: 150px;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 546px;
    h1{
        font-family: Inter;
        font-weight: 300;
        font-size: 45px;
        line-height: 71px;
        letter-spacing: 0%;
    }
    p{
        font-family: Inter;
        font-weight: 400;
        font-size: 18px;
        line-height: 36px;
        letter-spacing: 0%;
    }
`
const IMG = styled.img`
`
const JoinUs = styled.div`
    background-color: red;
    width: 1000px;
    height: 546px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    input{

    }
`
const Modal = styled.div`
    position:absolute;
    background-color: black;
    display: flex;
    width: 500px;
    left: 50%;
    right: 50%;
    height: 100%;
`
const Head=styled.div`
display: flex;
justify-content:flex-end;
width: 100%;
height: 50px;
`

export default function WorkWithUs() {
    const [open, setOpen] = useState(false)
    console.log(open)

    return (
        <>
            {open == true &&
                <Modal>
                    <Head>
                    <Button2 onClick={()=>setOpen(false)}><X size={20} color= "Black" /></Button2>
                    </Head>
                </Modal>
            }

            <Body>
                <Header />
                <Conteiner>
                    <h1>Junte-se ao nosso Grupo</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <Button onClick={() => setOpen(true)}>See Current Openings</Button>

                    <IMG src={grupo}></IMG>
                </Conteiner>
            </Body>


        </>

    );
}