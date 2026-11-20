import { useState, type FC } from 'react';
import { Tabs, Typography, type TabsProps } from 'antd';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import ProfileInformation from './profile-information';
import ProfileSessionsTable from './profile-sessions-table';
import { TabKeys, type TTabKey } from '../model/constants/tab-keys';

import styles from './profile.module.scss';

const { Title } = Typography;

const Profile: FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<TTabKey>(TabKeys.PROFILE_INFO);

  const handleTabChange = (key: string) => {
    setActiveTab(key as TTabKey);
  };

  const items: TabsProps['items'] = [
    {
      key: TabKeys.PROFILE_INFO,
      label: t('profile.tabs.info'),
      children: <ProfileInformation />,
    },
    {
      key: TabKeys.SESSIONS_HISTORY,
      label: t('profile.tabs.sessionsHistory'),
      children: <ProfileSessionsTable />,
    },
  ];

  return (
    <section className={cn(styles['profile'], 'section')}>
      <div className={cn(styles['profile__inner'], 'section-inner')}>
        <Title className={cn(styles['profile__title'], 'section-title')} level={3}>
          {t('profile.page')}
        </Title>
        <div className={cn(styles['profile__tabs'], 'tabs')}>
          <Tabs
            classNames={{
              root: cn('tabs__root'),
              header: cn('tabs__header'),
              item: cn('tabs__item'),
            }}
            activeKey={activeTab}
            onChange={handleTabChange}
            items={items}
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;
