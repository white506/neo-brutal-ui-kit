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
  withShadow?: boolean;
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

const shadow = '4px 4px 0 #353C42';

const StyledButton = styled.button<{ $variant: string; $size: string; $fullWidth?: boolean; $withShadow?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fontFamilies.grotesk};
  font-weight: ${({ theme }) => theme.fontWeightBold};
  text-transform: uppercase;
  border: ${({ theme }) => theme.borderWidth} solid;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: box-shadow 0.15s, background 0.15s, color 0.15s, border-color 0.15s, transform 0.1s;
  outline: none;
  box-shadow: ${({ $withShadow }) => $withShadow !== false ? shadow : 'none'};
  letter-spacing: 0.04em;
  ${({ size = 'md' }) => sizeStyles[size]}
  ${({ variant = 'primary', theme }) => getVariantStyles(variant, theme)}
  ${({ fullWidth }) => fullWidth && css`width: 100%;`}
  &:hover {
    box-shadow: ${({ $withShadow }) => $withShadow !== false ? '8px 8px 0 #353C42' : 'none'};
    transform: ${({ $withShadow }) => $withShadow !== false ? 'translate(-2px, -2px)' : 'none'};
  }
  &:active {
    box-shadow: ${({ $withShadow }) => $withShadow !== false ? '2px 2px 0 #353C42' : 'none'};
    transform: none;
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

export const Button: React.FC<ButtonProps> = ({ withShadow = true, ...props }) => (
  <StyledButton $withShadow={withShadow} {...props} />
); 