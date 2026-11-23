import type { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button, Modal } from 'antd';
import cn from 'classnames';

import { close, stateModal } from '../model/store/slice';

import styles from './view-pdf-modal.module.scss';

const ViewPdfModal: FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { isOpen, url } = useSelector(stateModal);

  const handleClose = () => {
    dispatch(close());
  };

  return (
    <Modal
      className={cn(styles['view-pdf-modal'])}
      classNames={{
        wrapper: cn(styles['view-pdf-modal__wrap']),
      }}
      open={isOpen}
      centered
      title={null}
      footer={null}
      closable={false}
      destroyOnHidden
    >
      <div className={cn(styles['view-pdf-modal__document'])}>
        <iframe
          className={cn(styles['view-pdf-modal__iframe'])}
          src={url!}
          title='PDF Document'
        />
      </div>
      <div className={cn(styles['view-pdf-modal__footer'])}>
        <Button
          className={cn(styles['view-pdf-modal__close'])}
          type='default'
          size='large'
          onClick={handleClose}
        >
          {t('actions.close')}
        </Button>
      </div>
    </Modal>
  );
};

export default ViewPdfModal;
