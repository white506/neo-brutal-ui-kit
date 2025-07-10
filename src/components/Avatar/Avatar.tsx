import React from 'react';
import styled, { css } from 'styled-components';

export type AvatarAccent = 'orange' | 'blue' | 'red';
export type AvatarSize = 'md' | 'lg';

export interface AvatarProps {
  src?: string;
  alt?: string;
  initials?: string;
  accent?: AvatarAccent;
  size?: AvatarSize;
  className?: string;
}

const accentColor = (accent: AvatarAccent | undefined, theme: any) => {
  switch (accent) {
    case 'orange': return theme.colors.accentOrange;
    case 'blue': return theme.colors.accentBlue;
    case 'red': return theme.colors.accentRed;
    default: return theme.colors.black;
  }
};

const sizeMap = {
  md: 64,
  lg: 96,
};

const Root = styled.div<{ $accent?: AvatarAccent; $size: AvatarSize }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ $size }) => sizeMap[$size]}px;
  height: ${({ $size }) => sizeMap[$size]}px;
  min-width: ${({ $size }) => sizeMap[$size]}px;
  min-height: ${({ $size }) => sizeMap[$size]}px;
  background: ${({ theme }) => theme.colors.white};
  border: ${({ theme, $accent }) => theme.borderWidth} solid ${({ theme, $accent }) => accentColor($accent, theme)};
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  font-family: ${({ theme }) => theme.fontFamilies.grotesk};
  font-size: ${({ $size }) => ($size === 'lg' ? '2.5rem' : '1.7rem')};
  font-weight: ${({ theme }) => theme.fontWeightBold};
  color: ${({ theme, $accent }) => accentColor($accent, theme)};
  user-select: none;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const Avatar: React.FC<AvatarProps> = ({ src, alt, initials, accent, size = 'md', className }) => (
  <Root $accent={accent} $size={size} className={className}>
    {src ? <Img src={src} alt={alt || 'avatar'} /> : (initials || '?')}
  </Root>
); 