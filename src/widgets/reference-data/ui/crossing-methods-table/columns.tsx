import { Button, Switch, type TableProps } from 'antd';
import { useTranslation } from 'react-i18next';

import { CrossingMethodFilterKeys } from '../../model/constants/crossing-method-filter-keys';
import type { ICrossingMethod } from '../../model/types/crossing-method';
import type { TCrossingMethodFilterKey } from '../../model/types/crossing-method-filters';

import type { TTableFilterState } from '@shared/types';

import styles from './crossing-methods-table.module.scss';

export const useGetColumns = (
  filters: TTableFilterState<TCrossingMethodFilterKey>,
  onStatusChange: (id: number, checked: boolean) => void,
): TableProps<ICrossingMethod>['columns'] => {
  const { t } = useTranslation();

  return [
    {
      title: t('headers.crossingMethod'),
      key: CrossingMethodFilterKeys.CROSSING_METHOD,
      minWidth: 365,
      render: (_, record) => record.crossingMethod,
      filteredValue: filters.crossingMethod,
      filters: [
        {
          text: 'Catalog 1',
          value: 'Catalog 1',
        },
        {
          text: 'Catalog 2',
          value: 'Catalog 2',
        },
        {
          text: 'Catalog 3',
          value: 'Catalog 3',
        },
      ],
      filterSearch: true,
    },
    {
      title: t('headers.communicationType'),
      key: CrossingMethodFilterKeys.COMMUNICATION_TYPE,
      minWidth: 365,
      render: (_, record) => record.communicationType,
      filteredValue: filters.communicationType,
      filters: [
        {
          text: 'Catalog 1',
          value: 'Catalog 1',
        },
        {
          text: 'Catalog 2',
          value: 'Catalog 2',
        },
        {
          text: 'Catalog 3',
          value: 'Catalog 3',
        },
      ],
      filterSearch: true,
    },
    {
      title: '',
      key: 'actions',
      width: 200,
      render: () => (
        <Button className={styles['crossing-methods-table__edit']} type='link'>
          {t('actions.edit')}
        </Button>
      ),
    },
    {
      title: t('headers.status'),
      key: 'status',
      width: 120,
      render: (_, record) => (
        <Switch
          checked={record.isActive}
          onChange={(checked) => onStatusChange(record.id, checked)}
        />
      ),
    },
  ];
};
