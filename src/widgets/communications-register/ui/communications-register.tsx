import type { FC } from 'react';
import cn from 'classnames';
import { Typography } from 'antd';
import { useTranslation } from 'react-i18next';

import CommunicationsRegisterControls from './communications-register-controls';
import CommunicationsRegisterTable from './communications-register-table';
import { FilterKeys } from '../model/constants/filter-keys';
import { Periods } from '../model/constants/periods';
import type { TFilterKey } from '../model/types/filter';

import type { ICommunicationRegister } from '@entities/communication-register';
import { useTableFilters } from '@shared/lib';

const { Title } = Typography;

const CommunicationsRegister: FC = () => {
  const { t } = useTranslation();
  const {
    filters,
    handleTableChange,
    handlePaginationChange,
    handleFilterChange,
  } = useTableFilters<ICommunicationRegister, TFilterKey>({
    [FilterKeys.PERIOD]: [Periods.CURRENT_MONTH],
  });

  return (
    <section className={cn('section')}>
      <div className={cn('section-inner')}>
        <div className={cn('section-top')}>
          <Title className={cn('section-title')} level={3}>
            {t('communicationsRegister.title')}
          </Title>
          <CommunicationsRegisterControls
            filters={filters}
            onFilterChange={handleFilterChange}
          />
        </div>
        <CommunicationsRegisterTable
          filters={filters}
          onTableChange={handleTableChange}
          onPaginationChange={handlePaginationChange}
        />
      </div>
    </section>
  );
};

export default CommunicationsRegister;
