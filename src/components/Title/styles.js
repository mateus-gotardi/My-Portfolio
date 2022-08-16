import styled from "styled-components";

export const TitleStyle = styled.h1`
    color: ${(props) => props.color};
    font-size: ${(props) => props.fontSize}rem;
    margin-bottom: 1rem;
    margin-top:1rem;
    text-align: ${(props) => props.textAlign ? props.textAlign : 'left'};
    a{
        color: ${(props) => props.color};
        margin-right: 1rem;
    }
    svg:hover{
        transform: scale(1.3)
    }
    @media (max-width:1020px) {
        font-size: ${(props) => (props.fontSize / 100) * 95}rem;
        text-align: center;
    }
`;