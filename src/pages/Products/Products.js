import * as React from "react";
import styled from "styled-components";
import { Button } from "../../Components/Buton";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, StaticQuery } from "gatsby";

const Conteiner = styled.div`
  margin-top: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 150px;

  @media (max-width: 980px) {
    flex-direction: column;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 30px;
  }
`;



const ConteinerText = styled.div`
  width: 531px;

  @media (max-width: 980px) {
    width: 90%;
  }
`;

const HeaderText = styled.div`
  h1 {
    font-family: "Inter";
    font-weight: 300;
    font-size: 45px;
    line-height: 71px;
  }
  p {
    font-family: "Inter";
    font-weight: 400;
    font-size: 18px;
    line-height: 36px;
  }
  padding-bottom: 30px;

  @media (max-width: 980px) {
    h1 {
      font-size: 32px;
      line-height: 50px;
    }
    p {
      font-size: 16px;
      line-height: 30px;
    }
  }
`;

const SpanP = styled.span`
  font-family: "Inter";
  font-weight: bold;
  font-size: 53px;
  line-height: 71px;
  background: linear-gradient(180deg, #de4396 10%, #a83284 50%, #de4396 90%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: brightness(1.2);
`;

const SpanG = styled.span`
  font-size: 55px;
  font-weight: bold;
`;

const SpanE = styled.span`
  font-family: "Inter";
  font-weight: bold;
  font-size: 53px;
  line-height: 71px;
  background: linear-gradient(225deg, #f7666f 0%, #406aff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ConteinerImage = styled.div`
  width: 614px;

  @media (max-width: 980px) {
    width: 100%;
    display: none;
    justify-content: center;
  }
`;

const ConteinerImage2 = styled.div`
  width: 614px;
  display: none;

  @media (max-width: 980px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const StyledButton=styled(Button)`
  @media (max-width:800px) {
    margin-top: 30px;
    width: 100%;
  }
`

export default function Products() {
  return (
    <StaticQuery
      query={graphql`
        query {
          mainImage: file(relativePath: { eq: "productsImage.webp" }) {
            childImageSharp {
              gatsbyImageData(
                width: 921
                height: 572
                layout: CONSTRAINED
                placeholder: BLURRED
                
                quality:100
              )
            }
          }
        }
      `}
      render={(data) => {
        const mainSrc = getImage(
          data.mainImage.childImageSharp.gatsbyImageData
        );

        return (
          <Conteiner>
            <ConteinerText>
              <HeaderText>
                <h1>
                  Grandes <SpanP>Produtos</SpanP> são Criados por{" "}
                  <SpanG>grandes</SpanG> <SpanE>equipes</SpanE>
                </h1>
                <p>
                  Montamos e gerenciamos uma equipe de desenvolvedores de alto
                  nível para transformar suas ideias em realidade.
                </p>
              </HeaderText>
              <ConteinerImage2>
              <GatsbyImage
                image={mainSrc}
                alt="Banner de apresentação"
                className="max-w-full object-cover"
                loading="lazy" // Ajuste para carregamento lazy
              />
            </ConteinerImage2>
              <StyledButton>Vamos Começar</StyledButton>
            </ConteinerText>
            <ConteinerImage>
              <GatsbyImage
                image={mainSrc}
                alt="Banner de apresentação"
                className="max-w-full object-cover"
                loading="lazy" // Ajuste para carregamento lazy
              />
            </ConteinerImage>
          </Conteiner>
        );
      }}
    />
  );
}
