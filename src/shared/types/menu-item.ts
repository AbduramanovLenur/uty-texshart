import type { MenuItemType } from 'antd/es/menu/interface';

import type { Role } from './role';

export type TMenuItem = MenuItemType & {
  roles?: Role[];
};

export type TMenuGroup = {
  key?: string;
  label?: React.ReactNode;
  items: TMenuItem[];
  roles?: Role[];
};
