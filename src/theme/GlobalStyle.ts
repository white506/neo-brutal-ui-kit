import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html, body {
    width: 100%;
    min-height: 100vh;
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    font-family: ${({ theme }) => theme.fontFamilies.grotesk};
    font-weight: 700;
    letter-spacing: 0.01em;
    -webkit-font-smoothing: none;
    -moz-osx-font-smoothing: grayscale;
    font-size: 18px;
    line-height: 1.3;
  }
  .concrete-bg {
    background: ${({ theme }) => theme.colors.white} url("data:image/svg+xml;utf8,<svg width='200' height='200' xmlns='http://www.w3.org/2000/svg'><rect width='200' height='200' fill='%23f4f4f4'/><circle cx='60' cy='60' r='2' fill='%23bdbdbd'/><circle cx='120' cy='80' r='1.5' fill='%23828282'/><circle cx='180' cy='120' r='2.5' fill='%23e0e0e0'/><circle cx='100' cy='160' r='1.2' fill='%23bdbdbd'/><circle cx='40' cy='140' r='1.8' fill='%23828282'/><circle cx='160' cy='40' r='1.7' fill='%23e0e0e0'/></svg>") repeat !important;
    background-blend-mode: multiply;
    opacity: 0.98;
  }
  a {
    color: ${({ theme }) => theme.colors.accentBlue};
    text-decoration: none;
    font-weight: 700;
  }
  strong, b {
    font-weight: 700;
  }
`;
