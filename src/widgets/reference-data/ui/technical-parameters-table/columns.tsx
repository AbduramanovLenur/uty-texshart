import { Button, Switch, type TableProps } from 'antd';
import { useTranslation } from 'react-i18next';

import { TechnicalParameterFilterKeys } from '../../model/constants/technical-parameter-filter-keys';
import type { ITechnicalParameter } from '../../model/types/technical-parameter';
import type { TTechnicalParameterFilterKey } from '../../model/types/technical-parameter-filters';

import type { TTableFilterState } from '@shared/types';

import styles from './technical-parameters-table.module.scss';

export const useGetColumns = (
  filters: TTableFilterState<TTechnicalParameterFilterKey>,
  onStatusChange: (id: number, checked: boolean) => void,
): TableProps<ITechnicalParameter>['columns'] => {
  const { t } = useTranslation();

  return [
    {
      title: t('headers.technicalParameter'),
      key: TechnicalParameterFilterKeys.TECHNICAL_PARAMETER,
      minWidth: 260,
      render: (_, record) => record.technicalParameter,
      filteredValue: filters.technicalParameter,
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
      title: t('headers.crossingMethods'),
      key: TechnicalParameterFilterKeys.CROSSING_METHODS,
      width: 235,
      render: (_, record) => record.crossingMethod,
      filteredValue: filters.crossingMethods,
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
      key: TechnicalParameterFilterKeys.COMMUNICATION_TYPE,
      width: 235,
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
        <Button className={styles['technical-parameters-table__edit']} type='link'>
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
