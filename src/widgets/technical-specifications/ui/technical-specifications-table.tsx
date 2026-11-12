import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Table } from 'antd';
import cn from 'classnames';

import type { TFilterKey } from '../model/types/filter';
import { mockTechnicalSpecifications } from '../model/mock';
import { useGetColumns } from './columns';

import { ViewApplicantModal, open as openViewApplicantModal } from '@features/view-applicant-modal';
import { ViewTechnicalSpecificationModal, open as openViewTechnicalSpecificationModal } from '@features/view-technical-specification-modal';
import type { ITechnicalSpecification } from '@entities/technical-specification';
import { useTableFilters } from '@shared/lib';
import { Paginator } from '@shared/ui';

const TechnicalSpecificationsTable: FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const total = 125;
  const {
    filters,
    handleTableChange,
    handlePaginationChange,
  } = useTableFilters<ITechnicalSpecification, TFilterKey>();

  const handleOpenApplicantModal = (record: ITechnicalSpecification) => {
    dispatch(openViewApplicantModal(record.id));
  };

  const handleOpenTechnicalSpecificationModal = (record: ITechnicalSpecification) => {
    dispatch(openViewTechnicalSpecificationModal(record.id));
  };

  const columns = useGetColumns(
    filters,
    handleOpenTechnicalSpecificationModal,
    handleOpenApplicantModal,
  );

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
      <ViewTechnicalSpecificationModal />
    </div>
  );
};

export default TechnicalSpecificationsTable;
