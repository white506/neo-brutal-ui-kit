import React from 'react';
import styled, { css } from 'styled-components';

export type AvatarAccent = 'orange' | 'blue' | 'red';
export type AvatarSize = 'md' | 'lg';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  initials?: string;
  accent?: AvatarAccent;
  size?: AvatarSize;
  className?: string;
  withShadow?: boolean;
  sx?: React.CSSProperties;
}

const accentColor = (accent: AvatarAccent | undefined, theme: any) => {
  switch (accent) {
    case 'orange': return theme.colors.orange;
    case 'blue': return theme.colors.blueGray;
    case 'red': return theme.colors.accentRed;
    default: return theme.colors.brown;
  }
};

const sizeMap = {
  md: 64,
  lg: 96,
};

const shadow = '2px 2px 0 #353C42';

const AvatarRoot = styled.div<{ $size: 'md' | 'lg'; $accent?: AvatarAccent; $withShadow?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ $size }) => sizeMap[$size]}px;
  height: ${({ $size }) => sizeMap[$size]}px;
  min-width: ${({ $size }) => sizeMap[$size]}px;
  min-height: ${({ $size }) => sizeMap[$size]}px;
  background: ${({ theme }) => theme.colors.beige};
  border: ${({ theme, $accent }) => theme.borderWidth} solid ${({ theme, $accent }) => accentColor($accent, theme)};
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  font-family: ${({ theme }) => theme.fontFamilies.grotesk};
  font-size: ${({ $size }) => ($size === 'lg' ? '2.5rem' : '1.7rem')};
  font-weight: ${({ theme }) => theme.fontWeightBold};
  color: ${({ theme, $accent }) => accentColor($accent, theme)};
  user-select: none;
  box-shadow: ${({ $withShadow }) => $withShadow !== false ? shadow : 'none'};
  transition: box-shadow 0.15s, transform 0.12s;
  &:hover {
    box-shadow: ${({ $withShadow }) => $withShadow !== false ? '4px 4px 0 #353C42' : 'none'};
    transform: ${({ $withShadow }) => $withShadow !== false ? 'translate(-1px, -1px)' : 'none'};
  }
  ${({ theme }) => ((theme.overrides as any)?.Avatar) ? (theme.overrides as any).Avatar : ''}
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const Avatar: React.FC<AvatarProps> = ({ src, alt, initials, accent, size = 'md', className, withShadow = true, sx, ...props }) => (
  <AvatarRoot $accent={accent as AvatarAccent} $size={size} className={className} $withShadow={withShadow} style={sx} {...props}>
    {src ? <Img src={src} alt={alt || 'avatar'} /> : (initials || '?')}
  </AvatarRoot>
); 