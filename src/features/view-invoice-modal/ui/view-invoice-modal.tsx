import type { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Button, Modal } from 'antd';

import { close, stateViewInvoiceModal } from '../model/store/slice';
import { mockInvoiceDetails } from '../model/mock';

import { IconPrint, IconShare } from '@shared/assets';
import { routes } from '@shared/config';
import { printFile } from '@shared/utils';

import styles from './view-invoice-modal.module.scss';

const ViewInvoiceModal: FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isOpen, url } = useSelector(stateViewInvoiceModal);

  const documentUrl = url || mockInvoiceDetails.documentUrl;

  const handleClose = () => {
    dispatch(close());
  };

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({ url: documentUrl });
      return;
    }

    if (navigator.clipboard) {
      await navigator.clipboard.writeText(documentUrl);
    }
  };

  const handlePrint = () => {
    printFile(documentUrl);
  };

  const handleBackToMain = () => {
    dispatch(close());
    // navigate(routes.DASHBOARD);
  };

  return (
    <Modal
      className={styles['view-invoice-modal']}
      classNames={{
        wrapper: styles['view-invoice-modal__wrap'],
        body: styles['view-invoice-modal__body'],
      }}
      open={isOpen}
      onCancel={handleClose}
      centered
      title={null}
      footer={null}
      closable={false}
      destroyOnHidden
    >
      <div className={styles['view-invoice-modal__wrapper']}>
        <div className={styles['view-invoice-modal__header']}>
          <div className={styles['view-invoice-modal__actions']}>
            <Button
              className={styles['view-invoice-modal__button']}
              type='default'
              icon={<IconShare />}
              onClick={handleShare}
            >
              {t('actions.share')}
            </Button>
            <Button
              className={styles['view-invoice-modal__button']}
              type='default'
              icon={<IconPrint />}
              onClick={handlePrint}
            >
              {t('actions.print')}
            </Button>
          </div>
          <Button
            className={styles['view-invoice-modal__button']}
            type='default'
            onClick={handleBackToMain}
          >
            {t('invoiceModal.backToMain')}
          </Button>
        </div>

        <div className={styles['view-invoice-modal__document']}>
          <iframe
            className={styles['view-invoice-modal__iframe']}
            src={documentUrl}
            title={t('invoiceModal.title')}
          />
        </div>
      </div>
    </Modal>
  );
};

export default ViewInvoiceModal;
