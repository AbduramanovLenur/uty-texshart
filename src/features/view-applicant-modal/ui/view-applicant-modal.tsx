import type { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button, Modal } from 'antd';
import cn from 'classnames';

import { close, stateViewApplicantModal } from '../model/store/slice';

import { UserInfo } from '@entities/user';

import styles from './view-applicant-modal.module.scss';

const ViewApplicantModal: FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { isOpen } = useSelector(stateViewApplicantModal);

  const handleClose = () => {
    dispatch(close());
  };

  return (
    <Modal
      className={cn('modal')}
      open={isOpen}
      onCancel={handleClose}
      title={t('userInfo.title')}
      centered
      width={600}
      destroyOnHidden
      footer={
        <div className={cn('modal__footer')}>
          <Button
            className={cn('modal__button-close')}
            type='default'
            onClick={handleClose}
          >
            {t('actions.close')}
          </Button>
        </div>
      }
    >
      <UserInfo className={cn(styles['view-user-modal__info'])} />
    </Modal>
  );
};

export default ViewApplicantModal;
