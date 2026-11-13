import { Button, Switch, type TableProps } from 'antd';
import { useTranslation } from 'react-i18next';

import { CompanyFilterKeys } from '../../model/constants/company-filter-keys';
import type { ICompany } from '../../model/types/company';
import type { TCompanyFilterKey } from '../../model/types/company-filter';
import { mockCompanies } from '../../model/mock';

import type { TTableFilterState } from '@shared/types';

import styles from './companies-table.module.scss';

export const useGetColumns = (
  filters: TTableFilterState<TCompanyFilterKey>,
  onStatusChange: (id: number, checked: boolean) => void,
): TableProps<ICompany>['columns'] => {
  const { t } = useTranslation();

  const idFilters = Array.from(new Set(mockCompanies.map((c) => c.id))).map((id) => ({
    text: String(id),
    value: id,
  }));

  const typeFilters = Array.from(new Set(mockCompanies.map((c) => c.type))).map((type) => ({
    text: type,
    value: type,
  }));

  const nameFilters = Array.from(new Set(mockCompanies.map((c) => c.name))).map((name) => ({
    text: name,
    value: name,
  }));

  const kmPkFilters = Array.from(new Set(mockCompanies.map((c) => c.kmPk))).map((kmPk) => ({
    text: kmPk,
    value: kmPk,
  }));

  const mtuNameFilters = Array.from(new Set(mockCompanies.map((c) => c.mtuName))).map((mtuName) => ({
    text: mtuName,
    value: mtuName,
  }));

  return [
    {
      title: t('headers.companyId'),
      key: CompanyFilterKeys.ID,
      width: 140,
      render: (_, record) => record.id,
      filteredValue: filters.id,
      filters: idFilters,
      filterSearch: true,
      onFilter: (value, record) => String(record.id) === String(value),
    },
    {
      title: t('headers.companyType'),
      key: CompanyFilterKeys.TYPE,
      width: 150,
      render: (_, record) => record.type,
      filteredValue: filters.type,
      filters: typeFilters,
      filterSearch: true,
      onFilter: (value, record) => record.type === value,
    },
    {
      title: t('headers.companyName'),
      key: CompanyFilterKeys.NAME,
      minWidth: 225,
      render: (_, record) => record.name,
      filteredValue: filters.name,
      filters: nameFilters,
      filterSearch: true,
      onFilter: (value, record) =>
        record.name.toLowerCase().includes(String(value).toLowerCase()),
    },
    {
      title: t('headers.kmPk'),
      key: CompanyFilterKeys.KM_PK,
      width: 120,
      render: (_, record) => record.kmPk,
      filteredValue: filters.kmPk,
      filters: kmPkFilters,
      filterSearch: true,
      onFilter: (value, record) => record.kmPk === value,
    },
    {
      title: t('headers.mtuName'),
      key: CompanyFilterKeys.MTU_NAME,
      width: 225,
      render: (_, record) => record.mtuName,
      filteredValue: filters.mtuName,
      filters: mtuNameFilters,
      filterSearch: true,
      onFilter: (value, record) => record.mtuName === value,
    },
    {
      title: '',
      key: 'actions',
      width: 95,
      render: () => (
        <Button className={styles['companies-table__edit']} type='link'>
          {t('actions.edit')}
        </Button>
      ),
    },
    {
      title: t('headers.status'),
      key: 'status',
      width: 95,
      render: (_, record) => (
        <Switch
          checked={record.isActive}
          onChange={(checked) => onStatusChange(record.id, checked)}
        />
      ),
    },
  ];
};
