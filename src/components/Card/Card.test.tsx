import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme';

describe('Card', () => {
  it('рендерит children', () => {
    render(
      <ThemeProvider theme={theme}>
        <Card>Контент карточки</Card>
      </ThemeProvider>
    );
    expect(screen.getByText('Контент карточки')).toBeInTheDocument();
  });
}); 