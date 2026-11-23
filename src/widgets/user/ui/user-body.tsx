import type { FC, ReactNode } from 'react';
import { Tabs, type TabsProps } from 'antd';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { TabKeys } from '../model/constants/tab-keys';
import { UserDetailsCard, type IUserDetails } from '@entities/user';

import styles from './user-body.module.scss';

interface IProps {
  user: IUserDetails;
  actionSlot?: ReactNode;
  children?: ReactNode;
}

const UserBody: FC<IProps> = ({ user, actionSlot, children }) => {
  const { t } = useTranslation();
  const action = actionSlot ?? children;

  const items: TabsProps['items'] = [
    {
      key: TabKeys.FIRST_TAB,
      label: t('users.tabs.info'),
      children: (
        <div className={cn(styles['user-body__content'])}>
          <UserDetailsCard user={user} actionSlot={action} />
        </div>
      ),
    },
  ];

  return (
    <div className={cn(styles['user-body'], 'tabs')}>
      <Tabs
        classNames={{
          root: cn('tabs__root'),
          header: cn('tabs__header'),
          item: cn(styles['user-body__tab'], 'tabs__item'),
        }}
        defaultActiveKey={TabKeys.FIRST_TAB}
        items={items}
      />
    </div>
  );
};

export default UserBody;
