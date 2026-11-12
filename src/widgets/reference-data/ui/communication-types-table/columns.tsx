import { Button, Switch, type TableProps } from 'antd';
import { useTranslation } from 'react-i18next';

import { CommunicationTypeFilterKeys } from '../../model/constants/communication-type-filter-keys';
import type { ICommunicationType } from '../../model/types/communication-type';
import type { TCommunicationTypeTableFilters } from '../../model/types/communication-type-filters';

import styles from './communication-types-table.module.scss';

export const useGetColumns = (
  filters: TCommunicationTypeTableFilters,
  onStatusChange: (id: number, checked: boolean) => void,
): TableProps<ICommunicationType>['columns'] => {
  const { t } = useTranslation();

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
          onChange={(checked) => onStatusChange(record.id, checked)}
        />
      ),
    },
  ];
};
