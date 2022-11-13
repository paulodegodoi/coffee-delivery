import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    display: flex;
    justify-content: center;
    margin: auto;
    background-color: ${props => props.theme.colors.background};
    max-width: 1440px;
    font-size: 14px;
    color: ${props => props.theme.colors.text};
    font-family: 'Roboto', sans-serif;
  }

  @media (min-width: 800px) {
    body {
      padding: 0 150px 3rem 150px;
    }
  }
`