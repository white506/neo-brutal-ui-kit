import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { PasswordInput } from './PasswordInput';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme';

describe('PasswordInput', () => {
  const renderInput = (props = {}) =>
    render(
      <ThemeProvider theme={theme}>
        <PasswordInput {...props} />
      </ThemeProvider>
    );

  it('renders password input field', () => {
    const { container } = renderInput();
    expect(container.querySelector('input[type="password"]')).toBeInTheDocument();
    expect(screen.getByLabelText(/show password/i)).toBeInTheDocument();
  });

  it('has password type by default', () => {
    const { container } = renderInput();
    const input = container.querySelector('input');
    expect(input).toHaveAttribute('type', 'password');
  });

  it('shows and hides password on icon click', () => {
    const { container } = renderInput();
    const btn = screen.getByLabelText(/show password/i);
    const input = container.querySelector('input');
    // Show password
    fireEvent.click(btn);
    expect(input).toHaveAttribute('type', 'text');
    // Hide password
    fireEvent.click(btn);
    expect(input).toHaveAttribute('type', 'password');
  });

  it('displays error', () => {
    const { container } = renderInput({ error: 'Error' });
    expect(container.textContent).toContain('Error');
  });
}); 