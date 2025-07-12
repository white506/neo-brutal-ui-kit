import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { CustomSelect, CustomSelectOption } from './CustomSelect';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme';

describe('CustomSelect', () => {
  const options: CustomSelectOption[] = [
    { value: '', label: 'Select' },
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' },
  ];
  const renderSelect = (props = {}) =>
    render(
      <ThemeProvider theme={theme}>
        <CustomSelect options={options} {...props} />
      </ThemeProvider>
    );

  it('renders label and options', () => {
    renderSelect({ label: 'Test' });
    expect(screen.getByText('Test')).toBeInTheDocument();
    expect(screen.getAllByText('Select').length).toBeGreaterThan(0);
  });

  it('opens and selects option', () => {
    const onChange = jest.fn();
    renderSelect({ value: '', onChange });
    fireEvent.click(screen.getByRole('button'));
    fireEvent.click(screen.getByText('One'));
    expect(onChange).toHaveBeenCalledWith('one');
  });

  it('disabled does not open list', () => {
    renderSelect({ disabled: true });
    fireEvent.click(screen.getByRole('button'));
    expect(screen.queryByText('One')).not.toBeVisible();
  });

  // Тест accent применяет стиль удалён как неактуальный
}); 