import { Button, Switch, type TableProps } from 'antd';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { MtuFilterKeys } from '../../model/constants/mtu-filter-keys';
import type { IMtu } from '../../model/types/mtu';
import type { TMtuFilterKey } from '../../model/types/mtu-filter';
import { mockMtus } from '../../model/mock';

import { MtuAndCompaniesTypes, open as openMtuAndCompaniesModal } from '@features/mtu-and-companies-modal';

import type { TTableFilterState } from '@shared/types';

import styles from './mtu-table.module.scss';

export const useGetColumns = (filters: TTableFilterState<TMtuFilterKey>): TableProps<IMtu>['columns'] => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleEdit = (id: number) => {
    dispatch(openMtuAndCompaniesModal({ type: MtuAndCompaniesTypes.MTU, id }));
  };

  const handleStatusChange = (id: number, checked: boolean) => {
    console.log(id, checked);
  };

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
    },
    {
      title: '',
      key: 'actions',
      width: 200,
      render: (_, record) => (
        <Button
          className={styles['mtu-table__edit']}
          type='link'
          onClick={() => handleEdit(record.id)}
        >
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
          onChange={(checked) => handleStatusChange(record.id, checked)}
        />
      ),
    },
  ];
};
