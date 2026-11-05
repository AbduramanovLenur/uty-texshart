import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Tabs, Typography, type TabsProps } from 'antd';
import cn from 'classnames';

import { tabKeys } from '../model/tabKeys';

import { ApplicationInfo, ApplicationsTimeline } from '@entities/applications';

import styles from './application-details.module.scss';

const { Title } = Typography;

const ApplicationDetails: FC = () => {
  const { t } = useTranslation();

  const items: TabsProps['items'] = [
    {
      key: tabKeys.FIRST_TAB,
      label: t('dashboard.applicationDetails.process'),
      children: <ApplicationsTimeline />,
    },
    {
      key: tabKeys.SECOND_TAB,
      label: t('dashboard.applicationDetails.details'),
      children: <ApplicationInfo />,
    },
  ];

  return (
    <div className={cn(styles['application-details'], 'tabs')}>
      <Title className={styles['application-details__title']} level={4}>
        {t('dashboard.applicationDetails.title')}
      </Title>
      <Tabs
        classNames={{
          root: 'tabs__root',
          header: 'tabs__header',
          item: 'tabs__item',
        }}
        defaultActiveKey={tabKeys.FIRST_TAB}
        items={items}
      />
    </div>
  );
};

export default ApplicationDetails;
