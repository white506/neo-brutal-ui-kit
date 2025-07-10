import React, { useState } from 'react';
import { Select, SelectProps, SelectOption } from './Select';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme';

const options: SelectOption[] = [
  { value: '', label: 'Выберите вариант' },
  { value: 'one', label: 'Вариант 1' },
  { value: 'two', label: 'Вариант 2' },
  { value: 'three', label: 'Вариант 3' },
];

export default {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    label: { control: 'text' },
    error: { control: 'text' },
    accent: { control: 'select', options: ['orange', 'blue', 'red', undefined] },
    disabled: { control: 'boolean' },
    value: { control: 'text' },
  },
};

const Template = (args: SelectProps) => {
  const [value, setValue] = useState(args.value || '');
  return (
    <ThemeProvider theme={theme}>
      <Select {...args} value={value} onChange={e => setValue(e.target.value)} options={options} />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Выбор',
};

export const Accent = Template.bind({});
Accent.args = {
  label: 'С акцентом',
  accent: 'blue',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled',
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  label: 'Ошибка',
  error: 'Ошибка выбора',
}; 