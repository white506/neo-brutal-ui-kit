import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Checkbox } from './Checkbox';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme';

describe('Checkbox', () => {
  it('рендерит label', () => {
    render(
      <ThemeProvider theme={theme}>
        <Checkbox label="Чекбокс" />
      </ThemeProvider>
    );
    expect(screen.getByText('Чекбокс')).toBeInTheDocument();
  });

  it('вызывает onChange при клике', () => {
    const handleChange = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <Checkbox label="Чекбокс" onChange={handleChange} />
      </ThemeProvider>
    );
    fireEvent.click(screen.getByLabelText('Чекбокс'));
    expect(handleChange).toHaveBeenCalled();
  });

  it('работает checked', () => {
    render(
      <ThemeProvider theme={theme}>
        <Checkbox label="Чекбокс" checked onChange={() => {}} />
      </ThemeProvider>
    );
    expect(screen.getByLabelText('Чекбокс')).toBeChecked();
  });
}); 