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
  withShadow?: boolean;
  sx?: React.CSSProperties;
  variant?: string;
}

const accentColor = (accent: SelectAccent | undefined, theme: any) => {
  switch (accent) {
    case 'orange': return theme.colors.orange;
    case 'blue': return theme.colors.blueGray;
    case 'red': return theme.colors.accentRed;
    default: return theme.colors.brown;
  }
};

const shadow = '2px 2px 0 #353C42';

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

const StyledSelect = styled.select<{ $accent?: SelectAccent; $error?: boolean; $withShadow?: boolean; $variant?: string }>`
  ${({ theme, $variant }) => (theme.variants && theme.variants.Select && $variant && theme.variants.Select[$variant]) ? theme.variants.Select[$variant] : ''}
  ${({ theme }) => ((theme.overrides as any)?.Select) ? (theme.overrides as any).Select : ''}
  font-family: 'IBM Plex Mono', 'Space Grotesk', Arial, sans-serif;
  font-size: 1.35rem;
  font-weight: 700;
  color: #18181A;
  background: #F9E2B0;
  border: 2px solid #672725;
  border-radius: 0;
  padding: 20px 56px 20px 32px; /* увеличен правый паддинг для стрелки */
  outline: none;
  box-shadow: ${({ $withShadow }) => $withShadow !== false ? shadow : 'none'};
  transition: box-shadow 0.15s, border-color 0.15s, background 0.15s, color 0.15s;
  min-height: 64px;
  width: 100%;
  appearance: none;
  background-image: url('data:image/svg+xml;utf8,<svg fill="black" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>');
  background-repeat: no-repeat;
  background-position: right 24px center;
  background-size: 24px 24px;
  &:focus {
    border-color: #F56D39;
    box-shadow: ${({ $withShadow }) => $withShadow !== false ? '4px 4px 0 #353C42' : 'none'};
  }
  &:hover {
    box-shadow: ${({ $withShadow }) => $withShadow !== false ? '3px 3px 0 #353C42' : 'none'};
  }
  &:disabled {
    background: #8A9EA5;
    color: #353C42;
    cursor: not-allowed;
  }
  border-color: ${({ $error }) => ($error ? '#F56D39' : '#672725')};

  /* Стилизация option через select (ограниченно поддерживается) */
  & option {
    transition: background 0.22s cubic-bezier(0.4,0,0.2,1), color 0.22s cubic-bezier(0.4,0,0.2,1);
  }
  & option:hover, & option:focus, & option:checked {
    background: #FF6F00 !important;
    color: #fff !important;
  }
`;

const Error = styled.span`
  color: ${({ theme }) => theme.colors.accentRed};
  font-size: 1.1rem;
  font-family: ${({ theme }) => theme.fontFamilies.mono};
  font-weight: ${({ theme }) => theme.fontWeightBold};
`;

export const Select: React.FC<SelectProps> = ({ label, error, accent, options, disabled, withShadow = true, sx, variant, ...rest }) => (
  <Wrapper>
    {label && <Label>{label}</Label>}
    <StyledSelect $accent={accent} $error={!!error} disabled={disabled} $withShadow={withShadow} $variant={variant} style={sx} {...rest}>
      {options.map(opt => (
        <option key={opt.value} value={opt.value}>{opt.label}</option>
      ))}
    </StyledSelect>
    {error && <Error>{error}</Error>}
  </Wrapper>
); 