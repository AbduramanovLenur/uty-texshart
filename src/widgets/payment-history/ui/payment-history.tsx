import type { FC } from 'react';
import cn from 'classnames';
import { Button, Typography } from 'antd';
import { useTranslation } from 'react-i18next';

import PaymentHistoryTable from './payment-history-table';

import { ViewInvoiceModal } from '@features/view-invoice-modal';
import { IconDownload } from '@shared/assets';

const { Title } = Typography;

const PaymentHistory: FC = () => {
  const { t } = useTranslation();

  return (
    <section className={cn('section')}>
      <div className={cn('section-inner')}>
        <div className={cn('section-top')}>
          <Title className={cn('section-title')} level={3}>
            {t('paymentHistory.title')}
          </Title>
          <Button
            className={cn('section-btn-download')}
            type='default'
            icon={<IconDownload />}
          >
            {t('actions.download')}
          </Button>
        </div>
        <PaymentHistoryTable />
        <ViewInvoiceModal />
      </div>
    </section>
  );
};

export default PaymentHistory;
