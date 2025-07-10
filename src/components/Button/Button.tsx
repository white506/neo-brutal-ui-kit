import React from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../../theme/theme';

export type ButtonVariant = 'primary' | 'accent' | 'danger' | 'ghost';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  fullWidth?: boolean;
}

const getVariantStyles = (variant: ButtonVariant = 'primary') => {
  switch (variant) {
    case 'accent':
      return css`
        background: ${theme.colors.accentOrange};
        color: ${theme.colors.white};
        border-color: ${theme.colors.accentOrange};
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
        color: ${theme.colors.black};
        border-color: ${theme.colors.black};
      `;
    case 'primary':
    default:
      return css`
        background: ${theme.colors.black};
        color: ${theme.colors.white};
        border-color: ${theme.colors.black};
      `;
  }
};

const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${theme.fontFamilies.grotesk};
  font-weight: ${theme.fontWeightBold};
  font-size: 1.1rem;
  text-transform: uppercase;
  border: ${theme.borderWidth} solid;
  border-radius: ${theme.borderRadius};
  padding: ${theme.spacing.xs} ${theme.spacing.md};
  min-height: 48px;
  min-width: 120px;
  cursor: pointer;
  transition: none;
  outline: none;
  box-shadow: none;
  letter-spacing: 0.04em;
  gap: ${theme.spacing.sm};
  ${props => getVariantStyles(props.variant)}
  ${props => props.fullWidth && css`width: 100%;`}
  &:active {
    filter: brightness(0.85);
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', fullWidth, ...rest }) => (
  <StyledButton variant={variant} fullWidth={fullWidth} {...rest}>
    {children}
  </StyledButton>
); 