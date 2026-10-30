import type { BreadcrumbProps } from 'antd';
import type { TFunction } from 'i18next';

export const getBreadcrumbs = (t: TFunction): BreadcrumbProps['items'] => [
  {
    title: t('userApplication.breadcrumbs.applications'),
  },
  {
    title: t('userApplication.breadcrumbs.details'),
  },
];
