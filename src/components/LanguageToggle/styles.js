import styled from "styled-components";

export const Toggler = styled.div`
align-items: center;
justify-content: center;
display: flex;
  .switch{
    position: relative;
    display: inline-block;
    width: 2rem;
    height: 1.5rem;
    margin: 0 .5rem 0 .5rem
  }
  
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${(props)=>props.colors.yellow};
    -webkit-transition: .4s;
    transition: .4s;
    }

  .slider:before {
    position: absolute;
    content: "";
    height: 1rem;
    width: 1rem;
    left: 4px;
    bottom: 4px;
    background-color: ${(props)=>props.colors.darkGrey};
    -webkit-transition: .4s;
    transition: .4s;
    }
  input:checked + .slider {
    background-color: ${(props)=>props.colors.yellow};
    }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
    }

  input:checked + .slider:before {
    -webkit-transform: translateX(.5rem);
    -ms-transform: translateX(.5rem);
    transform: translateX(.5rem);
    }
  .slider.round {
    border-radius: 34px;
    }

  .slider.round:before {
    border-radius: 50%;
    }   
  input { 
    opacity: 0;
    width: 0;
    height: 0;
    }
  .flag{
    font-size: 1.3rem;
    color: ${(props)=>props.colors.yellow};
  }
  .flagbr{
    font-size: 1.6rem;
    color: ${(props)=>props.colors.yellow};
  }
`

