import styled from "styled-components";

export const HeaderStyle = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #1b1b1b;
    padding-left: 2.5rem;
    padding-top: 1rem;
    padding-right: 2.5rem;
    nav, #menu, #menuActive{
        display: flex;
        gap:3rem
    };
    .burgerButton{
        display: none;
        background: none;
        border: none;
        svg {
            color: ${(props)=>props.colors.yellow};
            font-size: 1.5rem
    }
    };


    @media (max-width:800px) {
    #menu{
        display: none;
    };
    #menuActive{
        display: block;
        
        right:5rem;
        width:80vw;
        top:0;
        padding:1rem;
        p{
            margin-bottom:1rem;
            font-size: 1.4rem
        }

    };
    .burgerButton {
        display: block;
        border: none;
        cursor: pointer;
       
    };
    #navmenuActive{
        .burgerButton{
            margin-right: 1rem;
        }
        z-index: 10000;
        position: fixed;
        top:0;
        left:0;
        background-color: ${(props)=>props.colors.darkGrey};
        width:100vw
    }
    }
`;