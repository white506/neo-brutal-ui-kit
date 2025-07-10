export const colors = {
  // Новая палитра
  brown: '#672725',
  orange: '#F56D39',
  beige: '#F9E2B0',
  blueGray: '#8A9EA5',
  darkGray: '#353C42',
  black: '#18181A',
  // Старые акценты (оставляю для обратной совместимости)
  accentOrange: '#FF4D00',
  accentBlue: '#429EFF',
  accentRed: '#D30000',
  // Старые серые
  gray100: '#F4F4F4',
  gray200: '#E0E0E0',
  gray300: '#BDBDBD',
  gray400: '#828282',
  gray500: '#1F1F1F',
  // Белый
  white: '#FFFFFF',
};

export const colorsNight = {
  brown: '#2D1A13',
  orange: '#F56D39',
  beige: '#2B2320',
  blueGray: '#4A5A60',
  darkGray: '#18181A',
  black: '#FFFFFF',
  accentOrange: '#FF4D00',
  accentBlue: '#429EFF',
  accentRed: '#D30000',
  gray100: '#353C42',
  gray200: '#2B2320',
  gray300: '#18181A',
  gray400: '#8A9EA5',
  gray500: '#F9E2B0',
  white: '#18181A',
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
      outline: `background: transparent; color: #FFFFFF; border-color: #FFFFFF;`,
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
