import React from 'react';
import styled, { css, DefaultTheme } from 'styled-components';

export type ButtonVariant = 'primary' | 'accent' | 'danger' | 'ghost' | 'outline' | 'flat' | 'link';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  withShadow?: boolean;
  sx?: React.CSSProperties;
}

const getVariantStyles = (variant: ButtonVariant = 'primary', theme: DefaultTheme) => {
  if (theme.variants && theme.variants.Button && theme.variants.Button[variant]) {
    return css`${theme.variants.Button[variant]}`;
  }
  switch (variant) {
    case 'accent':
      return css`
        background: ${theme.colors.orange};
        color: ${theme.colors.white};
        border-color: ${theme.colors.orange};
      `;
    case 'danger':
      return css`
        background: ${theme.colors.accentRed};
        color: ${theme.colors.white};
        border-color: ${theme.colors.accentRed};
      `;
    case 'ghost':
      return css`
        background: transparent;
        color: ${theme.colors.brown};
        border-color: ${theme.colors.brown};
      `;
    case 'outline':
      return css`
        background: transparent;
        color: ${theme.colors.brown};
        border-color: ${theme.colors.brown};
      `;
    case 'flat':
      return css`
        background: none;
        color: ${theme.colors.black};
        border: none;
      `;
    case 'link':
      return css`
        background: none;
        color: ${theme.colors.orange};
        border: none;
        text-decoration: underline;
      `;
    case 'primary':
    default:
      return css`
        background: ${theme.colors.brown};
        color: ${theme.colors.white};
        border-color: ${theme.colors.brown};
      `;
  }
};

const StyledButton = styled.button<{
  $variant: ButtonVariant;
  $size: string;
  $fullWidth?: boolean;
  $withShadow?: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ $size }) =>
    $size === 'sm' ? '8px' : $size === 'lg' ? '24px' : '16px'};
  font-family: ${({ theme }) => theme.fontFamilies.grotesk};
  font-weight: ${({ theme }) => theme.fontWeightBold};
  font-size: ${({ $size }) =>
    $size === 'sm' ? '1.1rem' : $size === 'lg' ? '1.7rem' : '1.35rem'};
  height: ${({ $size }) =>
    $size === 'sm' ? '40px' : $size === 'lg' ? '96px' : '72px'};
  padding: 0 ${({ $size }) =>
    $size === 'sm' ? '24px' : $size === 'lg' ? '48px' : '45px'};
  border: ${({ theme }) => theme.borderWidth} solid;
  border-radius: ${({ theme }) => theme.borderRadius};
  letter-spacing: 0.04em;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  ${({ $variant, theme }) => getVariantStyles($variant, theme)}
  box-shadow: ${({ $withShadow }) => $withShadow !== false ? '4px 4px 0 #353C42' : 'none'};
  transition: box-shadow 0.15s, background 0.15s, color 0.15s, border-color 0.15s, transform 0.1s;
  &:hover {
    box-shadow: ${({ $withShadow }) => $withShadow !== false ? '8px 8px 0 #353C42' : 'none'};
    transform: ${({ $withShadow }) => $withShadow !== false ? 'translate(-2px, -2px)' : 'none'};
    filter: none;
    opacity: 0.95;
  }
  &:active {
    box-shadow: ${({ $withShadow }) => $withShadow !== false ? '2px 2px 0 #353C42' : 'none'};
    transform: none;
    filter: none;
    opacity: 0.92;
  }
  &:disabled {
    background: ${({ theme }) => theme.colors.blueGray};
    color: ${({ theme }) => theme.colors.darkGray};
    border-color: ${({ theme }) => theme.colors.blueGray};
    cursor: not-allowed;
    opacity: 0.7;
  }
  ${({ theme }) => ((theme.overrides as Record<string, unknown>)?.Button) ? (theme.overrides as Record<string, unknown>).Button : ''}
`;

const IconWrap = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth,
  iconLeft,
  iconRight,
  withShadow = true,
  sx,
  ...rest
}) => (
  <StyledButton
    $variant={variant}
    $size={size}
    $fullWidth={fullWidth}
    $withShadow={withShadow}
    style={sx}
    {...rest}
  >
    {iconLeft && <IconWrap>{iconLeft}</IconWrap>}
    {children}
    {iconRight && <IconWrap>{iconRight}</IconWrap>}
  </StyledButton>
); 