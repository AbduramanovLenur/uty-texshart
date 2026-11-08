import type { FC } from 'react';
import { Tabs, type TabsProps } from 'antd';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import ApplicationInformation from './application-information';
import ApplicationMap from './application-map';

import { TabKeys } from '../model/tab-keys';

import styles from './application-body.module.scss';

const ApplicationBody: FC = () => {
  const { t } = useTranslation();

  const items: TabsProps['items'] = [
    {
      key: TabKeys.FIRST_TAB,
      label: t('application.tabs.info'),
      children: <ApplicationInformation />,
    },
    {
      key: TabKeys.SECOND_TAB,
      label: t('application.tabs.map'),
      children: <ApplicationMap />,
    },
  ];

  return (
    <div className={cn(styles['application-body'], 'tabs')}>
      <Tabs
        classNames={{
          root: 'tabs__root',
          header: cn(styles['application-body__tabs'], 'tabs__header'),
          item: 'tabs__item',
        }}
        defaultActiveKey={TabKeys.FIRST_TAB}
        items={items}
      />
    </div>
  );
};

export default ApplicationBody;
