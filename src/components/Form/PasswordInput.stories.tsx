import React from 'react';
import { PasswordInput } from './PasswordInput';

export default {
  title: 'Form/PasswordInput',
  component: PasswordInput,
};

export const Default = () => <PasswordInput name="password" />;

export const WithError = () => <PasswordInput name="password" error="Password is too short" />; 