import React from 'react';
import styled, { css } from 'styled-components';

export type TypographyAs = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';

interface TypographyProps {
  as?: TypographyAs;
  children: React.ReactNode;
  className?: string;
  sx?: React.CSSProperties;
  variant?: string;
}

const TitleStyled = styled.h1<{ $variant?: string }>`
  font-family: ${({ theme }) => theme.fontFamilies.grotesk};
  font-size: 3.2rem;
  font-weight: ${({ theme }) => theme.fontWeightBold};
  line-height: 1.1;
  color: ${({ theme }) => theme.colors.brown};
  margin: 0;
  ${({ theme }) => ((theme.overrides as any)?.Title) ? (theme.overrides as any).Title : ''}
  ${({ theme, $variant }) => (theme.variants && theme.variants.Title && $variant && theme.variants.Title[$variant]) ? theme.variants.Title[$variant] : ''}
`;

const SubtitleStyled = styled.h2<{ $variant?: string }>`
  font-family: ${({ theme }) => theme.fontFamilies.grotesk};
  font-size: 2rem;
  font-weight: ${({ theme }) => theme.fontWeightBold};
  line-height: 1.15;
  color: ${({ theme }) => theme.colors.orange};
  margin: 0;
  ${({ theme }) => ((theme.overrides as any)?.Subtitle) ? (theme.overrides as any).Subtitle : ''}
  ${({ theme, $variant }) => (theme.variants && theme.variants.Subtitle && $variant && theme.variants.Subtitle[$variant]) ? theme.variants.Subtitle[$variant] : ''}
`;

const TextStyled = styled.p<{ $size?: 'md' | 'lg'; $variant?: string }>`
  font-family: ${({ theme }) => theme.fontFamilies.grotesk};
  font-size: ${({ $size }) => ($size === 'lg' ? '1.5rem' : '1.1rem')};
  font-weight: 500;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.black};
  margin: 0;
  ${({ theme }) => ((theme.overrides as any)?.Text) ? (theme.overrides as any).Text : ''}
  ${({ theme, $variant }) => (theme.variants && theme.variants.Text && $variant && theme.variants.Text[$variant]) ? theme.variants.Text[$variant] : ''}
`;

const CaptionStyled = styled.span<{ $variant?: string }>`
  font-family: ${({ theme }) => theme.fontFamilies.mono};
  font-size: 0.95rem;
  font-weight: 700;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.darkGray};
  ${({ theme }) => ((theme.overrides as any)?.Caption) ? (theme.overrides as any).Caption : ''}
  ${({ theme, $variant }) => (theme.variants && theme.variants.Caption && $variant && theme.variants.Caption[$variant]) ? theme.variants.Caption[$variant] : ''}
`;

export const Title: React.FC<TypographyProps> = ({ as = 'h1', children, className, sx, variant }) => (
  <TitleStyled as={as} className={className} style={sx} $variant={variant}>{children}</TitleStyled>
);

export const Subtitle: React.FC<TypographyProps> = ({ as = 'h2', children, className, sx, variant }) => (
  <SubtitleStyled as={as} className={className} style={sx} $variant={variant}>{children}</SubtitleStyled>
);

export const Text: React.FC<TypographyProps & { size?: 'md' | 'lg' }> = ({ as = 'p', size = 'md', children, className, sx, variant }) => (
  <TextStyled as={as} $size={size} className={className} style={sx} $variant={variant}>{children}</TextStyled>
);

export const Caption: React.FC<TypographyProps> = ({ as = 'span', children, className, sx, variant }) => (
  <CaptionStyled as={as} className={className} style={sx} $variant={variant}>{children}</CaptionStyled>
); 