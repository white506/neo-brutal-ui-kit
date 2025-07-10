import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Modal } from './Modal';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme';

describe('Modal', () => {
  it('не отображается, если open=false', () => {
    render(
      <ThemeProvider theme={theme}>
        <Modal open={false} onClose={() => {}}>Контент</Modal>
      </ThemeProvider>
    );
    expect(screen.queryByText('Контент')).not.toBeInTheDocument();
  });

  it('отображается, если open=true', () => {
    render(
      <ThemeProvider theme={theme}>
        <Modal open={true} onClose={() => {}}>Контент</Modal>
      </ThemeProvider>
    );
    expect(screen.getByText('Контент')).toBeInTheDocument();
  });

  it('вызывает onClose при клике на оверлей', () => {
    const handleClose = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <Modal open={true} onClose={handleClose}>Контент</Modal>
      </ThemeProvider>
    );
    fireEvent.click(screen.getByTestId('modal-overlay'));
    expect(handleClose).toHaveBeenCalled();
  });
}); 