import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.bg_color};
    font-family: "Open Sans", sans-serif;
    transition: all 0.50s linear;
    width: 100%;
    overflow-x: hidden
  }
  `
