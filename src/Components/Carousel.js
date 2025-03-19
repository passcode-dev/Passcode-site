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
              <Bola><IMG src={mobile} alt="Imagem de celular"></IMG></Bola>
            </CardImgTitle>
            <h2><Span>Mobile App Development</Span></h2>
            <p>A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.</p>
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
            <h2><Span>Web Design & Development</Span></h2>
            <p>A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.</p>
          </CardInfo>
        </Card>
      </SwiperSlide>

      <SwiperSlide>
        <Card>
          <CardInfo>
            <CardImgTitle>
              <Bola>
                <IMG src={dashboard} alt="Imagem de dashboard"></IMG>
              </Bola>
            </CardImgTitle>
            <h2><Span>Software Testing Service</Span></h2>
            <p>A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.</p>
          </CardInfo>
        </Card>
      </SwiperSlide>

    </SwiperStyled>
  );
};
