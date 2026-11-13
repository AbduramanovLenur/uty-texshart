import { useState, type FC } from 'react';
import { Button, Tabs, Typography, type TabsProps } from 'antd';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import MtuTable from './mtu-table/mtu-table';
import CompaniesTable from './companies-table/companies-table';

import { TabKeys, type TTabKey } from '../model/constants/tab-keys';
import { IconPlus } from '@shared/assets';

import styles from './mtu-and-companies.module.scss';

const { Title } = Typography;

const MtuAndCompanies: FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<TTabKey>(TabKeys.MTU);

  const handleTabChange = (key: string) => {
    setActiveTab(key as TTabKey);
  };

  const items: TabsProps['items'] = [
    {
      key: TabKeys.MTU,
      label: t('mtuAndCompanies.tabs.mtu'),
      children: <MtuTable />,
    },
    {
      key: TabKeys.COMPANIES,
      label: t('mtuAndCompanies.tabs.companies'),
      children: <CompaniesTable />,
    },
    {
      key: TabKeys.PRIVATE_BRANCHES,
      label: t('mtuAndCompanies.tabs.privateBranches'),
      children: <div className={styles['mtu-and-companies__test-page']}>Test page</div>,
    },
  ];

  return (
    <section className={cn(styles['mtu-and-companies'], 'section')}>
      <div className={cn(styles['mtu-and-companies__inner'], 'section-inner')}>
        <div className={cn(styles['mtu-and-companies__top'], 'section-top')}>
          <Title className={cn(styles['mtu-and-companies__title'], 'section-title')} level={3}>
            {t('mtuAndCompanies.title')}
          </Title>
          <Button
            className={cn(styles['mtu-and-companies__create'])}
            type='primary'
            icon={<IconPlus />}
          >
            {t('mtuAndCompanies.create')}
          </Button>
        </div>
        <div className={cn(styles['mtu-and-companies__tabs'], 'tabs')}>
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

export default MtuAndCompanies;
