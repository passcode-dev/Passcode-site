import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5";



const CarouselContainer=styled.div`
    width: 1280px;
    height: 346px;
    top: 1425px;
    left: 80px;
    
  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
const Card= styled.div`
    width: 945px;
    height: 250px;
    gap: 76px;

`
const QuoteContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 600px;
  padding: 20px;

  &::before,
  &::after {
    font-size: 40px;
    font-weight: bold;
    background: linear-gradient(180deg, #E03B8B, #7D2AE8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: absolute;
  }

  &::before {
    content: "“"; /* Aspa de abertura */
    top: -10px;
    left: -30px;
  }

  &::after {
    content: "”"; /* Aspa de fechamento */
    bottom: -10px;
    right: -30px;
  }
`;


const CardText=styled.div`
    width: 535px;
    height: 181px;
    top: 196px;
    left: 96px;
    p{
        font-family: Inter;
        font-weight: 400;
        font-size: 18px;
        line-height: 36px;
        letter-spacing: 0%;
        text-align: center;
        color: #718096;

    }
`
const CustomArrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 50px;
  font-weight: 20;
  color:  #57007B;
  z-index: 2;
  cursor: pointer;
  &:hover{color:#57007B}
`;

const PrevArrow = styled(CustomArrow)`
  left: 10px;
`;

const NextArrow = styled(CustomArrow)`
  right: 10px;
`;

export const CarouselClients = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "40px",
        prevArrow: (
            <PrevArrow>
                <IoArrowBackCircleOutline />
            </PrevArrow>
        ),
        nextArrow: (
            <NextArrow>
                <IoArrowForwardCircleOutline />
            </NextArrow>
        ),
    };

    return (
        <CarouselContainer>
            <Slider {...settings}>
                <Card>
                    <QuoteContainer>
                        <CardText><p>Sem dúvida, recomendo a Passcode, que se tornou não apenas uma prestadora de serviços, mas uma agregadora de valor para o nosso negócio. Uma das melhores empresas com as quais já trabalhei até agora.</p></CardText>
                    </QuoteContainer>
                </Card>
                <Card>
                    <QuoteContainer>
                        <CardText><p>Sem dúvida, recomendo a Passcode, que se tornou não apenas uma prestadora de serviços, mas uma agregadora de valor para o nosso negócio. Uma das melhores empresas com as quais já trabalhei até agora.</p></CardText>
                    </QuoteContainer>
                </Card>
            </Slider>
        </CarouselContainer>
      
    );
  }