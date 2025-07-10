import React, { useState } from 'react';
import { Modal, ModalProps } from './Modal';
import { Button } from '../Button/Button';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme';

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    open: { control: 'boolean' },
    title: { control: 'text' },
    children: { control: 'text' },
  },
};

const Template = (args: ModalProps) => {
  const [open, setOpen] = useState(args.open ?? false);
  return (
    <ThemeProvider theme={theme}>
      <Button onClick={() => setOpen(true)}>Открыть модалку</Button>
      <Modal {...args} open={open} onClose={() => setOpen(false)}>
        {args.children || 'Контент модального окна'}
      </Modal>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: 'Заголовок',
  open: false,
  children: 'Контент модального окна',
}; 