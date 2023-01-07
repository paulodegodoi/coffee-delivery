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

  input {
    background-color: ${(props) => props.theme.colors.base_input};
    height: 40px;
    margin: 7px 0;
    border-radius: 7px;
    border: none;
    padding-left: 10px;
  }

  @media (min-width: 800px) {
    body {
      padding: 0 150px 3rem 150px;
    }
  }

  @media (max-width: 800px) {
    body {
      padding: 5px 10px;
    }
  }
`
