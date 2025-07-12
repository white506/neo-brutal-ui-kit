import React from 'react';
import styled, { DefaultTheme } from 'styled-components';

export type CheckboxAccent = 'orange' | 'blue' | 'red';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  accent?: CheckboxAccent;
  withShadow?: boolean;
  sx?: React.CSSProperties;
  variant?: string;
}

const accentColor = (accent: CheckboxAccent | undefined, theme: DefaultTheme) => {
  switch (accent) {
    case 'orange': return theme.colors.orange;
    case 'blue': return theme.colors.blueGray;
    case 'red': return theme.colors.accentRed;
    default: return theme.colors.brown;
  }
};

const shadow = '2px 2px 0 #353C42';

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

const Box = styled.span<{ $checked?: boolean; $disabled?: boolean; $accent?: CheckboxAccent; $withShadow?: boolean; $error?: boolean; $variant?: string }>`
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
  background: ${({ theme, $disabled }) => $disabled ? theme.colors.blueGray : theme.colors.beige};
  transition: box-shadow 0.15s, border-color 0.15s, background 0.15s, color 0.15s, transform 0.12s;
  box-shadow: ${({ $withShadow }) => $withShadow !== false ? shadow : 'none'};
  &:hover {
    box-shadow: ${({ $withShadow }) => $withShadow !== false ? '4px 4px 0 #353C42' : 'none'};
    transform: ${({ $withShadow }) => $withShadow !== false ? 'translate(-1px, -1px)' : 'none'};
  }
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  ${({ theme }) => ((theme.overrides as Record<string, unknown>)?.Checkbox) ? (theme.overrides as Record<string, unknown>).Checkbox : ''}
  ${({ theme, $variant }) => (theme.variants && theme.variants.Checkbox && $variant && theme.variants.Checkbox[$variant]) ? theme.variants.Checkbox[$variant] : ''}
`;

const HiddenInput = styled.input`
  display: none;
`;

const CheckMark = styled.svg<{ $checked: boolean; $accent?: CheckboxAccent; $disabled?: boolean }>`
  display: ${({ $checked }) => ($checked ? 'block' : 'none')};
  width: 24px;
  height: 24px;
  stroke: ${({ theme, $accent, $disabled }) =>
    $disabled ? theme.colors.darkGray : accentColor($accent, theme)};
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

export const Checkbox: React.FC<CheckboxProps> = ({ label, error, accent, disabled, checked, withShadow = true, sx, variant, ...rest }) => (
  <Wrapper>
    <Box $checked={!!checked} $accent={accent as CheckboxAccent} $error={!!error} $disabled={disabled} $withShadow={withShadow} $variant={variant} style={sx}>
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