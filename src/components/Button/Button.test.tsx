import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme';

describe('Button', () => {
  it('рендерит текст', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button>Текст</Button>
      </ThemeProvider>
    );
    expect(screen.getByText('Текст')).toBeInTheDocument();
  });

  it('вызывает onClick', () => {
    const handleClick = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <Button onClick={handleClick}>Click</Button>
      </ThemeProvider>
    );
    fireEvent.click(screen.getByText('Click'));
    expect(handleClick).toHaveBeenCalled();
  });

  it('отображает иконку', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button iconLeft={<span data-testid="icon">i</span>}>Icon</Button>
      </ThemeProvider>
    );
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });
}); 