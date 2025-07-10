import 'styled-components';
import { theme } from './theme';

type ThemeType = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {
    variants: {
      Avatar: { [key: string]: string };
      Card: { [key: string]: string };
      Input: { [key: string]: string };
      Modal: { [key: string]: string };
      Tooltip: { [key: string]: string };
      Toast: { [key: string]: string };
      Select: { [key: string]: string };
      Checkbox: { [key: string]: string };
      Table: { [key: string]: string };
      Typography: { [key: string]: string };
      Button: { [key: string]: string };
      [key: string]: { [key: string]: string };
    };
  }
} 