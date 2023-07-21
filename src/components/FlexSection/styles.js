import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: ${(props) => props.backgroundColor};
    padding: 4rem 5rem 10rem 5rem;
    gap: 4rem;
    #about_text{
        width: 60rem;
    }
    .animation{
        width: 40rem;
    }
    #about_text{
        width: 60%;
    }
    @media (max-width:1200px) {
        flex-direction: column;
        padding: 4rem 2rem 10rem 2rem;
        #about_text{
            width: 100%;
        }
    }
    @media (max-width:700px) {
        .animation{
            width: 25rem;
        };
    }
    @media (max-width:425px) {
        .animation{
            width: 20rem;
        };
    }
    @media (max-width:350px) {
        .animation{
            width: 17rem;
        };
    }
    @media (max-width:280px) {
        .animation{
            display: none;
        };
    }
`;