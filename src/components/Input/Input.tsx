import React from 'react';
import styled from 'styled-components';
import { theme } from '../../theme/theme';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xs};
  margin-bottom: ${theme.spacing.md};
`;

const Label = styled.label`
  font-family: ${theme.fontFamilies.grotesk};
  font-weight: ${theme.fontWeightBold};
  font-size: 1rem;
  text-transform: uppercase;
  color: ${theme.colors.black};
`;

const StyledInput = styled.input`
  font-family: ${theme.fontFamilies.mono};
  font-size: 1.1rem;
  font-weight: ${theme.fontWeightBold};
  color: ${theme.colors.black};
  background: ${theme.colors.white};
  border: ${theme.borderWidth} solid ${theme.colors.black};
  border-radius: ${theme.borderRadius};
  padding: ${theme.spacing.xs} ${theme.spacing.md};
  outline: none;
  box-shadow: none;
  transition: none;
  min-height: 44px;
  &:focus {
    border-color: ${theme.colors.accentBlue};
  }
  &:disabled {
    background: ${theme.colors.gray200};
    color: ${theme.colors.gray400};
    cursor: not-allowed;
  }
`;

const Error = styled.span`
  color: ${theme.colors.accentRed};
  font-size: 0.95rem;
  font-family: ${theme.fontFamilies.mono};
  font-weight: ${theme.fontWeightBold};
`;

export const Input: React.FC<InputProps> = ({ label, error, id, ...rest }) => (
  <Wrapper>
    {label && <Label htmlFor={id}>{label}</Label>}
    <StyledInput id={id} {...rest} />
    {error && <Error>{error}</Error>}
  </Wrapper>
); 