import React from 'react';
import { Card, CardProps } from './Card';
import { Button } from '../Button/Button';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme';
import { StoryFn } from '@storybook/react';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    children: { control: 'text' },
  },
};

const Template: StoryFn<CardProps> = (args: CardProps) => (
  <ThemeProvider theme={theme}>
    <Card {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Card content',
};

export const WithTitle = Template.bind({});
WithTitle.args = {
  title: 'Title',
  children: 'Card with title',
};

export const WithSubtitle = Template.bind({});
WithSubtitle.args = {
  title: 'Title',
  subtitle: 'Subtitle',
  children: 'Card with title and subtitle',
};

export const WithActions = Template.bind({});
WithActions.args = {
  title: 'Title',
  children: 'Card with actions',
  actions: <Button variant="accent">Action</Button>,
};

export const Concrete = Template.bind({});
Concrete.args = {
  title: 'Concrete',
  children: 'Card with concrete texture',
  background: 'concrete', // now will have concrete background
}; 