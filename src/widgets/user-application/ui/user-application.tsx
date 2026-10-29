import { type FC } from 'react';
import cn from 'classnames';
import { Breadcrumb, Button, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import UserApplicationBody from './user-application-body';
import { getBreadcrumbs } from '../model/breadcrumbs';

import { routes } from '@shared/config';
import { IconLeftChevron } from '@shared/assets';

import styles from './user-application.module.scss';

const { Title } = Typography;

const UserApplication: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const breadcrumbs = getBreadcrumbs(t);

  const handleBack = () => {
    navigate(routes.APPLICATIONS);
  };

  return (
    <section className={cn(styles['user-applications'], 'section')}>
      <div className={cn(styles['user-application__inner'], 'section-inner')}>
        <Breadcrumb
          classNames={{
            root: 'breadcrumbs',
            item: 'breadcrumbs__item',
          }}
          items={breadcrumbs}
        />
        <div className={styles['user-application__top']}>
          <Button
            className={styles['user-application__back']}
            type='default'
            onClick={handleBack}
          >
            <IconLeftChevron />
          </Button>
          <Title className={styles['user-application__title']} level={3}>
            ARZ-31234123
          </Title>
        </div>
        <UserApplicationBody />
      </div>
    </section>
  );
};

export default UserApplication;
