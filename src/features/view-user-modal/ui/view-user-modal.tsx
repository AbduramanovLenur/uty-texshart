import type { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button, Modal } from 'antd';

import { close, stateViewUserModal } from '../model/slice';

import { UserInfo } from '@entities/user';

const ViewUserModal: FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { isOpen } = useSelector(stateViewUserModal);

  const handleClose = () => {
    dispatch(close());
  };

  return (
    <Modal
      className='modal'
      open={isOpen}
      onCancel={handleClose}
      title={t('userInfo.title')}
      centered
      width={600}
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
      <UserInfo />
    </Modal>
  );
};

export default ViewUserModal;
