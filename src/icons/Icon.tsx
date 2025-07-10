import React from 'react';
import { SearchIcon } from './search';
import { CloseIcon } from './close';
import { UserIcon } from './user';
import { ArrowLeftIcon } from './arrow-left';
import { ArrowRightIcon } from './arrow-right';
import { ArrowUpIcon } from './arrow-up';
import { ArrowDownIcon } from './arrow-down';
import { CheckIcon } from './check';
import { WarningIcon } from './warning';
import { InfoIcon } from './info';
import { PlusIcon } from './plus';
import { MinusIcon } from './minus';
import { EditIcon } from './edit';
import { TrashIcon } from './trash';
import { BellIcon } from './bell';
import { EyeIcon } from './eye';
import { LockIcon } from './lock';
import { UnlockIcon } from './unlock';
import { CalendarIcon } from './calendar';
import { PlayIcon } from './play';
import { PauseIcon } from './pause';
import { UploadIcon } from './upload';
import { DownloadIcon } from './download';
import { BookmarkIcon } from './bookmark';
import { FilterIcon } from './filter';
import { RefreshIcon } from './refresh';
import { DocumentIcon } from './document';

export const icons = {
  search: SearchIcon,
  close: CloseIcon,
  user: UserIcon,
  'arrow-left': ArrowLeftIcon,
  'arrow-right': ArrowRightIcon,
  'arrow-up': ArrowUpIcon,
  'arrow-down': ArrowDownIcon,
  check: CheckIcon,
  warning: WarningIcon,
  info: InfoIcon,
  plus: PlusIcon,
  minus: MinusIcon,
  edit: EditIcon,
  trash: TrashIcon,
  bell: BellIcon,
  eye: EyeIcon,
  lock: LockIcon,
  unlock: UnlockIcon,
  calendar: CalendarIcon,
  play: PlayIcon,
  pause: PauseIcon,
  upload: UploadIcon,
  download: DownloadIcon,
  bookmark: BookmarkIcon,
  filter: FilterIcon,
  refresh: RefreshIcon,
  document: DocumentIcon,
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