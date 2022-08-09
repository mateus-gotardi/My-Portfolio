import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: ${(props)=>props.backgroundColor};
    padding: 8rem 5rem 10rem 5rem;
    gap: 4rem;
    @media (max-width:1020px) {
        flex-direction: column;
    }
    @media (max-width:650px) {
        .animation{display:none}
        padding: 8rem 2rem 10rem 2rem;
    }
    
`;