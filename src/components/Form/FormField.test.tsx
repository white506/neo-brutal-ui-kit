import React from 'react';
import { render, screen } from '@testing-library/react';
import { FormField } from './FormField';


describe('FormField', () => {
  it('renders label and children', () => {
    render(
      <FormField label="Name">
        <input />
      </FormField>
    );
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('renders helper if no error', () => {
    render(
      <FormField label="Email" helper="Hint">
        <input />
      </FormField>
    );
    expect(screen.getByText('Hint')).toBeInTheDocument();
  });

  it('renders error if error is passed', () => {
    render(
      <FormField label="Password" error="Error">
        <input />
      </FormField>
    );
    expect(screen.getByText('Error')).toBeInTheDocument();
  });

  it('does not render helper if error exists', () => {
    render(
      <FormField label="Email" helper="Hint" error="Error">
        <input />
      </FormField>
    );
    expect(screen.queryByText('Hint')).not.toBeInTheDocument();
    expect(screen.getByText('Error')).toBeInTheDocument();
  });
}); 