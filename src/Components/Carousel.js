import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import webdesign from "../images/webdesign.webp"
import mobile from "../images/mobile.webp"
import dashboard from "../images/DashBoard.webp"



const Card = styled(SwiperSlide)`
  display:flex!important;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 50px;

  border-radius: 10px;
  justify-content: center;
  align-items:center;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.01);
  }
`;

const SwiperStyled = styled(Swiper)`
  max-width: 70%;

  @media (max-width:900px) {
    max-width: 100%;
  }
`;

const CardInfo = styled.div`
  display:flex!important;
  background: #fff;
  padding: 20px;
  flex-direction:column;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  justify-content: center;
  align-items:center;
  width: 333px;
  height: 287px;

  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.01);
  }

  font-family:'inter';

  p {
    font-size: 14px; 
    color: #666;
    line-height:20px;
    
  }
    
  h2 {
    font-size: 20px; 
    font-weight: 600px;
    color: #333;
  }
`;



const CardImgTitle = styled.div` 

  width: 271px;
  height: 98px;
`
const Bola = styled.div`
  width: 58px;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background: linear-gradient(white, white) padding-box, linear-gradient(90deg, #F76680, #57007B) border-box;
  border: 1px solid transparent;
`;

const IMG = styled.img`
  width: 34px;
  height: 34px;
  top: 12px;
  left: 12px;

`
const Span = styled.span`
    font-family: "Inter";
    font-weight: bold;
    font-size: 20px; 
    line-height: 27.3px;
    letter-spacing: 0%;
    background: linear-gradient(225deg, #F76680 0%, #57007B 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`



export const Carousel = () => {

  return (
    <SwiperStyled
      spaceBetween={50}
      slidesPerView={3}
      loop={true}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      breakpoints={{
        1330: { slidesPerView: 3 }, // Para telas maiores (desktop)
        900: { slidesPerView: 2 },  // Para tablets
        300: { slidesPerView: 1 },  // Para celulares
      }}
    >


      <SwiperSlide>
        <Card>
          <CardInfo>
            <CardImgTitle>
              <Bola><IMG src={webdesign} alt="Imagem de celular"></IMG></Bola>
            </CardImgTitle>
            <h2><Span>Desenvolvimento de Aplicativos Móveis</Span></h2>
            <p>Transformamos ideias em aplicativos móveis intuitivos e funcionais, ajudando seu negócio a alcançar usuários em qualquer lugar. O aplicativo certo pode expandir seu alcance e melhorar a experiência do usuário.</p>
          </CardInfo>
        </Card>
      </SwiperSlide>

      <SwiperSlide>
        <Card>
          <CardInfo>
            <CardImgTitle>
              <Bola>
                <IMG src={webdesign} alt="Imagem de website"></IMG>
              </Bola>

            </CardImgTitle>
            <h2><Span>Design e Desenvolvimento de Sites</Span></h2>
            <p>Criação de sites visualmente impressionantes e funcionais. Com um design responsivo e uma navegação intuitiva, garantimos que seu site seja uma ferramenta eficaz para atrair e engajar visitantes.</p>
          </CardInfo>
        </Card>
      </SwiperSlide>

      <SwiperSlide>
        <Card>
          <CardInfo>
            <CardImgTitle>
              <Bola>
                <IMG src={webdesign} alt="Imagem de dashboard"></IMG>
              </Bola>
            </CardImgTitle>
            <h2><Span>Serviços de Testes de Software</Span></h2>
            <p>Garantimos que seu software esteja livre de erros e pronto para o mercado. Nossos testes rigorosos asseguram a qualidade do seu produto, desde a funcionalidade até a performance e a segurança.</p>
            </CardInfo>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        
      <Card>
        <CardInfo>
          <CardImgTitle>
            <Bola><IMG src={webdesign} alt="Imagem de inteligência artificial"></IMG></Bola>
          </CardImgTitle>
          <h2><Span>Inteligência Artificial (IA)</Span></h2>
          <p>Implementamos soluções de IA para otimizar processos, melhorar a tomada de decisões e criar experiências personalizadas para os usuários. De chatbots a automação, podemos transformar o seu negócio com inteligência artificial.</p>
        </CardInfo>
      </Card>
    </SwiperSlide>
    
    <SwiperSlide>
        <Card>
        <CardInfo>
          <CardImgTitle>
            <Bola><IMG src={webdesign} alt="Imagem de desenvolvimento back-end"></IMG></Bola>
          </CardImgTitle>
          <h2><Span>Desenvolvimento Back-End</Span></h2>
          <p>Criamos sistemas robustos e escaláveis no back-end, garantindo o bom funcionamento da infraestrutura, segurança e a integração com diferentes plataformas, proporcionando a base necessária para o sucesso do seu software.</p>
        </CardInfo>
      </Card>
    </SwiperSlide>
    
    <SwiperSlide>
      <Card>
        <CardInfo>
          <CardImgTitle>
            <Bola><IMG src={webdesign} alt="Imagem de serviços em nuvem"></IMG></Bola>
          </CardImgTitle>
          <h2><Span>Serviços em Nuvem</Span></h2>
          <p>Oferecemos soluções completas em nuvem para escalar e otimizar sua infraestrutura, garantindo flexibilidade, segurança e acessibilidade. A nuvem transforma a maneira como sua empresa opera e cresce no mercado digital.</p>
        </CardInfo>
      </Card>
    </SwiperSlide>
  
    </SwiperStyled>
  );
};
