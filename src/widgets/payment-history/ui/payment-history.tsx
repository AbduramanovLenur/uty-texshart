import type { FC } from 'react';
import cn from 'classnames';
import { Button, Typography } from 'antd';
import { useTranslation } from 'react-i18next';

import { IconDownload } from '@shared/assets';

import styles from './payment-history.module.scss';
import PaymentHistoryTable from './payment-history-table';

const { Title } = Typography;

const PaymentHistory: FC = () => {
  const { t } = useTranslation();

  return (
    <section className={cn(styles['payment-history'], 'section')}>
      <div className={cn(styles['payment-history__inner'], 'section-inner')}>
        <div className={cn(styles['payment-history__top'], 'section-top')}>
          <Title className={cn(styles['payment-history__title'], 'section-title')} level={3}>
            {t('paymentHistory.title')}
          </Title>
          <Button
            className={cn(styles['payment-history__download'], 'section-btn-download')}
            type='default'
            icon={<IconDownload />}
          >
            {t('actions.download')}
          </Button>
        </div>
        <PaymentHistoryTable />
      </div>
    </section>
  );
};

export default PaymentHistory;
