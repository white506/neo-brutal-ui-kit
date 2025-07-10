import React from 'react';
import styled, { css } from 'styled-components';

export type SelectAccent = 'orange' | 'blue' | 'red';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  accent?: SelectAccent;
  options: SelectOption[];
}

const accentColor = (accent: SelectAccent | undefined, theme: any) => {
  switch (accent) {
    case 'orange': return theme.colors.accentOrange;
    case 'blue': return theme.colors.accentBlue;
    case 'red': return theme.colors.accentRed;
    default: return theme.colors.black;
  }
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 32px;
`;

const Label = styled.label`
  font-family: ${({ theme }) => theme.fontFamilies.grotesk};
  font-weight: ${({ theme }) => theme.fontWeightBold};
  font-size: 1.5rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.black};
`;

const StyledSelect = styled.select<{ $accent?: SelectAccent; $error?: boolean }>`
  font-family: ${({ theme }) => theme.fontFamilies.mono};
  font-size: 1.35rem;
  font-weight: ${({ theme }) => theme.fontWeightBold};
  color: ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.white};
  border: ${({ theme, $accent, $error }) =>
    $error
      ? `${theme.borderWidth} solid ${theme.colors.accentRed}`
      : `${theme.borderWidth} solid ${accentColor($accent, theme)}`};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 20px 32px;
  outline: none;
  box-shadow: none;
  transition: none;
  min-height: 64px;
  cursor: pointer;
  &:disabled {
    background: ${({ theme }) => theme.colors.gray200};
    color: ${({ theme }) => theme.colors.gray400};
    cursor: not-allowed;
  }
`;

const Error = styled.span`
  color: ${({ theme }) => theme.colors.accentRed};
  font-size: 1.1rem;
  font-family: ${({ theme }) => theme.fontFamilies.mono};
  font-weight: ${({ theme }) => theme.fontWeightBold};
`;

export const Select: React.FC<SelectProps> = ({ label, error, accent, options, disabled, ...rest }) => (
  <Wrapper>
    {label && <Label>{label}</Label>}
    <StyledSelect $accent={accent} $error={!!error} disabled={disabled} {...rest}>
      {options.map(opt => (
        <option key={opt.value} value={opt.value}>{opt.label}</option>
      ))}
    </StyledSelect>
    {error && <Error>{error}</Error>}
  </Wrapper>
); 