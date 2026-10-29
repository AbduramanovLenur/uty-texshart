import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Tabs, Typography, type TabsProps } from 'antd';

import { ApplicationInfo, ApplicationsTimeline } from '@entities/applications';

import styles from './application-details.module.scss';

const { Title } = Typography;

const ApplicationDetails: FC = () => {
  const { t } = useTranslation();

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: t('dashboard.applicationDetails.process'),
      children: <ApplicationsTimeline />,
    },
    {
      key: '2',
      label: t('dashboard.applicationDetails.details'),
      children: <ApplicationInfo />,
    },
  ];

  return (
    <div className={styles['application-details']}>
      <Title className={styles['application-details__title']} level={4}>
        {t('dashboard.applicationDetails.title')}
      </Title>
      <Tabs
        classNames={{
          root: 'tabs',
          header: 'tabs__header',
          item: 'tabs__item',
        }}
        defaultActiveKey='1'
        items={items}
      />
    </div>
  );
};

export default ApplicationDetails;
