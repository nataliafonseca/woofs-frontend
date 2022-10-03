import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  html {
    @media (max-width: 1080px) {
      html {
        font-size: 93.75%;
      }
    }

    @media (max-width: 720px) {
      html {
        font-size: 87.5%;
      }
    }
  }

  body {
    background: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.gray800};    
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem Montserrat, sans-serif;
  }

  a {
    color: ${({ theme }) => theme.green500};
  }

  button {
    cursor: pointer;
  }
`;
