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
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Modal {...args} open={open} onClose={() => setOpen(false)}>
        {args.children || 'Modal window content'}
      </Modal>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: 'Title',
  open: false,
  children: 'Modal window content',
};

export const Concrete = Template.bind({});
Concrete.args = {
  title: 'Concrete',
  open: true,
  children: 'Modal with concrete texture',
  background: 'concrete',
}; 