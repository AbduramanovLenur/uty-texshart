import { type FC } from 'react';
import { Typography, Button } from 'antd';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import { useNavigate } from 'react-router-dom';

import ApplicationTable from './applications-table';

import { IconDownload, IconPlus } from '@shared/assets';
import { routes } from '@shared/config';

import styles from './applications.module.scss';

const { Title } = Typography;

const Applications: FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleCreateApplication = () => {
    navigate(routes.CREATE_APPLICATION());
  };

  return (
    <section className={cn(styles['applications'], 'section')}>
      <div className={cn(styles['applications__inner'], 'section-inner')}>
        <div className={styles['applications__top']}>
          <Title className={styles['applications__title']} level={3}>
            {t('applications.title')}
          </Title>
          <Button
            className={styles['applications__download']}
            type='default'
            icon={<IconDownload />}
          >
            {t('actions.download')}
          </Button>
          <Button
            className={styles['applications__create']}
            type='primary'
            icon={<IconPlus />}
            onClick={handleCreateApplication}
          >
            {t('applications.create')}
          </Button>
        </div>
        <ApplicationTable />
      </div>
    </section>
  );
};

export default Applications;
