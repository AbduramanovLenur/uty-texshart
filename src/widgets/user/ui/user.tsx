import type { FC } from 'react';
import cn from 'classnames';
import { Breadcrumb, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';

import UserBody from './user-body';
import { getBreadcrumbs } from '../model/lib/utils/get-breadcrumbs';
import { mockUserDetails } from '../model/mock';

import { PageHeader } from '@shared/ui';
import { routes } from '@shared/config';
import { IconPen } from '@shared/assets';
import { CreateUserModal, open as openCreateUserModal } from '@features/create-user-modal';

import styles from './user.module.scss';

const User: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();
  const breadcrumbs = getBreadcrumbs(t);

  const handleEdit = () => {
    dispatch(openCreateUserModal({ id }));
  };

  const handleBack = () => {
    navigate(routes.USERS);
  };

  const editButton = (
    <Button
      className={cn(styles['user__edit-btn'])}
      type='link'
      icon={<IconPen />}
      onClick={handleEdit}
    >
      {t('actions.edit')}
    </Button>
  );

  return (
    <section className={cn(styles['user'], 'section')}>
      <div className={cn('section-single-inner')}>
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
        <UserBody user={mockUserDetails} actionSlot={editButton} />
        <CreateUserModal />
      </div>
    </section>
  );
};

export default User;
