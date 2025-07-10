import React from 'react';
import { SearchIcon } from './search';
import { CloseIcon } from './close';
import { UserIcon } from './user';

const icons = {
  search: SearchIcon,
  close: CloseIcon,
  user: UserIcon,
};

export type IconName = keyof typeof icons;

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number | string;
  color?: string;
}

export const Icon: React.FC<IconProps> = ({ name, size = 24, color = 'currentColor', ...rest }) => {
  const Component = icons[name];
  if (!Component) return null;
  return <Component width={size} height={size} stroke={color} {...rest} />;
}; 