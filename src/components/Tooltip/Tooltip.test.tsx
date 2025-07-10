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
  it('не отображает контент по умолчанию', () => {
    renderTooltip();
    expect(screen.queryByText('Подсказка')).not.toBeInTheDocument();
  });

  it('отображает контент при hover', async () => {
    jest.useFakeTimers();
    renderTooltip();
    fireEvent.mouseOver(screen.getByText('Наведи'));
    await act(async () => {
      jest.advanceTimersByTime(100);
    });
    expect(await screen.findByText('Подсказка')).toBeInTheDocument();
    fireEvent.mouseOut(screen.getByText('Наведи'));
    await act(async () => {
      jest.advanceTimersByTime(100);
    });
    expect(screen.queryByText('Подсказка')).not.toBeInTheDocument();
    jest.useRealTimers();
  });
}); 