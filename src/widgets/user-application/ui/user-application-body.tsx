import type { FC } from 'react';
import { Tabs, type TabsProps } from 'antd';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import ApplicationInformation from './application-information';
import ApplicationMap from './application-map';

import styles from './user-application-body.module.scss';

const UserApplicationBody: FC = () => {
  const { t } = useTranslation();

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: t('userApplication.tabs.info'),
      children: <ApplicationInformation />,
    },
    {
      key: '2',
      label: t('userApplication.tabs.map'),
      children: <ApplicationMap />,
    },
  ];

  return (
    <div className={styles['user-application-body']}>
      <Tabs
        classNames={{
          root: 'tabs',
          header: cn(styles['user-application-body__tabs'], 'tabs__header'),
          item: 'tabs__item',
        }}
        defaultActiveKey='1'
        items={items}
      />
    </div>
  );
};

export default UserApplicationBody;
