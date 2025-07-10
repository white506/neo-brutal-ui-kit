import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { Toast, ToastProps } from './Toast';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme';

const renderToast = (props: Partial<ToastProps> = {}) =>
  render(
    <ThemeProvider theme={theme}>
      <Toast message="Тост" {...props} />
    </ThemeProvider>
  );

describe('Toast', () => {
  it('рендерит сообщение', () => {
    renderToast();
    expect(screen.getByText('Тост')).toBeInTheDocument();
  });

  it('отображает тип', () => {
    renderToast({ type: 'success' });
    expect(screen.getByText('Тост')).toBeInTheDocument();
  });

  it('вызывает onClose при клике на кнопку закрытия', () => {
    const onClose = jest.fn();
    renderToast({ onClose });
    fireEvent.click(screen.getByRole('button', { name: /закрыть/i }));
    expect(onClose).toHaveBeenCalled();
  });
}); 