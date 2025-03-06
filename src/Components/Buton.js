import styled from "styled-components"

export const Button = styled.button`
    background-color: #3D63EA;
    padding-top: 19px;
    padding-right: 30px;
    padding-bottom: 19px;
    padding-left: 30px;
    gap: 10px;
    font-family: 'inter';
    border-radius: 5px;
    color: white;
    border: none;
    box-shadow: 0px 4px 49px 0px #00000026;
    cursor:pointer;
    transition: background-color 0.3s ease-in-out ;

    &:hover{
        background-color:rgb(75, 110, 238);

    };
`