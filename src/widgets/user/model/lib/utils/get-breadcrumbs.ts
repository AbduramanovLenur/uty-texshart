import type { BreadcrumbProps } from 'antd';
import type { TFunction } from 'i18next';

export const getBreadcrumbs = (t: TFunction): BreadcrumbProps['items'] => [
  {
    title: t('users.breadcrumbs.users'),
  },
  {
    title: t('users.breadcrumbs.userDetails'),
  },
];
