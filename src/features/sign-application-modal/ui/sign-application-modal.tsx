import type { FC, ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Modal } from 'antd';
import cn from 'classnames';

import { close, stateSignApplicationModal } from '../model/store/slice';

import styles from './sign-application-modal.module.scss';

interface IProps {
  title?: string;
  width?: number;
  onClose?: () => void;
  children?: ReactNode;
}

const SignApplicationModal: FC<IProps> = ({
  title,
  onClose,
  children,
}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { isOpen } = useSelector(stateSignApplicationModal);

  const handleClose = () => {
    dispatch(close());
    onClose?.();
  };

  return (
    <Modal
      className={cn(styles['sign-application-modal'])}
      open={isOpen}
      onCancel={handleClose}
      title={title ?? t('signApplicationModal.title')}
      centered
      width={600}
      footer={null}
      destroyOnHidden
    >
      <div className={cn(styles['sign-application-modal__body'])}>
        {children}
      </div>
    </Modal>
  );
};

export default SignApplicationModal;
