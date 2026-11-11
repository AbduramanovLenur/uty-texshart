import type { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button, Modal } from 'antd';

import { close, stateViewTechnicalSpecificationModal } from '../model/store/slice';
import { mockTechnicalSpecificationDetails } from '../model/mock';

import { IconDownload, IconPrint } from '@shared/assets';
import { routes } from '@shared/config';
import { downloadFile, printFile } from '@shared/utils';

import styles from './view-technical-specification-modal.module.scss';

const ViewTechnicalSpecificationModal: FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { isOpen, technicalSpecificationId } = useSelector(stateViewTechnicalSpecificationModal);

  const techId = technicalSpecificationId || mockTechnicalSpecificationDetails.id;
  const appId = mockTechnicalSpecificationDetails.applicationId;
  const signedDate = mockTechnicalSpecificationDetails.signedAt;
  const validUntilDate = mockTechnicalSpecificationDetails.validUntil;
  const documentUrl = mockTechnicalSpecificationDetails.documentUrl;

  const handleClose = () => {
    dispatch(close());
  };

  const handlePrint = () => {
    printFile(documentUrl);
  };

  const handleDownload = () => {
    downloadFile(documentUrl);
  };

  return (
    <Modal
      className={styles['view-technical-specification-modal']}
      classNames={{
        wrapper: styles['view-technical-specification-modal__wrap'],
        body: styles['view-technical-specification-modal__body'],
      }}
      open={isOpen}
      onCancel={handleClose}
      centered
      title={null}
      footer={null}
      closable={false}
      destroyOnHidden
    >
      <div className={styles['view-technical-specification-modal__wrapper']}>
        <div className={styles['view-technical-specification-modal__header']}>
          <div className={styles['view-technical-specification-modal__header-left']}>
            <div className={styles['view-technical-specification-modal__badge']}>
              {techId}
            </div>
            <div className={styles['view-technical-specification-modal__meta']}>
              <span>{t('technicalSpecifications.modal.signedAt', { date: signedDate })}</span>
              <span>{t('technicalSpecifications.modal.validUntil', { date: validUntilDate })}</span>
            </div>
          </div>
          <div className={styles['view-technical-specification-modal__header-right']}>
            <span className={styles['view-technical-specification-modal__label']}>
              {t('technicalSpecifications.modal.applicationNumber')}:
            </span>
            <Link
              className={styles['view-technical-specification-modal__link']}
              to={routes.SINGLE_APPLICATION(appId)}
            >
              <span>
                {appId}
              </span>
            </Link>
          </div>
        </div>

        <div className={styles['view-technical-specification-modal__document']}>
          <iframe
            className={styles['view-technical-specification-modal__iframe']}
            src={documentUrl}
            title={t('technicalSpecifications.title')}
          />
        </div>

        <div className={styles['view-technical-specification-modal__footer']}>
          <div className={styles['view-technical-specification-modal__actions']}>
            <Button
              className={styles['view-technical-specification-modal__download']}
              type='primary'
              icon={<IconDownload />}
              onClick={handleDownload}
            >
              {t('actions.downloadSize', { size: '5 MB' })}
            </Button>
            <Button
              className={styles['view-technical-specification-modal__print']}
              type='default'
              icon={<IconPrint />}
              onClick={handlePrint}
            >
              {t('actions.print')}
            </Button>
          </div>
          <Button
            className={styles['view-technical-specification-modal__close']}
            type='default'
            onClick={handleClose}
          >
            {t('actions.close')}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ViewTechnicalSpecificationModal;
