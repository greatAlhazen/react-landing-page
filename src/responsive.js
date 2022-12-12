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
