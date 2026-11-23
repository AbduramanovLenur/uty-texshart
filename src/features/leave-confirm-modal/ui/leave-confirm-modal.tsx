import type { FC } from 'react';
import { Modal, Button } from 'antd';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import type { BlockerFunction } from 'react-router-dom';

import { useLeaveConfirm } from '../model/lib/hooks/use-leave-confirm';

import styles from './leave-confirm-modal.module.scss';

export interface IProps {
  when?: boolean | BlockerFunction;
  open?: boolean;
  onLeave?: () => void;
  onStay?: () => void;
}

const LeaveConfirmModal: FC<IProps> = ({
  when = true,
  open,
  onLeave,
  onStay,
}) => {
  const { t } = useTranslation();
  const { isOpen: isBlockedOpen, handleLeave, handleStay } = useLeaveConfirm({ when, onLeave, onStay });

  const visible = open !== undefined ? open : isBlockedOpen;

  return (
    <Modal
      open={visible}
      title={t('leaveConfirmModal.title')}
      onCancel={handleStay}
      centered
      width={520}
      destroyOnHidden
      className={cn(styles['leave-confirm-modal'])}
      footer={
        <div className={cn(styles['leave-confirm-modal__actions'])}>
          <Button
            type='default'
            onClick={handleStay}
          >
            {t('actions.close')}
          </Button>
          <Button
            className={cn(styles['leave-confirm-modal__btn-continue'])}
            type='primary'
            danger
            onClick={handleLeave}
          >
            {t('leaveConfirmModal.continue')}
          </Button>
        </div>
      }
    >
      <p className={cn(styles['leave-confirm-modal__description'])}>
        {t('leaveConfirmModal.description')}
      </p>
    </Modal>
  );
};

export default LeaveConfirmModal;
