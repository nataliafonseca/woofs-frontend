import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  place-content: center;
  width: 100%;
  min-height: 80vh;
  position: relative;

  .logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1.6);
  }

  .loading {
    height: 180px;
    aspect-ratio: 1;
    -webkit-animation: spin 4s linear infinite;
    -moz-animation: spin 4s linear infinite;
    animation: spin 4s linear infinite;
  }

  @-moz-keyframes spin {
    0% {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    0% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;
