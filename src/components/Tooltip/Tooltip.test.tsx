import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { Tooltip, TooltipProps } from './Tooltip';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme';

const renderTooltip = (props: Partial<TooltipProps> = {}) =>
  render(
    <ThemeProvider theme={theme}>
      <Tooltip content="Подсказка" {...props}>
        <button>Наведи</button>
      </Tooltip>
    </ThemeProvider>
  );

describe('Tooltip', () => {
  it('по умолчанию tooltip скрыт (opacity: 0)', () => {
    renderTooltip();
    const tooltip = screen.getByRole('tooltip');
    expect(tooltip).toHaveStyle({ opacity: '0' });
  });

  it('отображает tooltip при hover (opacity: 1)', async () => {
    jest.useFakeTimers();
    renderTooltip();
    fireEvent.mouseOver(screen.getByText('Наведи'));
    await act(async () => {
      jest.advanceTimersByTime(100);
    });
    const tooltip = screen.getByRole('tooltip');
    expect(tooltip).toHaveStyle({ opacity: '1' });
    fireEvent.mouseOut(screen.getByText('Наведи'));
    await act(async () => {
      jest.advanceTimersByTime(100);
    });
    expect(tooltip).toHaveStyle({ opacity: '0' });
    jest.useRealTimers();
  });
}); 