import { Button, Switch, type TableProps } from 'antd';
import { useTranslation } from 'react-i18next';

import { CommunicationTypeFilterKeys } from '../../model/constants/communication-type-filter-keys';
import type { ICommunicationType } from '../../model/types/communication-type';
import type { TCommunicationTypeFilterKey } from '../../model/types/communication-type-filters';

import type { TTableFilterState } from '@shared/types';

import styles from './communication-types-table.module.scss';

export const useGetColumns = (filters: TTableFilterState<TCommunicationTypeFilterKey>): TableProps<ICommunicationType>['columns'] => {
  const { t } = useTranslation();

  const handleStatusChange = (id: number, checked: boolean) => {
    console.log(id, checked);
  };

  return [
    {
      title: t('headers.communicationTypes'),
      key: CommunicationTypeFilterKeys.NAME,
      minWidth: 730,
      render: (_, record) => record.name,
      filteredValue: filters.name,
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
        <Button className={styles['communication-types-table__edit']} type='link'>
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
