import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { Toast, ToastProps } from './Toast';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme';

const renderToast = (props: Partial<ToastProps> = {}) =>
  render(
    <ThemeProvider theme={theme}>
      <Toast message="Toast" {...props} />
    </ThemeProvider>
  );

describe('Toast', () => {
  it('renders message', () => {
    renderToast();
    expect(screen.getByText('Toast')).toBeInTheDocument();
  });

  it('shows type', () => {
    renderToast({ type: 'success' });
    expect(screen.getByText('Toast')).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const onClose = jest.fn();
    renderToast({ onClose });
    fireEvent.click(screen.getByRole('button', { name: /close/i }));
    expect(onClose).toHaveBeenCalled();
  });
}); 