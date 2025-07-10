import { createGlobalStyle } from 'styled-components';
import { fontFamilies, colors } from './theme';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html, body {
    width: 100%;
    min-height: 100vh;
    background: ${colors.white};
    color: ${colors.black};
    font-family: ${fontFamilies.grotesk};
    font-weight: 700;
    letter-spacing: 0.01em;
    -webkit-font-smoothing: none;
    -moz-osx-font-smoothing: grayscale;
    font-size: 18px;
    line-height: 1.3;
  }
  a {
    color: ${colors.accentBlue};
    text-decoration: none;
    font-weight: 700;
  }
  strong, b {
    font-weight: 700;
  }
`;
