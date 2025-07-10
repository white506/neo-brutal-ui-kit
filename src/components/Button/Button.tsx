import React from 'react';
import styled, { css } from 'styled-components';

export type ButtonVariant = 'primary' | 'accent' | 'danger' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

const sizeStyles = {
  sm: css`
    font-size: 1rem;
    padding: 12px 24px;
    min-height: 40px;
    min-width: 80px;
    gap: 8px;
  `,
  md: css`
    font-size: 1.35rem;
    padding: 20px 48px;
    min-height: 72px;
    min-width: 200px;
    gap: 16px;
  `,
  lg: css`
    font-size: 2rem;
    padding: 32px 64px;
    min-height: 96px;
    min-width: 280px;
    gap: 24px;
  `,
};

const getVariantStyles = (variant: ButtonVariant = 'primary', theme: any) => {
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
    case 'primary':
    default:
      return css`
        background: ${theme.colors.brown};
        color: ${theme.colors.white};
        border-color: ${theme.colors.brown};
      `;
  }
};

const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fontFamilies.grotesk};
  font-weight: ${({ theme }) => theme.fontWeightBold};
  text-transform: uppercase;
  border: ${({ theme }) => theme.borderWidth} solid;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: none;
  outline: none;
  box-shadow: none;
  letter-spacing: 0.04em;
  ${({ size = 'md' }) => sizeStyles[size]}
  ${({ variant = 'primary', theme }) => getVariantStyles(variant, theme)}
  ${({ fullWidth }) => fullWidth && css`width: 100%;`}
  &:active {
    filter: brightness(0.85);
  }
  &:disabled {
    background: ${({ theme }) => theme.colors.blueGray};
    color: ${({ theme }) => theme.colors.white};
    opacity: 0.5;
    cursor: not-allowed;
  }
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
  ...rest
}) => (
  <StyledButton variant={variant} size={size} fullWidth={fullWidth} {...rest}>
    {iconLeft && <IconWrap>{iconLeft}</IconWrap>}
    {children}
    {iconRight && <IconWrap>{iconRight}</IconWrap>}
  </StyledButton>
); 