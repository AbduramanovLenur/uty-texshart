import type { FC } from 'react';
import cn from 'classnames';
import { Button, Typography } from 'antd';
import { useTranslation } from 'react-i18next';

import LogsTable from './logs-table';
import { IconDownload } from '@shared/assets';

const { Title } = Typography;

const Logs: FC = () => {
  const { t } = useTranslation();

  return (
    <section className={cn('section')}>
      <div className={cn('section-inner')}>
        <div className={cn('section-top')}>
          <Title className={cn('section-title')} level={3}>
            {t('logs.title')}
          </Title>
          <Button
            className={cn('section-btn-download')}
            type='default'
            icon={<IconDownload />}
          >
            {t('actions.download')}
          </Button>
        </div>
        <LogsTable />
      </div>
    </section>
  );
};

export default Logs;
