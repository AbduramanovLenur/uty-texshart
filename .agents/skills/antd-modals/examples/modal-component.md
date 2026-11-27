# Пример эталонного модального окна с Redux

```tsx
import type { FC } from 'react';
import { Button, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { close, stateModal } from '../model/store/slice';

export const ExampleModal: FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { isOpen, id } = useSelector(stateModal);

  const handleClose = () => {
    dispatch(close());
  };

  const handleConfirm = () => {
    console.log('Confirmed action for id:', id);
    handleClose();
  };

  return (
    <Modal
      className={cn('modal')}
      classNames={{
        body: cn('form-body'),
      }}
      open={isOpen}
      onCancel={handleClose}
      title={t('exampleModal.title')}
      centered
      width={520}
      destroyOnHidden
      footer={
        <div className={cn('modal__footer')}>
          <Button
            className={cn('modal__button-close')}
            type='default'
            onClick={handleClose}
          >
            {t('actions.cancel')}
          </Button>
          <Button
            className={cn('modal__button-confirm')}
            type='primary'
            onClick={handleConfirm}
          >
            {t('actions.confirm')}
          </Button>
        </div>
      }
    >
      <p>{t('exampleModal.description')}</p>
    </Modal>
  );
};

export default ExampleModal;
```
