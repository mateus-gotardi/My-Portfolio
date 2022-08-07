import styled from "styled-components";

export const ProjectStyle = styled.div`
background-color: ${(props)=>props.colors.yellow};
padding:10px;
margin:0;
.projects-grid{
    display: grid;
    grid-template-columns: auto auto;
    padding: 10px;
    column-gap: 2rem;
    row-gap: .8rem;
};
.project{
    border-radius:20px;
    padding:1rem 1rem 2.3rem 1rem
};
.project:hover{
    background-color: ${(props)=>props.colors.darkGrey};
    p, h1{
        color:${(props)=>props.colors.yellow};
    }   
}
@media (max-width:1020px){
    .projects-grid{
    display: grid;
    grid-template-columns: auto;
    padding: 10px;
    column-gap: 2rem;
    row-gap: .8rem;
};
}
`;