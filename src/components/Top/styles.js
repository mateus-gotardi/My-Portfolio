import styled from "styled-components";

export const TopStyles = styled.button`
    position:fixed;
    bottom:1rem;
    right:1rem;
    background:${(props) => props.colors.darkGrey} ;
    border: none;
    border-radius:50%;
    padding:10px; 
    cursor:pointer;
    svg{
        color: ${(props) => props.colors.yellow};
        font-size: 1.3rem
    };
   
`;