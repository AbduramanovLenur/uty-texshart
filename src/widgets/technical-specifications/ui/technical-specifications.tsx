import type { FC } from 'react';
import cn from 'classnames';
import { Button, Typography } from 'antd';
import { useTranslation } from 'react-i18next';

import TechnicalSpecificationsTable from './technical-specifications-table';

import { ViewApplicantModal } from '@features/view-applicant-modal';
import { ViewTechnicalSpecificationModal } from '@features/view-technical-specification-modal';
import { IconDownload } from '@shared/assets';

const { Title } = Typography;

const TechnicalSpecifications: FC = () => {
  const { t } = useTranslation();

  return (
    <section className={cn('section')}>
      <div className={cn('section-inner')}>
        <div className={cn('section-top')}>
          <Title className={cn('section-title')} level={3}>
            {t('technicalSpecifications.title')}
          </Title>
          <Button
            className={cn('section-btn-download')}
            type='default'
            icon={<IconDownload />}
          >
            {t('actions.download')}
          </Button>
        </div>
        <TechnicalSpecificationsTable />
        <ViewApplicantModal />
        <ViewTechnicalSpecificationModal />
      </div>
    </section>
  );
};

export default TechnicalSpecifications;
