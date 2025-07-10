import React, { useState } from 'react';
import { Modal, ModalProps } from './Modal';
import { Button } from '../Button/Button';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme';
import { StoryFn } from '@storybook/react';

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    open: { control: 'boolean' },
    title: { control: 'text' },
    children: { control: 'text' },
  },
};

const Template: StoryFn<ModalProps> = (args: ModalProps) => {
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

export const Concrete = Template.bind({});
Concrete.args = {
  title: 'Бетон',
  open: true,
  children: 'Модалка с бетонной текстурой',
  background: 'concrete',
}; 