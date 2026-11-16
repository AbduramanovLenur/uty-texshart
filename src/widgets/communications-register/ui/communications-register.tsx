import type { FC } from 'react';
import cn from 'classnames';
import { Typography } from 'antd';
import { useTranslation } from 'react-i18next';

import CommunicationsRegisterControls from './communications-register-controls';
import CommunicationsRegisterTable from './communications-register-table';

import styles from './communications-register.module.scss';

const { Title } = Typography;

const CommunicationsRegister: FC = () => {
  const { t } = useTranslation();

  return (
    <section className={cn(styles['communications-register'], 'section')}>
      <div className={cn(styles['communications-register__inner'], 'section-inner')}>
        <div className={cn(styles['communications-register__top'], 'section-top')}>
          <Title className={cn(styles['communications-register__title'], 'section-title')} level={3}>
            {t('communicationsRegister.title')}
          </Title>
          <CommunicationsRegisterControls />
        </div>
        <CommunicationsRegisterTable />
      </div>
    </section>
  );
};

export default CommunicationsRegister;
