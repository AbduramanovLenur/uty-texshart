import { useState, type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Table, type TableProps } from 'antd';
import cn from 'classnames';

import type { TColumnFilters, TFilterKey, TTableFilters } from '../model/types/technical-specifications';
import { mockTechnicalSpecifications } from '../model/mock';
import { useGetColumns } from './columns';

import { ViewApplicantModal, open as openViewApplicantModal } from '@features/view-applicant-modal';
import type { ITechnicalSpecification } from '@entities/technical-specification';
import { defaultValues } from '@shared/config';
import { Paginator } from '@shared/ui';

interface IProps {
  onTechnicalSpecificationClick?: (record: ITechnicalSpecification) => void;
}

const TechnicalSpecificationsTable: FC<IProps> = ({
  onTechnicalSpecificationClick,
}) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const total = 125;
  const [filters, setFilters] = useState<TTableFilters>({
    page: defaultValues.PAGE,
    limit: defaultValues.LIMIT,
  });

  const handleOpenApplicantModal = (record: ITechnicalSpecification) => {
    dispatch(openViewApplicantModal(record.id));
  };

  const columns = useGetColumns(filters, onTechnicalSpecificationClick, handleOpenApplicantModal);

  const handleTableChange: TableProps<ITechnicalSpecification>['onChange'] = (
    _,
    nextFilters: TColumnFilters,
    sorter,
  ) => {
    const activeSorter = Array.isArray(sorter) ? sorter[0] : sorter;

    setFilters(({ page, limit }) => ({
      ...nextFilters,
      page,
      limit,
      sortBy: activeSorter?.order ? (activeSorter.columnKey as TFilterKey) : null,
      sortOrder: activeSorter?.order ?? null,
    }));
  };

  const handlePaginationChange = (page: number, limit: number) => {
    setFilters((prev) => ({ ...prev, page, limit }));
  };

  return (
    <div className={cn('table-wrapper')}>
      <div className={cn('table-wrapper-body', 'scrollbar')}>
        <Table<ITechnicalSpecification>
          classNames={{
            root: 'table',
            header: {
              cell: 'table-header-cell',
            },
            body: {
              row: 'table-body-row',
            },
          }}
          dataSource={mockTechnicalSpecifications}
          columns={columns}
          pagination={false}
          scroll={{ x: 'max-content' }}
          onChange={handleTableChange}
        />
      </div>
      <div className={cn('table-wrapper-pagination')}>
        <Paginator
          total={total}
          page={filters.page}
          limit={filters.limit}
          onChange={handlePaginationChange}
          summary={t('summary', { count: total })}
        />
      </div>
      <ViewApplicantModal />
    </div>
  );
};

export default TechnicalSpecificationsTable;
