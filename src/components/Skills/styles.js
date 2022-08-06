import styled from "styled-components";

export const SkillsDiv = styled.div`
color: ${(props) => props.color};
.skillsList{
    display: grid;
    grid-template-columns: auto auto;
    padding: 10px;
    column-gap: 2rem;
    row-gap: .8rem;
    font-size: 1.4rem;
    svg{
        margin-right:.5rem
    }
}
@media (max-width:750px){
    .skillsList{
        font-size: 1rem;
    }
}
`;