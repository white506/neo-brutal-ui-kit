import React from 'react';
import styled, { css } from 'styled-components';

export type TypographyAs = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';

interface TypographyProps {
  as?: TypographyAs;
  children: React.ReactNode;
  className?: string;
  sx?: React.CSSProperties;
}

const TitleStyled = styled.h1`
  font-family: ${({ theme }) => theme.fontFamilies.grotesk};
  font-size: 3.2rem;
  font-weight: ${({ theme }) => theme.fontWeightBold};
  line-height: 1.1;
  color: ${({ theme }) => theme.colors.brown};
  margin: 0;
  ${({ theme }) => ((theme.overrides as any)?.Title) ? (theme.overrides as any).Title : ''}
`;

const SubtitleStyled = styled.h2`
  font-family: ${({ theme }) => theme.fontFamilies.grotesk};
  font-size: 2rem;
  font-weight: ${({ theme }) => theme.fontWeightBold};
  line-height: 1.15;
  color: ${({ theme }) => theme.colors.orange};
  margin: 0;
  ${({ theme }) => ((theme.overrides as any)?.Subtitle) ? (theme.overrides as any).Subtitle : ''}
`;

const TextStyled = styled.p<{ $size?: 'md' | 'lg' }>`
  font-family: ${({ theme }) => theme.fontFamilies.grotesk};
  font-size: ${({ $size }) => ($size === 'lg' ? '1.5rem' : '1.1rem')};
  font-weight: 500;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.black};
  margin: 0;
  ${({ theme }) => ((theme.overrides as any)?.Text) ? (theme.overrides as any).Text : ''}
`;

const CaptionStyled = styled.span`
  font-family: ${({ theme }) => theme.fontFamilies.mono};
  font-size: 0.95rem;
  font-weight: 700;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.darkGray};
  ${({ theme }) => ((theme.overrides as any)?.Caption) ? (theme.overrides as any).Caption : ''}
`;

export const Title: React.FC<TypographyProps> = ({ as = 'h1', children, className, sx }) => (
  <TitleStyled as={as} className={className} style={sx}>{children}</TitleStyled>
);

export const Subtitle: React.FC<TypographyProps> = ({ as = 'h2', children, className, sx }) => (
  <SubtitleStyled as={as} className={className} style={sx}>{children}</SubtitleStyled>
);

export const Text: React.FC<TypographyProps & { size?: 'md' | 'lg' }> = ({ as = 'p', size = 'md', children, className, sx }) => (
  <TextStyled as={as} $size={size} className={className} style={sx}>{children}</TextStyled>
);

export const Caption: React.FC<TypographyProps> = ({ as = 'span', children, className, sx }) => (
  <CaptionStyled as={as} className={className} style={sx}>{children}</CaptionStyled>
); 