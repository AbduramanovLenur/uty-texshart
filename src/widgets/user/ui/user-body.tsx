import type { FC } from 'react';
import { Tabs, type TabsProps } from 'antd';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { TabKeys } from '../model/constants/tab-keys';
import { UserDetailsCard, type IUserDetails } from '@entities/user';

import styles from './user-body.module.scss';

interface IProps {
  user: IUserDetails;
}

const UserBody: FC<IProps> = ({ user }) => {
  const { t } = useTranslation();

  const items: TabsProps['items'] = [
    {
      key: TabKeys.FIRST_TAB,
      label: t('users.tabs.info'),
      children: (
        <div className={cn(styles['user-body__content'])}>
          <UserDetailsCard user={user} />
        </div>
      ),
    },
  ];

  return (
    <div className={cn(styles['user-body'], 'tabs')}>
      <Tabs
        classNames={{
          root: cn('tabs__root'),
          header: cn(styles['user-body__tabs'], 'tabs__header'),
          item: cn(styles['user-body__tab'], 'tabs__item'),
        }}
        defaultActiveKey={TabKeys.FIRST_TAB}
        items={items}
      />
    </div>
  );
};

export default UserBody;
