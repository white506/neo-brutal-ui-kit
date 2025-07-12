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
      <Title as="h1">H1 Heading</Title>
      <Subtitle as="h2">H2 Subtitle</Subtitle>
      <Text size="lg">Large text (lg)</Text>
      <Text>Regular text (md)</Text>
      <Caption>Caption</Caption>
    </div>
  </ThemeProvider>
);

export const TitleVariant = () => (
  <ThemeProvider theme={theme}>
    <Title variant="highlight">Highlight variant</Title>
  </ThemeProvider>
); 