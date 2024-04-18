import styled from "styled-components";

export const ProjectStyle = styled.div`
background-color: ${(props) => props.colors.yellow};
padding:10px;
margin:0;
.slide{
    width: 100%;
    padding: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    @media screen and (max-width: 760px) {
        padding: 0;
    }
}
.projectLink{
    background-color:${(props) => props.colors.darkGrey};
    color:#fff;
    text-decoration: none;
    padding: 0.5rem 5rem;
    border-radius: .5rem;
    :hover{
        opacity: .8;
    }
}
.projects-grid{
    display: grid;
    grid-template-columns: 50% 50%;
    padding: 4rem;
    row-gap: .8rem;
};
.project{
    border-radius:20px;
    padding:1rem 1rem 2.3rem 1rem
};
.project:hover{
    background-color: ${(props) => props.colors.darkGrey};
    p, h1{
        color:${(props) => props.colors.yellow};
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
    padding: 4rem 2rem 10rem 2rem;
}
`;