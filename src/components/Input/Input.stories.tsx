import React from 'react';
import { Input, InputProps } from './Input';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    label: { control: 'text' },
    error: { control: 'text' },
    disabled: { control: 'boolean' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
  },
};

const Template = (args: InputProps) => (
  <ThemeProvider theme={theme}>
    <Input {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  placeholder: 'Введите текст',
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Label',
  error: 'Ошибка ввода',
  placeholder: 'Введите текст',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Label',
  disabled: true,
  placeholder: 'Недоступно',
}; 