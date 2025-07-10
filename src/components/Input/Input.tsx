import React from 'react';
import styled from 'styled-components';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Label = styled.label`
  font-family: ${({ theme }) => theme.fontFamilies.grotesk};
  font-weight: ${({ theme }) => theme.fontWeightBold};
  font-size: 1rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.black};
`;

const StyledInput = styled.input`
  font-family: ${({ theme }) => theme.fontFamilies.mono};
  font-size: 1.1rem;
  font-weight: ${({ theme }) => theme.fontWeightBold};
  color: ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) => theme.borderWidth} solid ${({ theme }) => theme.colors.black};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  outline: none;
  box-shadow: none;
  transition: none;
  min-height: 44px;
  &:focus {
    border-color: ${({ theme }) => theme.colors.accentBlue};
  }
  &:disabled {
    background: ${({ theme }) => theme.colors.gray200};
    color: ${({ theme }) => theme.colors.gray400};
    cursor: not-allowed;
  }
`;

const Error = styled.span`
  color: ${({ theme }) => theme.colors.accentRed};
  font-size: 0.95rem;
  font-family: ${({ theme }) => theme.fontFamilies.mono};
  font-weight: ${({ theme }) => theme.fontWeightBold};
`;

export const Input: React.FC<InputProps> = ({ label, error, id, ...rest }) => (
  <Wrapper>
    {label && <Label htmlFor={id}>{label}</Label>}
    <StyledInput id={id} {...rest} />
    {error && <Error>{error}</Error>}
  </Wrapper>
); 