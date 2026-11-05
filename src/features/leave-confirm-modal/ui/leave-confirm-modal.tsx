import type { FC } from 'react';
import { Modal, Button } from 'antd';
import { useTranslation } from 'react-i18next';

import { useLeaveConfirm } from '../model/use-leave-confirm';
import type { ILeaveConfirmModalProps } from '../model/types';

import styles from './leave-confirm-modal.module.scss';

export const LeaveConfirmModal: FC<ILeaveConfirmModalProps> = ({
  when = true,
  open,
  title,
  description,
  leaveText,
  continueText,
  onLeave,
  onStay,
}) => {
  const { t } = useTranslation();
  const { isOpen: isBlockedOpen, handleLeave, handleStay } = useLeaveConfirm({ when, onLeave, onStay });

  const visible = open !== undefined ? open : isBlockedOpen;

  const displayTitle = title ?? t('leaveConfirmModal.title');
  const displayDescription = description ?? t('leaveConfirmModal.description');
  const displayLeaveText = leaveText ?? t('actions.close');
  const displayContinueText = continueText ?? t('leaveConfirmModal.continue');

  return (
    <Modal
      open={visible}
      title={displayTitle}
      onCancel={handleStay}
      centered
      width={520}
      destroyOnHidden
      className={styles['leave-confirm-modal']}
      footer={
        <div className={styles['leave-confirm-modal__actions']}>
          <Button
            className={styles['leave-confirm-modal__btn-leave']}
            type='default'
            onClick={handleLeave}
          >
            {displayLeaveText}
          </Button>
          <Button
            className={styles['leave-confirm-modal__btn-continue']}
            type='primary'
            danger
            onClick={handleStay}
          >
            {displayContinueText}
          </Button>
        </div>
      }
    >
      <p className={styles['leave-confirm-modal__description']}>
        {displayDescription}
      </p>
    </Modal>
  );
};

export default LeaveConfirmModal;
