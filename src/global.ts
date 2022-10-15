import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%; 
  }

  body {
    margin: 0;
    padding: 0%;
    box-sizing: border-box;
    background: rgb(107,9,121);
    background: linear-gradient(63deg, rgba(107,9,121,0.15) 0%, rgba(112,41,134,0.2) 35%, rgba(53,82,151,0.2) 69%, rgba(4,148,177,0.1) 100%, rgba(5,13,149,0.1) 100%, rgba(0,163,196,0.09) 100%);
    background-size: cover;
  }

  .container {  
    margin-block: 5rem;
    width: min(50rem, 100%);
    padding-inline: 2.4rem;
    box-sizing: border-box;
    margin-inline: auto;
  }

  body, input, textarea, button, select {
    font-family: "Roboto", sans-serif
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
    outline: none;
    background: transparent;
    cursor: pointer;
  }
`