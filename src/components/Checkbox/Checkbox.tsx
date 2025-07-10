import React from 'react';
import styled, { css } from 'styled-components';

export type CheckboxAccent = 'orange' | 'blue' | 'red';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  accent?: CheckboxAccent;
}

const accentColor = (accent: CheckboxAccent | undefined, theme: any) => {
  switch (accent) {
    case 'orange': return theme.colors.accentOrange;
    case 'blue': return theme.colors.accentBlue;
    case 'red': return theme.colors.accentRed;
    default: return theme.colors.black;
  }
};

const Wrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 24px;
  font-family: ${({ theme }) => theme.fontFamilies.grotesk};
  font-size: 1.3rem;
  font-weight: ${({ theme }) => theme.fontWeightBold};
  cursor: pointer;
  user-select: none;
`;

const Box = styled.span<{ $checked: boolean; $accent?: CheckboxAccent; $error?: boolean; $disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  min-width: 36px;
  min-height: 36px;
  border: ${({ theme, $accent, $error }) =>
    $error
      ? `${theme.borderWidth} solid ${theme.colors.accentRed}`
      : `${theme.borderWidth} solid ${accentColor($accent, theme)}`};
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme, $disabled }) => $disabled ? theme.colors.gray200 : theme.colors.white};
  transition: none;
  box-shadow: none;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
`;

const HiddenInput = styled.input`
  display: none;
`;

const CheckMark = styled.svg<{ $checked: boolean; $accent?: CheckboxAccent; $disabled?: boolean }>`
  display: ${({ $checked }) => ($checked ? 'block' : 'none')};
  width: 24px;
  height: 24px;
  stroke: ${({ theme, $accent, $disabled }) =>
    $disabled ? theme.colors.gray400 : accentColor($accent, theme)};
  stroke-width: 4px;
  stroke-linecap: square;
  fill: none;
`;

const Error = styled.span`
  color: ${({ theme }) => theme.colors.accentRed};
  font-size: 1.1rem;
  font-family: ${({ theme }) => theme.fontFamilies.mono};
  font-weight: ${({ theme }) => theme.fontWeightBold};
  margin-left: 12px;
`;

export const Checkbox: React.FC<CheckboxProps> = ({ label, error, accent, disabled, checked, ...rest }) => (
  <Wrapper>
    <Box $checked={!!checked} $accent={accent} $error={!!error} $disabled={disabled}>
      <HiddenInput type="checkbox" checked={checked} disabled={disabled} {...rest} />
      <CheckMark
        $checked={!!checked}
        $accent={accent}
        $disabled={disabled}
        viewBox="0 0 24 24"
      >
        <polyline points="4,12 10,18 20,6" />
      </CheckMark>
    </Box>
    {label}
    {error && <Error>{error}</Error>}
  </Wrapper>
); 