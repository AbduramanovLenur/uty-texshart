import type { FC } from 'react';
import { Typography, Button } from 'antd';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import UsersTable from './users-table';

import { IconDownload, IconPlus } from '@shared/assets';

import styles from './users.module.scss';

const { Title } = Typography;

const Users: FC = () => {
  const { t } = useTranslation();

  return (
    <section className={cn(styles['users'], 'section')}>
      <div className={cn(styles['users__inner'], 'section-inner')}>
        <div className={cn(styles['users__top'], 'section-top')}>
          <Title className={cn(styles['users__title'], 'section-title')} level={3}>
            {t('users.title')}
          </Title>
          <Button
            className={cn(styles['users__download'], 'section-btn-download')}
            type='default'
            icon={<IconDownload />}
          >
            {t('actions.download')}
          </Button>
          <Button
            className={styles['users__create']}
            type='primary'
            icon={<IconPlus />}
          >
            {t('users.create')}
          </Button>
        </div>
        <UsersTable />
      </div>
    </section>
  );
};

export default Users;
