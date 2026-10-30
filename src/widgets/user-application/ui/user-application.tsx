import { type FC } from 'react';
import cn from 'classnames';
import { Breadcrumb } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import UserApplicationBody from './user-application-body';
import { getBreadcrumbs } from '../model/breadcrumbs';

import { PageHeader } from '@shared/ui';
import { routes } from '@shared/config';

import styles from './user-application.module.scss';

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
        <PageHeader onClick={handleBack}>
          ARZ-31234123
        </PageHeader>
        <UserApplicationBody />
      </div>
    </section>
  );
};

export default UserApplication;
