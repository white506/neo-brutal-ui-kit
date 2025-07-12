import React from 'react';
import { FormField } from './FormField';
import { Input } from '../Input/Input';
import { PasswordInput } from './PasswordInput';

export default {
  title: 'Form/FormField',
  component: FormField,
};

export const Default = () => (
  <FormField label="Email" helper="Enter email">
    <Input name="email" />
  </FormField>
);

export const Error = () => (
  <FormField label="Password" error="Password is too short">
    <PasswordInput name="password" />
  </FormField>
); 