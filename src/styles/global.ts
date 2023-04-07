import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme.colors.background};
    font-size: 14px;
    color: ${(props) => props.theme.colors.text};
    font-family: 'Roboto', sans-serif;
    max-width: 1440px;
    margin: auto;
    padding: 0 150px 3rem 150px;

    a {
      text-decoration: none;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 7px;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  @media (max-width: 1200px) {
    body {
      padding: 0 2rem;
    }
  }
`
