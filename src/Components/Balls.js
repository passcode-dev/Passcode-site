import styled from "styled-components";

const BolaAmarela=styled.div`
    position:absolute;
    width: 64.48px;
    height: 64.48px;
    border-radius: 50%;
    background: linear-gradient(225deg, #FFEF5E 0%, #F7936F 100%);
    -webkit-text-fill-color: transparent;
    overflow: hidden;
    z-index: -1;

    @media (max-width:1200px) {
        display:none ;
     }
`

const BolaRosa=styled.div`
    position:absolute;
    width: 28.81px;
    height: 28.81px;
    border-radius: 50%;
    background: linear-gradient(225deg, #F76680 0%, #57007B 100%);
    -webkit-text-fill-color: transparent;
    z-index: -1;
    overflow: hidden;

    @media (max-width:1200px) {
        display:none ;
     }
`;

export const BolaRosaEmbaixo=styled(BolaRosa)`
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);

    @media (max-width:1200px) {
        display:none ;
     }
`;

export const BolaAmarelaDiagSup=styled(BolaAmarela)` //Bola Amarela Diagonal Superior esquerda
     top: -20px;
     left: -20px;

     @media (max-width:1200px) {
        display:none ;
     }
`;

export const BolaRosaDiagSup=styled(BolaRosa)` ////Bola Rosa Diagonal Superior Direita
     top: -10px;
     right: -10px;

     @media (max-width:1200px) {
        display:none ;
     }
`

export const BolaAmarelaEmbaixo=styled(BolaAmarela)` //Bola Amarela embaixo 
    bottom: -30px;
    left: 32%;
    transform: translateX(-50%);

    @media (max-width:1200px) {
        display:none ;
     }
`

export const BolaRosaEmcima=styled(BolaRosa)`
    top: -10px;
    right: 35%;
    transform: translateX(-50%);

    @media (max-width:1200px) {
        display:none ;
     }
`

export const BolaAmarelaDiagInf=styled(BolaAmarela)` //Bola Amarela Diagonal inferior Esquerda 
    bottom: -20px;
    left: -20px;

    @media (max-width:1200px) {
        display:none ;
     }
`
