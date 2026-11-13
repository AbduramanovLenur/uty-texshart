import { Button, Switch, type TableProps } from 'antd';
import { useTranslation } from 'react-i18next';

import { MtuFilterKeys } from '../../model/constants/mtu-filter-keys';
import type { IMtu } from '../../model/types/mtu';
import type { TMtuFilterKey } from '../../model/types/mtu-filter';
import { mockMtus } from '../../model/mock';

import type { TTableFilterState } from '@shared/types';

import styles from './mtu-table.module.scss';

export const useGetColumns = (
  filters: TTableFilterState<TMtuFilterKey>,
  onStatusChange: (id: number, checked: boolean) => void,
): TableProps<IMtu>['columns'] => {
  const { t } = useTranslation();

  return [
    {
      title: t('headers.mtuId'),
      key: MtuFilterKeys.ID,
      width: 135,
      render: (_, record) => record.id,
      filteredValue: filters.id,
      filters: mockMtus.map((item) => ({
        text: String(item.id),
        value: item.id,
      })),
      filterSearch: true,
      onFilter: (value, record) => String(record.id) === String(value),
    },
    {
      title: t('headers.mtuName'),
      key: MtuFilterKeys.NAME,
      minWidth: 595,
      render: (_, record) => record.name,
      filteredValue: filters.name,
      filters: mockMtus.map((item) => ({
        text: item.name,
        value: item.name,
      })),
      filterSearch: true,
      onFilter: (value, record) =>
        record.name.toLowerCase().includes(String(value).toLowerCase()),
    },
    {
      title: '',
      key: 'actions',
      width: 200,
      render: () => (
        <Button className={styles['mtu-table__edit']} type='link'>
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
          defaultChecked={record.isActive}
          onChange={(checked) => onStatusChange(record.id, checked)}
        />
      ),
    },
  ];
};
