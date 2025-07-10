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
  font-size: 1.5rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.brown};
`;

const StyledInput = styled.input`
  font-family: ${({ theme }) => theme.fontFamilies.mono};
  font-size: 1.35rem;
  font-weight: ${({ theme }) => theme.fontWeightBold};
  color: ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.beige};
  border: ${({ theme }) => theme.borderWidth} solid ${({ theme }) => theme.colors.brown};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 20px 32px;
  outline: none;
  box-shadow: none;
  transition: none;
  min-height: 64px;
  &:focus {
    border-color: ${({ theme }) => theme.colors.orange};
  }
  &:disabled {
    background: ${({ theme }) => theme.colors.blueGray};
    color: ${({ theme }) => theme.colors.darkGray};
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