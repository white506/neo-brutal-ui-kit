import React from 'react';
import styled from 'styled-components';
import { concreteTexture } from '../../theme/concreteTexture';

export interface CardProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
  background?: 'concrete';
  withShadow?: boolean;
  sx?: React.CSSProperties;
  variant?: string;
  // остальные пропсы div
  [key: string]: unknown;
}

const shadow = '6px 6px 0 #353C42';

const StyledCard = styled.div<{ $background?: 'concrete', $withShadow?: boolean; $variant?: string }>`
  ${({ theme, $variant }) => (theme.variants && theme.variants.Card && $variant && theme.variants.Card[$variant]) ? theme.variants.Card[$variant] : ''}
  ${({ theme }) => ((theme.overrides as Record<string, unknown>)?.Card) ? (theme.overrides as Record<string, unknown>).Card : ''}
  background-color: ${({ theme }) => theme.colors.beige};
  background-image: ${({ $background }) => $background === 'concrete' ? concreteTexture : 'none'};
  background-repeat: repeat;
  color: ${({ theme }) => theme.colors.black};
  border: ${({ theme }) => theme.borderWidth} solid ${({ theme }) => theme.colors.brown};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 48px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  min-width: 480px;
  max-width: 100%;
  box-shadow: ${({ $withShadow }) => $withShadow !== false ? shadow : 'none'};
  transition: box-shadow 0.18s, transform 0.12s;
  &:hover {
    box-shadow: ${({ $withShadow }) => $withShadow !== false ? '12px 12px 0 #353C42' : 'none'};
    transform: ${({ $withShadow }) => $withShadow !== false ? 'translate(-3px, -3px)' : 'none'};
  }
  background-blend-mode: multiply;
  opacity: 0.98;
`;

const CardTitle = styled.div`
  font-family: ${({ theme }) => theme.fontFamilies.grotesk};
  font-size: 2.5rem;
  font-weight: ${({ theme }) => theme.fontWeightBold};
  text-transform: uppercase;
`;

const CardSubtitle = styled.div`
  font-family: ${({ theme }) => theme.fontFamilies.mono};
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.blueGray};
  font-weight: ${({ theme }) => theme.fontWeightBold};
`;

const CardContent = styled.div`
  font-family: ${({ theme }) => theme.fontFamilies.grotesk};
  font-size: 1.1rem;
  font-weight: 500;
`;

const CardActions = styled.div`
  display: flex;
  gap: 32px;
  margin-top: 40px;
  border-top: ${({ theme }) => theme.borderWidth} solid ${({ theme }) => theme.colors.brown};
  padding-top: 24px;
  margin-left: -48px;
  margin-right: -48px;
  padding-left: 48px;
  padding-right: 48px;
  background: ${({ theme }) => theme.colors.blueGray};
`;

export const Card: React.FC<CardProps> = ({ title, subtitle, children, actions, className, background, withShadow = true, sx, variant, ...props }) => (
  <StyledCard className={className} $background={background} $withShadow={withShadow} $variant={variant} style={sx} {...props}>
    {title && <CardTitle>{title}</CardTitle>}
    {subtitle && <CardSubtitle>{subtitle}</CardSubtitle>}
    <CardContent>{children}</CardContent>
    {actions && <CardActions>{actions}</CardActions>}
  </StyledCard>
); 