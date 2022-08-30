import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  ul {
    list-style: none;
  }

  html:focus-within {
    scroll-behavior: smooth;
  }

  body {
    min-height: 100vh;
    text-rendering: optimizeLegibility;
    line-height: 1.5;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.gray800};    
  }

  a {
    color: ${({ theme }) => theme.green500};
    font-weight: 700;
    text-decoration: none;
  }

  img,
  picture {
    max-width: 100%;
    display: block;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  label, button {
    cursor: pointer;
    user-select: none;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }
    
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

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
`;
