import React from 'react';
import styled from 'styled-components';

export interface CardProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
}

const CardRoot = styled.div`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  border: ${({ theme }) => theme.borderWidth} solid ${({ theme }) => theme.colors.black};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  min-width: 320px;
  max-width: 100%;
  box-shadow: none;
`;

const CardTitle = styled.div`
  font-family: ${({ theme }) => theme.fontFamilies.grotesk};
  font-size: 1.5rem;
  font-weight: ${({ theme }) => theme.fontWeightBold};
  text-transform: uppercase;
`;

const CardSubtitle = styled.div`
  font-family: ${({ theme }) => theme.fontFamilies.mono};
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.gray400};
  font-weight: ${({ theme }) => theme.fontWeightBold};
`;

const CardContent = styled.div`
  font-family: ${({ theme }) => theme.fontFamilies.grotesk};
  font-size: 1.1rem;
  font-weight: 500;
`;

const CardActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

export const Card: React.FC<CardProps> = ({ title, subtitle, children, actions, className }) => (
  <CardRoot className={className}>
    {title && <CardTitle>{title}</CardTitle>}
    {subtitle && <CardSubtitle>{subtitle}</CardSubtitle>}
    <CardContent>{children}</CardContent>
    {actions && <CardActions>{actions}</CardActions>}
  </CardRoot>
); 