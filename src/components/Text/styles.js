import styled from "styled-components";

export const Paragraph = styled.p`
    color: ${(props) => props.color};
    font-size: ${(props) => props.fontSize}rem;
    text-align:  ${(props) => props.textAlign ? props.textAlign : 'left'};
    font-weight: 480;
    @media (max-width:1080px) {
        font-size: ${(props) => (props.fontSize / 100) * 95}rem;
        text-align: center;
    }
    @media (max-width:600px) {
        font-size: ${(props) => (props.fontSize / 100) * 85}rem;
    }
`;