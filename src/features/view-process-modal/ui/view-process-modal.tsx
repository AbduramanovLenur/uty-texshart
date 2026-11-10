import type { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
// import { Link } from 'react-router-dom';
import { Button, Modal } from 'antd';
import cn from 'classnames';

import { close, stateViewProcessModal } from '../model/store/slice';
import { ApplicationsTimeline } from '@/entities/application';
// import { routes } from '@shared/config';

import styles from './view-process-modal.module.scss';

const ViewProcessModal: FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { isOpen, applicationId } = useSelector(stateViewProcessModal);

  console.log(applicationId);

  const handleClose = () => {
    dispatch(close());
  };

  return (
    <Modal
      className={cn('modal', styles['view-process-modal'])}
      open={isOpen}
      onCancel={handleClose}
      title={t('processModal.title')}
      centered
      width={560}
      classNames={{ body: 'scrollbar' }}
      destroyOnHidden
      footer={
        <div className='modal__footer'>
          <Button
            className='modal__button-close'
            type='default'
            onClick={handleClose}
          >
            {t('actions.close')}
          </Button>
        </div>
      }
    >
      <ApplicationsTimeline className={styles['view-process-modal__timeline']} />
    </Modal>
  );
};

export default ViewProcessModal;
