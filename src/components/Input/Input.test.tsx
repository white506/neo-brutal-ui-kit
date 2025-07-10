import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from './Input';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme';

describe('Input', () => {
  it('рендерит label', () => {
    render(
      <ThemeProvider theme={theme}>
        <Input label="Лейбл" />
      </ThemeProvider>
    );
    expect(screen.getByText('Лейбл')).toBeInTheDocument();
  });

  it('работает ввод значения', () => {
    render(
      <ThemeProvider theme={theme}>
        <Input placeholder="test" />
      </ThemeProvider>
    );
    const input = screen.getByPlaceholderText('test');
    fireEvent.change(input, { target: { value: '123' } });
    expect((input as HTMLInputElement).value).toBe('123');
  });

  it('рендерит textarea', () => {
    render(
      <ThemeProvider theme={theme}>
        <Input textarea placeholder="area" />
      </ThemeProvider>
    );
    expect(screen.getByPlaceholderText('area')).toBeInTheDocument();
  });

  it('очищает значение при withClear', () => {
    const Wrapper = () => {
      const [val, setVal] = React.useState('abc');
      return (
        <ThemeProvider theme={theme}>
          <Input withClear value={val} onChange={e => setVal(e.target.value)} />
        </ThemeProvider>
      );
    };
    render(<Wrapper />);
    const clearBtn = screen.getByRole('button', { name: /очистить/i });
    fireEvent.click(clearBtn);
    expect((screen.getByRole('textbox') as HTMLInputElement).value).toBe('');
  });
}); 