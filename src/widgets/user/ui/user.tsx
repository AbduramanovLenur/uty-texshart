import type { FC } from 'react';
import cn from 'classnames';
import { Breadcrumb } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';

import UserBody from './user-body';
import { getBreadcrumbs } from '../model/lib/utils/get-breadcrumbs';
import { mockUserDetails } from '../model/mock';

import { PageHeader } from '@shared/ui';
import { routes } from '@shared/config';

import styles from './user.module.scss';

const User: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const breadcrumbs = getBreadcrumbs(t);

  console.log(id);

  const handleBack = () => {
    navigate(routes.USERS);
  };

  return (
    <section className={cn(styles['user'], 'section')}>
      <div className={cn(styles['user__inner'], 'section-single-inner')}>
        <Breadcrumb
          classNames={{
            root: cn('breadcrumbs'),
            item: cn('breadcrumbs__item'),
          }}
          items={breadcrumbs}
        />
        <div className={cn(styles['user__top'])}>
          <PageHeader onClick={handleBack}>
            {mockUserDetails.name}
          </PageHeader>
        </div>
        <UserBody user={mockUserDetails} />
      </div>
    </section>
  );
};

export default User;
