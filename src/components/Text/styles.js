import styled from "styled-components";

export const Paragraph = styled.p`
    color: ${(props)=>props.color};
    font-size: ${(props)=>props.fontSize}rem;
    text-align: center;
    font-weight: 480;
    @media (max-width:1020px) {
        font-size: ${(props) => (props.fontSize/100)*95}rem;
    }
    @media (max-width:600px) {
        font-size: ${(props) => (props.fontSize/100)*90}rem;
    }
`;