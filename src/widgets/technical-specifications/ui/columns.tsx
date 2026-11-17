import type { TableProps } from 'antd';
import { Link } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import { useDispatch } from 'react-redux';

import { FilterKeys } from '../model/constants/filter-keys';
import type { TFilterKey } from '../model/types/filter';

import { open as openViewApplicantModal } from '@features/view-applicant-modal';
import { open as openViewTechnicalSpecificationModal } from '@features/view-technical-specification-modal';
import { TableDateRangeFilter } from '@features/table-date-range-filter';
import { TableSearchFilter } from '@features/table-search-filter';
import { StatusTag } from '@shared/ui';
import type { ITechnicalSpecification } from '@entities/technical-specification';
import { routes, Statuses } from '@shared/config';
import type { TTableFilterState } from '@shared/types';
import { getSortOrder } from '@shared/utils';

export const useGetColumns = (filters: TTableFilterState<TFilterKey>): TableProps<ITechnicalSpecification>['columns'] => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleOpenApplicantModal = (record: ITechnicalSpecification) => {
    dispatch(openViewApplicantModal({ id: record.id }));
  };

  const handleOpenTechnicalSpecificationModal = (record: ITechnicalSpecification) => {
    dispatch(openViewTechnicalSpecificationModal({ id: record.id }));
  };

  return [
    {
      title: t('headers.technicalSpecificationId'),
      key: FilterKeys.TECHNICAL_SPECIFICATION_ID,
      width: 180,
      sorter: true,
      sortOrder: getSortOrder(filters, FilterKeys.TECHNICAL_SPECIFICATION_ID),
      filteredValue: filters.technicalSpecificationId,
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <TableSearchFilter
          setSelectedKeys={setSelectedKeys}
          selectedKeys={selectedKeys}
          confirm={confirm}
          clearFilters={clearFilters}
          placeholder={t('placeholders.technicalSpecificationId')}
          clearLabel={t('placeholders.clear')}
          searchLabel={t('placeholders.search')}
        />
      ),
      filterIcon: (filtered: boolean) => (
        <SearchOutlined style={{ color: filtered ? 'var(--ant-blue)' : undefined }} />
      ),
      render: (_, record) => (
        <button
          className={cn('table-trigger')}
          type='button'
          onClick={() => handleOpenTechnicalSpecificationModal(record)}
        >
          {record.id}
        </button>
      ),
    },
    {
      title: t('headers.applicationId'),
      key: FilterKeys.APPLICATION_ID,
      width: 160,
      sorter: true,
      sortOrder: getSortOrder(filters, FilterKeys.APPLICATION_ID),
      filteredValue: filters.applicationId,
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <TableSearchFilter
          setSelectedKeys={setSelectedKeys}
          selectedKeys={selectedKeys}
          confirm={confirm}
          clearFilters={clearFilters}
          placeholder={t('placeholders.applicationId')}
          clearLabel={t('placeholders.clear')}
          searchLabel={t('placeholders.search')}
        />
      ),
      filterIcon: (filtered: boolean) => (
        <SearchOutlined style={{ color: filtered ? 'var(--ant-blue)' : undefined }} />
      ),
      render: (_, record) => (
        <Link className={cn('table-trigger')} to={routes.SINGLE_APPLICATION(record.applicationId)}>
          {record.applicationId}
        </Link>
      ),
    },
    {
      title: t('headers.applicant'),
      key: FilterKeys.APPLICANT,
      minWidth: 230,
      filteredValue: filters.applicant,
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <TableSearchFilter
          setSelectedKeys={setSelectedKeys}
          selectedKeys={selectedKeys}
          confirm={confirm}
          clearFilters={clearFilters}
          placeholder={t('placeholders.applicant')}
          clearLabel={t('placeholders.clear')}
          searchLabel={t('placeholders.search')}
        />
      ),
      filterIcon: (filtered: boolean) => (
        <SearchOutlined style={{ color: filtered ? 'var(--ant-blue)' : undefined }} />
      ),
      render: (_, record) => (
        <button
          className={cn('table-trigger')}
          type='button'
          onClick={() => handleOpenApplicantModal(record)}
        >
          {record.applicant}
        </button>
      ),
    },
    {
      title: t('headers.status'),
      key: FilterKeys.STATUS,
      width: 160,
      filteredValue: filters.status,
      filters: [
        { text: t('statuses.draft'), value: Statuses.DRAFT },
        { text: t('statuses.submitted'), value: Statuses.SUBMITTED },
        { text: t('statuses.paymentDone'), value: Statuses.PAYMENT_DONE },
        { text: t('statuses.accepted'), value: Statuses.ACCEPTED },
        { text: t('statuses.forwarded'), value: Statuses.FORWARDED },
        { text: t('statuses.actCreated'), value: Statuses.ACT_CREATED },
        { text: t('statuses.actConfirmed'), value: Statuses.ACT_CONFIRMED },
        { text: t('statuses.technicalConditionsIssued'), value: Statuses.TECHNICAL_CONDITIONS_ISSUED },
        { text: t('statuses.projectDocumentsUploaded'), value: Statuses.PROJECT_DOCUMENTS_UPLOADED },
        { text: t('statuses.constructionPermitIssued'), value: Statuses.CONSTRUCTION_PERMIT_ISSUED },
        { text: t('statuses.constructionStarted'), value: Statuses.CONSTRUCTION_STARTED },
        { text: t('statuses.constructionCompleted'), value: Statuses.CONSTRUCTION_COMPLETED },
        { text: t('statuses.constructionActUploaded'), value: Statuses.CONSTRUCTION_ACT_UPLOADED },
        { text: t('statuses.completed'), value: Statuses.COMPLETED },
        { text: t('statuses.rejected'), value: Statuses.REJECTED },
      ],
      filterSearch: true,
      render: (_, record) => (
        <StatusTag status={record.status} />
      ),
    },
    {
      title: t('headers.validUntil'),
      key: FilterKeys.VALID_UNTIL,
      width: 180,
      sorter: true,
      sortOrder: getSortOrder(filters, FilterKeys.VALID_UNTIL),
      filteredValue: filters.validUntil,
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <TableDateRangeFilter
          setSelectedKeys={setSelectedKeys}
          selectedKeys={selectedKeys}
          confirm={confirm}
          clearFilters={clearFilters}
          displayFormat='DD.MM.YYYY'
          valueFormat='YYYY-MM-DD'
          clearLabel={t('placeholders.clear')}
          searchLabel={t('placeholders.search')}
        />
      ),
      render: (_, record) => record.validUntil,
    },
    {
      title: t('headers.signedAt'),
      key: FilterKeys.SIGNED_AT,
      width: 160,
      sorter: true,
      sortOrder: getSortOrder(filters, FilterKeys.SIGNED_AT),
      filteredValue: filters.signedAt,
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <TableDateRangeFilter
          setSelectedKeys={setSelectedKeys}
          selectedKeys={selectedKeys}
          confirm={confirm}
          clearFilters={clearFilters}
          displayFormat='DD.MM.YYYY'
          valueFormat='YYYY-MM-DD'
          clearLabel={t('placeholders.clear')}
          searchLabel={t('placeholders.search')}
        />
      ),
      render: (_, record) => record.signedAt,
    },
  ];
};
