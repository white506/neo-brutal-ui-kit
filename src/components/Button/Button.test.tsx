import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme';

describe('Button', () => {
  it('renders text', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button>Text</Button>
      </ThemeProvider>
    );
    expect(screen.getByText('Text')).toBeInTheDocument();
  });

  it('calls onClick', () => {
    const handleClick = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <Button onClick={handleClick}>Click</Button>
      </ThemeProvider>
    );
    fireEvent.click(screen.getByText('Click'));
    expect(handleClick).toHaveBeenCalled();
  });

  it('renders icon', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button iconLeft={<span data-testid="icon">i</span>}>Icon</Button>
      </ThemeProvider>
    );
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });
}); 