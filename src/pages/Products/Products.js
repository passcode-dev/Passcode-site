import * as React from "react";
import styled from "styled-components";
import { Button } from "../../Components/Buton";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, StaticQuery } from "gatsby";

const Conteiner = styled.div`
    margin-top: 150px;
    display: flex;
    justify-content: center;
    margin-bottom: 150px;
`;

const ConteinerText = styled.div`
    width: 531px;
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
        font-weight: 400px;
        font-size: 18px;
        line-height: 36px;
    }
    padding-bottom: 30px;
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
`;

export default function Products() {
    return (
        <StaticQuery
            query={graphql`
                query {
                    mainImage: file(relativePath: { eq: "main.webp" }) {
                        childImageSharp {
                            gatsbyImageData(width: 1000, height: 720)
                        }
                    }
                }
            `}
            render={(data) => {
                const mainSrc = getImage(data.mainImage.childImageSharp.gatsbyImageData);

                return (
                    <Conteiner>
                        <ConteinerText>
                            <HeaderText>
                                <h1>
                                    Grandes <SpanP>Produtos</SpanP> são Criados por{" "}
                                    <SpanG>grandes</SpanG> <SpanE>equipes</SpanE>
                                </h1>
                                <p>
                                    Montamos e gerenciamos uma equipe de desenvolvedores de alto nível
                                    para transformar suas ideias em realidade.
                                </p>
                            </HeaderText>
                            <Button>Vamos Começar</Button>
                        </ConteinerText>
                        <ConteinerImage>
                            <GatsbyImage image={mainSrc} loading="eager" alt="Banner de apresentação" className="max-w-full object-cover" />
                        </ConteinerImage>
                    </Conteiner>
                );
            }}
        />
    );
}
