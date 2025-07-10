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

export const fontFamilies = {
  grotesk: 'Space Grotesk, IBM Plex Mono, Monument Grotesk, Arial, sans-serif',
  mono: 'IBM Plex Mono, monospace',
};

export const theme = {
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
};

export type Theme = typeof theme;
