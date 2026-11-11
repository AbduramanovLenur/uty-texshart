import type { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal } from 'antd';
import { useTranslation } from 'react-i18next';

import { mockPlatformTerms } from '../model/mock';
import { close, stateRegisterTermsModal } from '../model/store/slice';

import styles from './register-terms-modal.module.scss';

const RegisterTermsModal: FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { isOpen, documentUrl } = useSelector(stateRegisterTermsModal);

  const termsUrl = documentUrl || mockPlatformTerms.documentUrl;

  const handleClose = () => {
    dispatch(close());
  };

  return (
    <Modal
      className={styles['register-terms-modal']}
      classNames={{
        wrapper: styles['register-terms-modal__wrap'],
      }}
      open={isOpen}
      onCancel={handleClose}
      centered
      title={null}
      footer={null}
      closable={false}
      destroyOnHidden
    >
      <div className={styles['register-terms-modal__wrapper']}>
        <div className={styles['register-terms-modal__document']}>
          <iframe
            className={styles['register-terms-modal__iframe']}
            src={termsUrl}
            title={t('register.termsModal.title')}
          />
        </div>
        <div className={styles['register-terms-modal__footer']}>
          <Button
            className={styles['register-terms-modal__close']}
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

export default RegisterTermsModal;
