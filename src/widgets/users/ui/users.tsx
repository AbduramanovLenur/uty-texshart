import type { FC } from 'react';
import { Typography, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import UsersTable from './users-table';

import { CreateUserModal, open as openCreateUserModal } from '@features/create-user-modal';
import { IconDownload, IconPlus } from '@shared/assets';

const { Title } = Typography;

const Users: FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleOpenCreateModal = () => {
    dispatch(openCreateUserModal());
  };

  return (
    <section className={cn('section')}>
      <div className={cn('section-inner')}>
        <div className={cn('section-top')}>
          <Title className={cn('section-title')} level={3}>
            {t('users.title')}
          </Title>
          <Button
            className={cn('section-btn-download')}
            type='default'
            icon={<IconDownload />}
          >
            {t('actions.download')}
          </Button>
          <Button
            className={cn('create-btn')}
            type='primary'
            icon={<IconPlus />}
            onClick={handleOpenCreateModal}
          >
            {t('users.create')}
          </Button>
        </div>
        <UsersTable />
        <CreateUserModal />
      </div>
    </section>
  );
};

export default Users;
