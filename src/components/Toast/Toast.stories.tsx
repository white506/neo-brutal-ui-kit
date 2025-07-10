import React from 'react';
import { Toast, ToastProps } from './Toast';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme';

const icons = {
  info: <span>ℹ️</span>,
  success: <span>✔️</span>,
  error: <span>⛔</span>,
  warning: <span>⚠️</span>,
};

export default {
  title: 'Components/Toast',
  component: Toast,
  argTypes: {
    type: { control: 'select', options: ['info', 'success', 'error', 'warning'] },
    message: { control: 'text' },
    icon: { control: false },
  },
};

const Template = (args: ToastProps) => (
  <ThemeProvider theme={theme}>
    <Toast {...args} />
  </ThemeProvider>
);

export const Info = Template.bind({});
Info.args = {
  type: 'info',
  message: 'Информационный тост',
  icon: icons.info,
};

export const Success = Template.bind({});
Success.args = {
  type: 'success',
  message: 'Успешно!',
  icon: icons.success,
};

export const Error = Template.bind({});
Error.args = {
  type: 'error',
  message: 'Ошибка!',
  icon: icons.error,
};

export const Warning = Template.bind({});
Warning.args = {
  type: 'warning',
  message: 'Внимание!',
  icon: icons.warning,
}; 