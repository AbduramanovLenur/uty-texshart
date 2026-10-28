import { type FC } from 'react';
import { Tabs, Typography, type TabsProps } from 'antd';

import { ApplicationInfo } from '@entities/applications';

import styles from './application-details.module.scss';

const { Title } = Typography;

const ApplicationDetails: FC = () => {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Jarayon',
      children: 'Content of Tab Pane 1',
    },
    {
      key: '2',
      label: 'Batafsil',
      children: <ApplicationInfo />,
    },
  ];

  return (
    <div className={styles['application-details']}>
      <Title className={styles['application-details__title']} level={4}>
        Ariza ma’lumotlari
      </Title>
      <Tabs
        classNames={{
          root: 'tabs',
          header: 'tabs__header',
          item: 'tabs__item',
        }}
        defaultActiveKey='2'
        items={items}
      />
    </div>
  );
};

export default ApplicationDetails;
