import { css } from "styled-components";

export const mediumScreen = (props) =>{
    return css `
    @media only screen and (max-width: 768px) {
        ${props}
      }
    `
}

export const mobileScreen = (props) =>{
    return css `
    @media only screen and (max-width: 490px) {
        ${props}
      }
    `
}


export const button = (props) =>{
  return css`
  border:none;
  outline:none;
  ${props};
  height:4rem;
  border:2px solid #f4d8ae;
  background-color:transparent;
  color: #f4d8ae;
  cursor:pointer;
  font-size:2rem;
  position:relative;
  `
}

export const heading = (props) =>{
  return css `
  font-size:3rem;
  text-align: center;
  background-color: #301008;
  -webkit-background-clip: text;
  color:transparent;
  margin-bottom: 2rem;
  transtion:.6s all;
  `
}
