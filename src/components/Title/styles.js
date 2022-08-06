import styled from "styled-components";

export const TitleStyle = styled.h1`
    color: ${(props) => props.color};
    font-size: ${(props) => props.fontSize}rem;
    margin-bottom: 1rem;
    margin-top:1rem;
    text-align: center;
    a{
        color: ${(props) => props.color};
        margin-right: 1rem;
    }
    @media (max-width:1020px) {
        font-size: ${(props) => props.fontSize-.6}rem;
    }
`;