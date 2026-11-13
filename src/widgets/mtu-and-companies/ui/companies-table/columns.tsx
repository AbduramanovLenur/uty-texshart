import { Button, Switch, type TableProps } from 'antd';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { CompanyFilterKeys } from '../../model/constants/company-filter-keys';
import type { ICompany } from '../../model/types/company';
import type { TCompanyFilterKey } from '../../model/types/company-filter';
import { mockCompanies } from '../../model/mock';

import { MtuAndCompaniesTypes, open as openMtuAndCompaniesModal } from '@features/mtu-and-companies-modal';

import type { TTableFilterState } from '@shared/types';

import styles from './companies-table.module.scss';

export const useGetColumns = (filters: TTableFilterState<TCompanyFilterKey>): TableProps<ICompany>['columns'] => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

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

  const handleEdit = (id: number) => {
    dispatch(openMtuAndCompaniesModal({ type: MtuAndCompaniesTypes.COMPANIES, id }));
  };

  const handleStatusChange = (id: number, checked: boolean) => {
    console.log(id, checked);
  };

  return [
    {
      title: t('headers.companyId'),
      key: CompanyFilterKeys.ID,
      width: 140,
      render: (_, record) => record.id,
      filteredValue: filters.id,
      filters: idFilters,
      filterSearch: true,
    },
    {
      title: t('headers.companyType'),
      key: CompanyFilterKeys.TYPE,
      width: 150,
      render: (_, record) => record.type,
      filteredValue: filters.type,
      filters: typeFilters,
      filterSearch: true,
    },
    {
      title: t('headers.companyName'),
      key: CompanyFilterKeys.NAME,
      minWidth: 225,
      render: (_, record) => record.name,
      filteredValue: filters.name,
      filters: nameFilters,
      filterSearch: true,
    },
    {
      title: t('headers.kmPk'),
      key: CompanyFilterKeys.KM_PK,
      width: 120,
      render: (_, record) => record.kmPk,
      filteredValue: filters.kmPk,
      filters: kmPkFilters,
      filterSearch: true,
    },
    {
      title: t('headers.mtuName'),
      key: CompanyFilterKeys.MTU_NAME,
      width: 225,
      render: (_, record) => record.mtuName,
      filteredValue: filters.mtuName,
      filters: mtuNameFilters,
      filterSearch: true,
    },
    {
      title: '',
      key: 'actions',
      width: 95,
      render: (_, record) => (
        <Button
          className={styles['companies-table__edit']}
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
      width: 95,
      render: (_, record) => (
        <Switch
          checked={record.isActive}
          onChange={(checked) => handleStatusChange(record.id, checked)}
        />
      ),
    },
  ];
};
