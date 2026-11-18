import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Tabs, Typography, type TabsProps } from 'antd';
import cn from 'classnames';

import { TabKeys } from '../model/constants/tab-keys';

import { ApplicationInfo, ApplicationsTimeline } from '@/entities/application';

import styles from './application-details.module.scss';

const { Title } = Typography;

interface IProps {
  id?: string;
  className?: string;
}

const ApplicationDetails: FC<IProps> = ({ id, className }) => {
  const { t } = useTranslation();

  const items: TabsProps['items'] = [
    {
      key: TabKeys.FIRST_TAB,
      label: t('dashboard.applicationDetails.process'),
      children: <ApplicationsTimeline />,
    },
    {
      key: TabKeys.SECOND_TAB,
      label: t('dashboard.applicationDetails.details'),
      children: <ApplicationInfo />,
    },
  ];

  return (
    <div className={cn(styles['application-details'], 'tabs', className)}>
      <Title className={cn(styles['application-details__title'])} level={4}>
        {t('dashboard.applicationDetails.title')}
      </Title>
      <Tabs
        classNames={{
          root: cn('tabs__root'),
          header: cn('tabs__header'),
          item: cn('tabs__item'),
        }}
        defaultActiveKey={TabKeys.FIRST_TAB}
        items={items}
      />
    </div>
  );
};

export default ApplicationDetails;
