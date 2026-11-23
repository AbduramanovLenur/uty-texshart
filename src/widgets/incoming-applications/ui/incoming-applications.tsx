import type { FC } from 'react';
import cn from 'classnames';
import { Button, Typography } from 'antd';
import { useTranslation } from 'react-i18next';

import IncomingApplicationsTable from './incoming-applications-table';

import { ViewApplicantModal } from '@features/view-applicant-modal';
import { ViewProcessModal } from '@features/view-process-modal';
import { IconDownload } from '@shared/assets';

const { Title } = Typography;

const IncomingApplications: FC = () => {
  const { t } = useTranslation();

  return (
    <section className={cn('section')}>
      <div className={cn('section-inner')}>
        <div className={cn('section-top')}>
          <Title className={cn('section-title')} level={3}>
            {t('incomingApplications.title')}
          </Title>
          <Button
            className={cn('section-btn-download')}
            type='default'
            icon={<IconDownload />}
          >
            {t('actions.download')}
          </Button>
        </div>
        <IncomingApplicationsTable />
        <ViewApplicantModal />
        <ViewProcessModal />
      </div>
    </section>
  );
};

export default IncomingApplications;
