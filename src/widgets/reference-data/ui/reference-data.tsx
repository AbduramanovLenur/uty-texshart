import { useState, type FC } from 'react';
import { Button, Tabs, Typography, type TabsProps } from 'antd';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import cn from 'classnames';

import CommunicationTypesTable from './communication-types-table/communication-types-table';
import CrossingMethodsTable from './crossing-methods-table/crossing-methods-table';
import TechnicalParametersTable from './technical-parameters-table/technical-parameters-table';

import {
  ReferenceDataModal,
  ReferenceDataTypes,
  open as openReferenceDataModal,
  type TReferenceDataType,
} from '@features/reference-data-modal';
import { IconPlus } from '@shared/assets';

const { Title } = Typography;

const ReferenceData: FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState<TReferenceDataType>(ReferenceDataTypes.COMMUNICATION_TYPES);

  const handleOpenCreateModal = () => {
    dispatch(openReferenceDataModal({ type: activeTab }));
  };

  const handleTabChange = (key: string) => {
    setActiveTab(key as TReferenceDataType);
  };

  const items: TabsProps['items'] = [
    {
      key: ReferenceDataTypes.COMMUNICATION_TYPES,
      label: t('referenceData.tabs.communicationTypes'),
      children: <CommunicationTypesTable />,
    },
    {
      key: ReferenceDataTypes.CROSSING_METHODS,
      label: t('referenceData.tabs.crossingMethods'),
      children: <CrossingMethodsTable />,
    },
    {
      key: ReferenceDataTypes.TECHNICAL_PARAMETERS,
      label: t('referenceData.tabs.technicalParameters'),
      children: <TechnicalParametersTable />,
    },
  ];

  return (
    <section className={cn('section')}>
      <div className={cn('section-inner')}>
        <div className={cn('section-top')}>
          <Title className={cn('section-title')} level={3}>
            {t('referenceData.title')}
          </Title>
          <Button
            className={cn('create-btn')}
            type='primary'
            icon={<IconPlus />}
            onClick={handleOpenCreateModal}
          >
            {t('referenceData.create')}
          </Button>
        </div>
        <div className={cn('tabs')}>
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
        <ReferenceDataModal />
      </div>
    </section>
  );
};

export default ReferenceData;
