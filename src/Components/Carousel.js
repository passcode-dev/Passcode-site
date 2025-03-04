import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import webdesign from "../images/webdesign.png"
import mobile from "../images/mobile.png"
import dashboard from "../images/DashBoard.png"

const CarouselContainer = styled.div`
  width: 80%;
  margin: auto;
  padding: 40px 0;

  .slick-slide {
    display: flex;
    justify-content: center;
  }

  .slick-dots li.slick-active button:before {
    color: #D81B60;
  }
`;

const Card = styled.div`
  display:flex!important;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  justify-content: center;
  align-items:center;
  width: 333px;
  height: 287px;

  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 310px;
  height: 210px;
  p {
    font-size: 12px; 
    color: #666;
    
  }
`;
const CardImgTitle= styled.div` 
  width: 271px;
  height: 98px;
  h4 {
    font-size: 20px; 
    line-height: 27.3px;
    font-weight: 600px;
    color: #333;
  }
`
const Bola = styled.div`
  width: 58px;
  height: 58px;
  border-width: solid 1px;
`
const IMG=styled.img`
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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "40px",
  };

  return (
    <CarouselContainer>
      <Slider {...settings}>
        <Card>
          <CardInfo>
            <CardImgTitle>
                <Bola>
                  <IMG src={mobile}></IMG>
                </Bola>
              <h4>Mobile App Development</h4>
            </CardImgTitle>
            <p>
              A Website is an extension of yourself and we can help you to express it properly.
            </p>
          </CardInfo>
        </Card>
        <Card>
          <CardInfo>
          <CardImgTitle>
                <Bola>
                  <IMG src={webdesign}></IMG>
                </Bola>
              <h4><Span>Web Design & Development</Span></h4>
            </CardImgTitle>
            <p>
              A Website is an extension of yourself and we can help you to express it properly.
            </p>
          </CardInfo>
        </Card>
        <Card>
          <CardInfo>
            <CardImgTitle>
                <Bola>
                  <IMG src={dashboard}></IMG>
                </Bola>
               <h4>Software Testing Service</h4>
            </CardImgTitle>
            <p>
              A Website is an extension of yourself and we can help you to express it properly.
            </p>
          </CardInfo>
        </Card>
      </Slider>
    </CarouselContainer>
  );
};
