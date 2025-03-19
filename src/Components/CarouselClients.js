import React, { useRef } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Card = styled.div`
  display: flex !important;
  flex-direction: column;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  width: 100%;
  transition: transform 0.3s ease-in-out;
  
  &:hover {
    transform: scale(1.02);
  }
`;

const CardInfo = styled.div`
  text-align: center;
  font-family: "Inter", sans-serif;
  font-size: 20px;
  color: #718096;
  line-height: 36px;
  padding: 50px;
  border-radius: 8px;
  max-width: 600px;
`;

const SwiperStyled = styled(Swiper)`
  max-width: 100%;

`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  color: #57007B;
  border: 2px solid transparent;
  background: linear-gradient(white, white) padding-box, #57007B border-box;
  padding: 8px 10px;
  border-radius: 100%;
  cursor: pointer;
  z-index: 10;
  font-size: 10px;
  
  ${({ prev }) => prev && `left: 10px;`}
  ${({ next }) => next && `right: 10px;`}

  @media (max-width:950px) {
    display:none;
  }
`;

export const CarouselClients = () => {
  const swiperRef = useRef(null);

  const goNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };
  const StyledDiv = styled.div`
  max-width: 80%;
  display: flex;
  justify-content: center;
  position: relative;
`

  return (
    <StyledDiv>
      <NavigationButton prev onClick={goPrev}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
        </svg>
      </NavigationButton>

      <SwiperStyled
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        navigation={false}
        modules={[Navigation]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        <SwiperSlide>
          <Card>
            <CardInfo>
              “Sem dúvida, recomendo a Passcode, que se tornou não apenas uma prestadora de serviços, mas uma agregadora de valor para o nosso negócio. Uma das melhores empresas com as quais já trabalhei até agora.”
            </CardInfo>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card>
            <CardInfo>
              “A equipe da Passcode foi incrível do início ao fim. Profissionalismo, comprometimento e entrega impecável. Com certeza continuaremos trabalhando juntos!”
            </CardInfo>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card>
            <CardInfo>
              “O suporte técnico e a atenção aos detalhes que a Passcode oferece fazem toda a diferença. Muito satisfeitos com os serviços prestados!”
            </CardInfo>
          </Card>
        </SwiperSlide>
      </SwiperStyled>

      <NavigationButton next onClick={goNext}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
        </svg>
      </NavigationButton>
    </StyledDiv>

  );
};
