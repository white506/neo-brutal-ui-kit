import React from 'react';
import { Title, Subtitle, Text, Caption } from './Typography';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme';

export default {
  title: 'Components/Typography',
};

export const All = () => (
  <ThemeProvider theme={theme}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Title as="h1">Заголовок H1</Title>
      <Subtitle as="h2">Подзаголовок H2</Subtitle>
      <Text size="lg">Крупный текст (lg)</Text>
      <Text>Обычный текст (md)</Text>
      <Caption>Подпись/Caption</Caption>
    </div>
  </ThemeProvider>
);

export const TitleVariant = () => (
  <ThemeProvider theme={theme}>
    <Title variant="highlight">Вариант highlight</Title>
  </ThemeProvider>
); 