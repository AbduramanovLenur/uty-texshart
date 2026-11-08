import type { FC } from 'react';
import { Tabs, type TabsProps } from 'antd';
import { useTranslation } from 'react-i18next';

import IncomingApplicationInformation from './incoming-application-information';
import IncomingApplicationMap from './incoming-application-map';
import IncomingApplicationApplicant from './incoming-application-applicant';
import IncomingApplicationFiles from './incoming-application-files';

import { TabKeys } from '../model/constants/tab-keys';

const ApplicationBody: FC = () => {
  const { t } = useTranslation();

  const items: TabsProps['items'] = [
    {
      key: TabKeys.FIRST_TAB,
      label: t('application.tabs.info'),
      children: <IncomingApplicationInformation />,
    },
    {
      key: TabKeys.SECOND_TAB,
      label: t('application.tabs.map'),
      children: <IncomingApplicationMap />,
    },
    {
      key: TabKeys.THIRD,
      label: t('application.tabs.applicantInfo'),
      children: <IncomingApplicationApplicant />,
    },
    {
      key: TabKeys.FOURTH,
      label: t('application.tabs.documents'),
      children: <IncomingApplicationFiles />,
    },
  ];

  return (
    <div className='tabs'>
      <Tabs
        classNames={{
          root: 'tabs__root',
          header: 'tabs__header',
          item: 'tabs__item',
        }}
        defaultActiveKey={TabKeys.FIRST_TAB}
        items={items}
      />
    </div>
  );
};

export default ApplicationBody;
