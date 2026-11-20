import type { FC } from 'react';
import cn from 'classnames';
import { Button, Typography } from 'antd';
import { useTranslation } from 'react-i18next';

import LogsTable from './logs-table';
import { IconDownload } from '@shared/assets';

import styles from './logs.module.scss';

const { Title } = Typography;

const Logs: FC = () => {
  const { t } = useTranslation();

  return (
    <section className={cn(styles['logs'], 'section')}>
      <div className={cn(styles['logs__inner'], 'section-inner')}>
        <div className={cn(styles['logs__top'], 'section-top')}>
          <Title className={cn(styles['logs__title'], 'section-title')} level={3}>
            {t('logs.title')}
          </Title>
          <Button
            className={cn(styles['logs__download'], 'section-btn-download')}
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
