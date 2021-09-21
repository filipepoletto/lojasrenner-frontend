import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #EFF1F3;
    --purple: #663399;
    --green: #009469;
    --red: #D71920;
    --gray: #C4C4C4;
    --black: #191919;
    --white: #FFFFFF;

    --gray-light: #E0E0E0;

    --text-title: #080808;
    --text-body: #191919;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 12px; // Desktop

    @media (max-width: 1080px) {
      font-size: 91.66%; // 11px
    }

    @media (max-width: 720px) {
      font-size: 83.33%; // 10px
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 300;
    text-transform: uppercase;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;