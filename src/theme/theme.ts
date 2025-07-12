export const colors = {
  brown: '#4B2E05', // Pantone 4975 C
  orange: '#FF6F00', // Pantone 1585 C
  beige: '#F9E2B0', // Pantone 7401 C
  blueGray: '#4A5A60', // Pantone 7545 C
  darkGray: '#353C42', // Pantone 432 C
  black: '#18181A', // Pantone Black 6 C
  white: '#FFFFFF', // Pantone 11-0601 TCX
  accentRed: '#D72631', // Pantone 1795 C
  accentGreen: '#2ECC40', // Pantone 7737 C
  accentBlue: '#429EFF', // Pantone 2175 C
};

export const colorsNight = {
  brown: '#4B2E05',
  orange: '#FF6F00',
  beige: '#2B2320',
  blueGray: '#4A5A60',
  darkGray: '#18181A',
  black: '#FFFFFF',
  white: '#18181A',
  accentRed: '#D72631',
  accentGreen: '#2ECC40',
  accentBlue: '#429EFF',
};

export const fontFamilies = {
  grotesk: 'Space Grotesk, IBM Plex Mono, Monument Grotesk, Arial, sans-serif',
  mono: 'IBM Plex Mono, monospace',
};

export const themeDay = {
  colors,
  fontFamilies,
  fontWeightBold: 700,
  borderRadius: '0px',
  borderWidth: '3px',
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '24px',
    lg: '48px',
  },
  overrides: {}, // для кастомизации компонентов
  variants: {
    Button: {
      outline: `background: transparent; color: #672725; border-color: #672725;`,
      flat: `background: none; color: #18181A; border: none;`,
      link: `background: none; color: #F56D39; border: none; text-decoration: underline;`,
    },
    Avatar: {},
    Card: {},
    Input: {},
    Modal: {},
    Tooltip: {},
    Toast: {},
    Select: {},
    Checkbox: {},
    Table: {},
    Typography: {},
  },
};

export const themeNight = {
  colors: colorsNight,
  fontFamilies,
  fontWeightBold: 700,
  borderRadius: '0px',
  borderWidth: '3px',
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '24px',
    lg: '48px',
  },
  overrides: {}, // для кастомизации компонентов
  variants: {
    Button: {
      primary: `background: #2D1A13; color: #F9E2B0; border-color: #2D1A13;`,
      outline: `background: transparent; color: #F9E2B0; border-color: #F9E2B0;`,
      flat: `background: none; color: #F9E2B0; border: none;`,
      link: `background: none; color: #F56D39; border: none; text-decoration: underline;`,
    },
    Avatar: {},
    Card: {},
    Input: {},
    Modal: {},
    Tooltip: {},
    Toast: {},
    Select: {},
    Checkbox: {},
    Table: {},
    Typography: {},
  },
};

export const theme = themeDay;

export type Theme = typeof theme;
