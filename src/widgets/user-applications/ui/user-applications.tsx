import { type FC } from 'react';
import { Typography, Button } from 'antd';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import { useNavigate } from 'react-router-dom';

import UserApplicationTable from './user-applications-table';

import { IconDownload, IconPlus } from '@shared/assets';

import styles from './user-applications.module.scss';

import { routes } from '@shared/config';

const { Title } = Typography;

const UserApplications: FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleCreateApplication = () => {
    navigate(routes.CREATE_APPLICATION());
  };

  return (
    <section className={cn(styles['user-applications'], 'section')}>
      <div className={cn(styles['user-applications__inner'], 'section-inner')}>
        <div className={styles['user-applications__top']}>
          <Title className={styles['user-applications__title']} level={3}>
            {t('userApplications.title')}
          </Title>
          <Button
            className={styles['user-applications__download']}
            type='default'
            icon={<IconDownload />}
          >
            {t('userApplications.download')}
          </Button>
          <Button
            className={styles['user-applications__create']}
            type='primary'
            icon={<IconPlus />}
            onClick={handleCreateApplication}
          >
            {t('userApplications.create')}
          </Button>
        </div>
        <UserApplicationTable />
      </div>
    </section>
  );
};

export default UserApplications;
