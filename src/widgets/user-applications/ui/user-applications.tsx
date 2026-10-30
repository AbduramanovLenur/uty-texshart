import { type FC } from 'react';
import { Typography, Button } from 'antd';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import UserApplicationTable from './user-applications-table';

import { IconDownload, IconPlus } from '@shared/assets';

import styles from './user-applications.module.scss';

const { Title } = Typography;

const UserApplications: FC = () => {
  const { t } = useTranslation();

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
