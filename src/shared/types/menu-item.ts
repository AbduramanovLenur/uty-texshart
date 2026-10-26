import type { MenuProps } from 'antd';

import type { Role } from './role';

export type TMenuItem = NonNullable<MenuProps['items']>[number] & {
  roles?: Role[];
};
