import React from 'react';
import { Toast, ToastProps } from './Toast';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme';
import { StoryFn } from '@storybook/react';

export default {
  title: 'Components/Toast',
  component: Toast,
  argTypes: {
    type: { control: 'select', options: ['info', 'success', 'error', 'warning'] },
    message: { control: 'text' },
    action: { control: 'text' },
  },
};

const Template: StoryFn<ToastProps> = (args: ToastProps) => (
  <ThemeProvider theme={theme}>
    <Toast {...args} />
  </ThemeProvider>
);

export const Info = Template.bind({});
Info.args = {
  type: 'info',
  message: 'Информационный тост',
};

export const Success = Template.bind({});
Success.args = {
  type: 'success',
  message: 'Успешно!',
};

export const Error = Template.bind({});
Error.args = {
  type: 'error',
  message: 'Ошибка!',
};

export const Warning = Template.bind({});
Warning.args = {
  type: 'warning',
  message: 'Внимание!',
}; 