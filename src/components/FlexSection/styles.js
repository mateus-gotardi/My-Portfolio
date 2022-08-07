import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: ${(props)=>props.backgroundColor};
    padding: 3.2rem 3.2rem 5rem 3.2rem;
    gap: 1.2rem;
    @media (max-width:1020px) {
        flex-direction: column;
    }
    @media (max-width:600px) {
        .animation{display:none}
    }
`;