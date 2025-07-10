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
  children: 'Контент карточки',
};

export const WithTitle = Template.bind({});
WithTitle.args = {
  title: 'Заголовок',
  children: 'Карточка с заголовком',
};

export const WithSubtitle = Template.bind({});
WithSubtitle.args = {
  title: 'Заголовок',
  subtitle: 'Подзаголовок',
  children: 'Карточка с заголовком и подзаголовком',
};

export const WithActions = Template.bind({});
WithActions.args = {
  title: 'Заголовок',
  children: 'Карточка с actions',
  actions: <Button variant="accent">Действие</Button>,
};

export const Concrete = Template.bind({});
Concrete.args = {
  title: 'Бетон',
  children: 'Карточка с бетонной текстурой',
}; 