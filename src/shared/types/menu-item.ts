import type { MenuItemType } from 'antd/es/menu/interface';

import type { Role } from './role';

export type TMenuItem = MenuItemType & {
  roles?: Role[];
};
